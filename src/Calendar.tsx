import { useCalendarState } from "react-stately";
import { useCalendar, useLocale } from "react-aria";
import {
  createCalendar,
  today,
  startOfYear,
  getLocalTimeZone,
} from "@internationalized/date";

export function Calendar() {
  const { locale } = useLocale();
  const state = useCalendarState({
    locale,
    createCalendar,
    isReadOnly: true,
    visibleDuration: { years: 1 },
    minValue: startOfYear(today(getLocalTimeZone())),
  });

  const { calendarProps, title } = useCalendar({}, state);

  return (
    <div {...calendarProps} className="inline-block text-gray-800">
      <h3>{title}</h3>
    </div>
  );
}
