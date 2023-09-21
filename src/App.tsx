import { Calendar } from "./Calendar";
import { ActivityLevel } from "./types";

// All calendar have the same number of days?
const activities = [...new Array(364).keys()].map(() => {
  const level = Math.floor(Math.random() * 4);
  return level;
}) as Array<ActivityLevel>;

export default function App() {
  return (
    <div>
      <nav className="grid place-items-center">
        <h1 className="mx-auto p-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          React Aria Contribution Graph
        </h1>
      </nav>
      <section className="grid place-items-center">
        <Calendar activities={activities} />
      </section>
    </div>
  );
}
