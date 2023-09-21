import { Calendar } from "./Calendar";

// All calendar have the same number of days?
const activities = [...new Array(364).keys()].map(() => {
  const level = Math.floor(Math.random() * 100);
  return level;
});

export default function App() {
  return (
    <div>
      <nav className="grid place-items-center">
        <h1 className="mx-auto p-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          React Aria Contribution Graph
        </h1>
      </nav>
      <section className="grid place-items-center mb-auto">
        <div className="calandar-square">
          <Calendar activities={activities} />
        </div>
        <div className="calandar-circle">
          <Calendar activities={activities} />
        </div>
      </section>
      <footer className="p-4">
        <span className="flex items-center justify-center">
          Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-red-500 mx-1"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            ></path>
          </svg>
          by
          <a
            href="https://maximerichard.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-gray-700 hover:text-gray-950 font-semibold"
          >
            @rmaximedev
          </a>
          ¬
          <a
            href="https://github.com/zyhou/react-aria-contribution-graph"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-2 opacity-80 hover:opacity-100"
          >
            <svg width="24" height="24" fill="currentColor" className="mr-2">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
            <p>Source</p>
          </a>
        </span>
      </footer>
    </div>
  );
}
