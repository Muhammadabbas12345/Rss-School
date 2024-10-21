"use client"
import { useState } from 'react';
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  addMonths, 
  subMonths, 
  startOfWeek, 
  endOfWeek, 
  addDays, 
  isSameMonth, 
  isSameDay 
} from 'date-fns';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

// Type for each event
type Event = {
  id: number;
  date: Date;
  title: string;
  description: string;
};

type DateType = Date;

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<DateType>(new Date());
  const [selectedDate, setSelectedDate] = useState<DateType>(new Date());
  const [newEvent, setNewEvent] = useState({ title: '', description: '' });
  const [events, setEvents] = useState<Event[]>([
    { id: 1, date: new Date(), title: "Meeting with Team", description: "Project planning meeting" },
    { id: 2, date: addDays(new Date(), 2), title: "Doctor's Appointment", description: "Routine checkup" },
    { id: 3, date: subMonths(new Date(), 1), title: "Birthday Party", description: "Friend's birthday celebration" },
  ]);

  // Render the header with month navigation
  const renderHeader = (): JSX.Element => {
    return (
    
      <div className="flex justify-between items-center py-2 dark:bg-boxdark-2 dark:text-bodydark">
        
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="text-xl font-bold px-4 py-2"
        >
          &lt;
        </button>
        <h2 className="text-3xl font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="text-xl font-bold px-4 py-2"
        >
          &gt;
        </button>
      </div>
    );
  };

  // Render the days of the week
  const renderDays = (): JSX.Element => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 dark:bg-boxdark-2 dark:text-bodydark">
        {days.map((day, index) => (
          <div key={index} className="text-center font-bold p-2 ">
            {day}
          </div>
        ))}
      </div>
    );
  };

  // Render the individual cells of the calendar (days)
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
        const cloneDay = day;
        const dayEvents = events.filter(event => isSameDay(event.date, cloneDay)); // Filter events for the day
        days.push(
          <div
            key={day.toISOString()}
            className={`p-4 border text-center relative hover:bg-blue-200 transition dark:bg-boxdark-2 dark:text-bodydark ${
              !isSameMonth(day, monthStart) ? 'text-gray-400' : ''
            } ${isSameDay(day, selectedDate) ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <div>{format(day, 'd')}</div>
            {/* If the day has events, show a dot */}
            {dayEvents.length > 0 && (
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 " key={day.toISOString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  // Render events for the selected date
  const renderEvents = (): JSX.Element => {
    const dayEvents = events.filter(event => isSameDay(event.date, selectedDate));

    return (
      <div className="mt-4 dark:bg-boxdark-2 dark:text-bodydark">
        <h3 className="text-xl font-semibold mb-2">
          Events on {format(selectedDate, 'MMMM d, yyyy')}
        </h3>
        {dayEvents.length === 0 ? (
          <p className="text-gray-300 ">No events for this day</p>
        ) : (
          <ul className="space-y-2 ">
            {dayEvents.map(event => (
              <li key={event.id} className="p-4 border bg-gray-50 rounded-lg shadow dark:bg-boxdark-2  dark:text-bodydark">
                <h4 className="text-lg font-semibold">{event.title}</h4>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  // Handle new event form submission
  const handleAddEvent = (): void => {
    if (newEvent.title.trim() === '') {
      alert('Please enter a title for the event.');
      return;
    }
    setEvents([
      ...events,
      { id: events.length + 1, date: selectedDate, title: newEvent.title, description: newEvent.description },
    ]);
    setNewEvent({ title: '', description: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 dark:bg-boxdark-2 dark:text-bodydark">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4 dark:bg-boxdark-2 dark:text-bodydark">
      <Breadcrumb pageName={' Calender'}/>
        {renderHeader()}
        {renderDays()}
        {renderCells()}

        {renderEvents()}

        {/* Form to Add New Event */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Add New Event</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Event Title</label>
              <input
                type="text"
                className="dark:bg-boxdark-2 dark:text-bodydark mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Event Description</label>
              <textarea
                className="dark:bg-boxdark-2 dark:text-bodydark mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              />
            </div>
            <div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={handleAddEvent}
              >
                Add Event on {format(selectedDate, 'MMMM d, yyyy')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
