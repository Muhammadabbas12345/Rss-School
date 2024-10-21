// components/LocalEvents.js
import React from 'react';

// Sample event data for Gilgit-Baltistan
const events = [
  {
    id: 1,
    name: 'Shandur Polo Festival',
    date: 'July',
    location: 'Shandur Pass',
    description:
      'The highest polo ground in the world, where teams from Gilgit-Baltistan and Chitral compete in free-style polo.',
  },
  {
    id: 2,
    name: 'Babusar Polo Festival',
    date: 'August',
    location: 'Babusar Top',
    description:
      'A newer polo festival promoting local culture and featuring teams from across the region in scenic Babusar Top.',
  },
  {
    id: 3,
    name: 'Silk Route Festival',
    date: 'September',
    location: 'Gilgit & Hunza',
    description:
      'Celebrates the ancient Silk Route heritage with cultural performances, traditional music, and handicrafts.',
  },
  {
    id: 4,
    name: 'Naltar Skiing Competition',
    date: 'February',
    location: 'Naltar Valley',
    description:
      'A skiing competition in Naltar Valley during the winter season, attracting athletes from around the world.',
  },
  {
    id: 5,
    name: 'Jashn-e-Baharan',
    date: 'April',
    location: 'Various locations',
    description:
      'Spring festival marking the arrival of the blooming season, with traditional sports, music, and food fairs.',
  },
];

const LocalEvents = () => {
  return (
    <section className="bg-gray-100 py-12 dark:border-strokedark dark:bg-boxdark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold dark:text-bodydark text-center mb-8 text-gray-800 ">
          Local Events in Gilgit-Baltistan
        </h2>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-boxdark-2 dark:text-bodydark"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {event.name}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Date:</span> {event.date}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Location:</span> {event.location}
              </p>
              <p className="text-gray-500">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalEvents;
