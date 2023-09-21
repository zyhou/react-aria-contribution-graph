import { useCalendarGrid, useDateFormatter } from "react-aria";
import { CalendarState } from "react-stately";
import { CalendarCell } from "./CalendarCell";
import { numberOfLevels } from "./types";
import "./CalendarGrid.css";

export function CalendarGrid({
  state,
  activities,
}: {
  state: CalendarState;
  activities: Array<number>;
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

  const min = Math.min(...activities);
  const max = Math.max(...activities);
  const interval = (max - min) / (numberOfLevels - 1);

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
        {activities.map((activity, index) => {
          const currentDate = state.visibleRange.start.add({ days: index });

          let level = 0;
          if (activity !== 0) {
            const category = Math.floor((activity - min) / interval) + 1;
            level = category < numberOfLevels ? category : numberOfLevels - 1;
          }

          return (
            <CalendarCell
              key={index}
              state={state}
              date={currentDate}
              level={level}
              activity={activity}
            />
          );
        })}
      </ul>
    </div>
  );
}
