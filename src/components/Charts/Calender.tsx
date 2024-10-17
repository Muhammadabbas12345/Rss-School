import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons

// Define a type for the events
type EventType = {
  name: string;
  type: "Islamic" | "Pakistani"; // strict typing for event types
};

// Islamic and Pakistani Events
const events: Record<string, EventType> = {
  "2024-04-10": { name: "Ramadan Begins", type: "Islamic" },
  "2024-05-10": { name: "Eid al-Fitr", type: "Islamic" },
  "2024-06-17": { name: "Eid al-Adha", type: "Islamic" },
  "2024-08-14": { name: "Independence Day", type: "Pakistani" },
  "2024-03-23": { name: "Pakistan Day", type: "Pakistani" },
  "2024-12-25": { name: "Quaid-e-Azam Day", type: "Pakistani" },
  "2024-09-06": { name: "Defence Day", type: "Pakistani" },
};

const Calendar: React.FC = () => {
  // UseState with proper Date type
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Helper function to render the header
  const renderHeader = (): JSX.Element => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="flex justify-evenly mb-4">
        <button
          className="p-2 flex items-center"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        >
          <FaArrowLeft className="mr-2" /> {/* Adding left arrow icon */}
        </button>
        <span className="text-lg font-bold dark:text-white">{format(currentMonth, dateFormat)}</span>
        <button
          className="p-2 flex items-center"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          <FaArrowRight className="ml-2" /> {/* Adding right arrow icon */}
        </button>
      </div>
    );
  };

  // Helper function to render day headers (Su, Mo, etc.)
  const renderDays = (): JSX.Element => {
    const days: JSX.Element[] = [];
    const dayShortNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-bold dark:text-white" key={i}>
          {dayShortNames[i]}
        </div>
      );
    }
    return <div className="grid grid-cols-7 dark:text-white">{days}</div>;
  };

  // Helper function to render cells (the actual dates and events)
  const renderCells = (): JSX.Element => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows: JSX.Element[] = [];
    let days: JSX.Element[] = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const fullDate = format(day, "yyyy-MM-dd"); // Full date for event lookup
        const cloneDay = day;

        const isCurrentMonth = isSameMonth(day, monthStart);
        const isToday = isSameDay(day, new Date());

        days.push(
          <div
            className={`p-2 text-center cursor-pointer border ${
              !isCurrentMonth
                ? "text-gray-400"
                : isToday
                ? "bg-blue-500 text-white"
                : ""
            }`}
            key={day.toString()} // Ensures the key is string
            onClick={() => console.log(cloneDay)}
          >
            <span>{formattedDate}</span>
            {/* Check for events */}
            {typeof events[fullDate] !== "undefined" && (
              <div className={`text-xs mt-1 ${events[fullDate].type === "Islamic" ? "text-green-600" : "text-red-600"}`}>
                {events[fullDate].name}
              </div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 dark:text-white mt-6" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="mt-6">{rows}</div>;
  };

  return (
    <div className="col-span-12 rounded-sm  bg-white px-5 pb-5 pt-7.5 shadow-default  dark:bg-boxdark sm:px-7.5 xl:col-span-5 rounded-md">
      <h1 className="text-xl font-bold text-black mb-4 dark:text-white"> Calendar</h1>
      <div className="mt-4">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
};

export default Calendar;
