"use client"
import React, { useState } from 'react';

const students = [
  { id: 1, name: 'John Doe', class: '10', fee: 300, rank: 2 },
  { id: 2, name: 'Jane Smith', class: '9', fee: 280, rank: 4 },
  { id: 3, name: 'Mike Johnson', class: '10', fee: 320, rank: 1 },
  { id: 4, name: 'Emily Davis', class: '9', fee: 250, rank: 3 },
  { id: 5, name: 'Tom White', class: '8', fee: 270, rank: 5 },
];

const Students = () => {
  const [selectedClass, setSelectedClass] = useState('all');

  // Filter students based on the selected class
  const filteredStudents = selectedClass === 'all'
    ? students
    : students.filter(student => student.class === selectedClass);

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="py-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold leading-tight">Student List</h2>

        {/* Dropdown for Class Selection */}
        <div className="flex items-center space-x-2">
          <label htmlFor="classSelect" className="text-sm font-medium text-gray-700">Select Class:</label>
          <select
            id="classSelect"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="all">All Classes</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>
        </div>
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
        <div className="min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Fee ($)
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{student.name}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{student.id}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{student.class}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">${student.fee}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{student.rank}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Edit
                    </button>
                    <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
