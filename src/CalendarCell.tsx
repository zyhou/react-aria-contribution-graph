import { useRef } from "react";
import { useCalendarCell, mergeProps, useDateFormatter } from "react-aria";
import { CalendarDate } from "@internationalized/date";
import { CalendarState } from "react-stately";
import { ActivityLevel, colorByLevel } from "./types";

export function CalendarCell({
  state,
  date,
  level,
}: {
  state: CalendarState;
  date: CalendarDate;
  level: ActivityLevel;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { cellProps, buttonProps } = useCalendarCell({ date }, state, ref);
  const formatter = useDateFormatter({
    dateStyle: "full",
    timeZone: state.timeZone,
  });

  const color = colorByLevel[level];

  return (
    <li
      ref={ref}
      {...mergeProps(cellProps, buttonProps)}
      className={`${color} cursor-default relative flex flex-col items-center group`}
    >
      <div className="absolute bottom-0 flex-col items-center hidden mb-6 w-max group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
          {level} activities on {formatter.format(date.toDate(state.timeZone))}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </li>
  );
}
