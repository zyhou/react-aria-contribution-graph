import { useCalendarGrid, useDateFormatter } from "react-aria";
import { CalendarState } from "react-stately";

export function CalendarGrid({ state }: { state: CalendarState }) {
  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    { weekdayStyle: "short" },
    state
  );

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
        {weekDays.map((weekDay) => {
          return (
            <li key={weekDay} className="odd:invisible">
              {weekDay}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
