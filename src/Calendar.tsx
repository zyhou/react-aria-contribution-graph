import { useCalendarState } from "react-stately";
import { useCalendar, useLocale } from "react-aria";
import {
  createCalendar,
  today,
  startOfYear,
  getLocalTimeZone,
} from "@internationalized/date";

import { ActivityLevel, CalendarGrid } from "./CalendarGrid";

export function Calendar({ activities }: { activities: Array<ActivityLevel> }) {
  const { locale } = useLocale();
  const state = useCalendarState({
    locale,
    createCalendar,
    isReadOnly: true,
    visibleDuration: { years: 1 },
    minValue: startOfYear(today(getLocalTimeZone())),
  });

  const { calendarProps } = useCalendar({}, state);

  return (
    <div {...calendarProps} className="inline-block text-gray-800">
      <CalendarGrid state={state} activities={activities} />
    </div>
  );
}
