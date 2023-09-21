import { useCalendarGrid, useDateFormatter } from "react-aria";
import { CalendarState } from "react-stately";

const colorByLevel = {
  0: "bg-gray-200",
  1: "bg-lime-200",
  2: "bg-green-400",
  3: "bg-green-800",
} as const;

export type ActivityLevel = keyof typeof colorByLevel;

export function CalendarGrid({
  state,
  activities,
}: {
  state: CalendarState;
  activities: Array<ActivityLevel>;
}) {
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
      <ul className="grid [grid-area:days] gap-[--square-gap] [grid-template-rows:repeat(7,_var(--square-size))]">
        {weekDays.map((weekDay) => {
          return (
            <li key={weekDay} className="odd:invisible">
              {weekDay}
            </li>
          );
        })}
      </ul>
      <ul className="grid [grid-area:squares] gap-[--square-gap] [grid-template-rows:repeat(7,_var(--square-size))] grid-flow-col auto-cols-[--square-size]">
        {[...new Array(364).keys()].map((day) => {
          const level = activities[day];
          const color = colorByLevel[level];
          return <li key={day} className={`${color}`}></li>;
        })}
      </ul>
    </div>
  );
}
