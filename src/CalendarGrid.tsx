import { useCalendarGrid, useDateFormatter } from "react-aria";
import { CalendarState } from "react-stately";
import { today, getLocalTimeZone } from "@internationalized/date";

export function CalendarGrid({ state }: { state: CalendarState }) {
  const { gridProps, headerProps } = useCalendarGrid({}, state);

  const months = [];
  const formatter = useDateFormatter({
    month: "short",
    timeZone: state.timeZone,
  });

  // Not every calendar have the same number of months
  const numMonths = state.focusedDate.calendar.getMonthsInYear(
    state.focusedDate
  );
  for (let i = 1; i <= numMonths; i++) {
    const date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }

  const dayFormatter = useDateFormatter({
    weekday: "short",
    timeZone: state.timeZone,
  });

  const days = [...Array(7).keys()].map((day) =>
    dayFormatter.format(
      today(getLocalTimeZone())
        .set({ day: day + 1 })
        .toDate(getLocalTimeZone())
    )
  );

  return (
    <div
      {...gridProps}
      className="p-5 m-5 inline-grid gap-2.5 grid-cols-[auto_1fr] [grid-template-areas:'empty_months'_'days_squares']"
    >
      <ul
        {...headerProps}
        className="grid [grid-area:months] grid-template-months"
      >
        {months.map((month) => {
          return <li key={month}>{month}</li>;
        })}
      </ul>
      <ul className="grid [grid-area:days]">
        {days.map((day) => {
          return (
            <li key={day} className="odd:invisible">
              {day}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
