import { useRef } from "react";
import { useCalendarCell, useDateFormatter } from "react-aria";
import { CalendarDate } from "@internationalized/date";
import { CalendarState } from "react-stately";
import { colorByLevel } from "./types";

export function CalendarCell({
  state,
  date,
  level,
  activity,
}: {
  state: CalendarState;
  date: CalendarDate;
  level: number;
  activity: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { cellProps, buttonProps } = useCalendarCell({ date }, state, ref);
  const formatter = useDateFormatter({
    dateStyle: "full",
    timeZone: state.timeZone,
  });

  const color = colorByLevel[level];

  return (
    <li {...cellProps} className="group">
      <div
        {...buttonProps}
        ref={ref}
        //  w-[--square-size] h-[--square-size] pour carré
        className={`${color} relative rounded-full [height:clamp(5px,calc(${level}*4px),15px)] [width:clamp(5px,calc(${level}*4px),15px)]`}
      >
        <div className="absolute bottom-0 flex-col items-center hidden mb-6 w-max group-hover:flex">
          <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
            {activity} activities on{" "}
            {formatter.format(date.toDate(state.timeZone))}
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
        </div>
      </div>
    </li>
  );
}
