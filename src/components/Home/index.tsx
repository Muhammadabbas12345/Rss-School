import React from 'react';

function Homes() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">RSS School</h1>
        <div className="space-x-4">
          <a className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
          href='/dashboard'>
            Dashboard
          </a>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
            Admission
          </button>
        </div>
      </header>

      <main className="p-8">
        <p className="text-lg">Welcome to the RSS School homepage!</p>
      </main>
    </div>
  );
}

export default Homes;
