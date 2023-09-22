import { CSSProperties, useRef } from "react";
import { useCalendarCell, useDateFormatter, useId } from "react-aria";
import { CalendarDate } from "@internationalized/date";
import { CalendarState } from "react-stately";
import "./CalendarCell.css";

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
  const tooltipId = useId();

  return (
    <li {...cellProps} className="flex items-center justify-center group">
      <div
        {...buttonProps}
        aria-labelledby={tooltipId}
        ref={ref}
        style={
          {
            "--level": level,
            "--activity": activity,
          } as CSSProperties
        }
        className={`relative cell level${level}`}
      >
        <div className="absolute bottom-0 flex-col items-center hidden mb-6 w-max group-hover:flex">
          <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg" id={tooltipId}>
            {activity} activities on{" "}
            {formatter.format(date.toDate(state.timeZone))}
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
        </div>
      </div>
    </li>
  );
}
