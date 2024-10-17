// components/SchoolEvents.js
import React from "react";

// Sample events data
const events = [
  {
    id: 1,
    name: "Parent Day",
    date: "2024-11-15",
  },
  {
    id: 2,
    name: "Result day",
    date: "2024-11-15",
  },
  {
    id: 3,
    name: "Plantation date",
    date: "2024-11-15",
  },
  {
    id: 4,
    name: "Annual Sports Day",
    date: "2024-11-15",
  },
  {
    id: 5,
    name: "Science Exhibition",
    date: "2024-12-01",
  },
  {
    id: 6,
    name: "Art & Craft Workshop",
    date: "2024-12-20",
  },
];

const schoolEvents = () => {
  return (
    <section className="bg-gray-100 py-12 shadow-default h-screen dark:border-strokedark dark:bg-boxdark">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold dark:text-white text-gray-800">
          Upcoming School Events
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="rounded-lg bg-white dark:bg-[#1B1B24] shadow-md dark:bg-opacity-30 dark:text-white p-6 shadow-lg">
              <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
                {event.name}
              </h3>
              <p className="text-gray-600 dark:text-white">
                <span className="font-semibold">Date: </span>
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default schoolEvents;
