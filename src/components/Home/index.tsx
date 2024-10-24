import React from 'react';
import Image from 'next/image';


function Homes() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-boxdark text-white p-2 flex justify-between items-center">
        <Image
          src= "/images/logo/logo.png"
          alt="Right Step Montessori & High School Logo"
          width={90}  
          height={90}  
          priority={true} 
        />
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

      {/* Page Content */}
      <main className="p-8">
        <p className="text-lg">Welcome to the RSS School homepage!</p>
      </main>
    </div>
  );
}

export default Homes;