import { Calendar } from "./Calendar";
import { ActivityLevel } from "./CalendarGrid";

// Fake level
const activities = [...new Array(364).keys()].map(() => {
  const level = Math.floor(Math.random() * 4);
  return level;
}) as Array<ActivityLevel>;

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-8 mb-16 text-gray-600">
        React Aria Contribution Graph
      </h1>
      <h2 className="ml-12 font-bold text-3xl text-gray-700">Calendar</h2>
      <Calendar activities={activities} />
    </div>
  );
}
