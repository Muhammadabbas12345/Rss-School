import React from 'react';

function Admission() {
  return (
    <>
      <nav className="bg-gray-200 p-4 rounded-md ">
        <ol className="list-reset flex text-blue-600">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a href="/admission" className="hover:underline">Admission</a>
          </li>
        </ol>
        
      </nav>

      <div className="mt-4 flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Admission Form</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 555-5555"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
               Cnic Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="71501-5555555-5"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <textarea
                id="address"
                placeholder="123 Main St, City, State, ZIP"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="2"
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                Grade Applying For
              </label>
              <select
                id="grade"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="" disabled>Select a grade</option>
                <option value="1">Nursery Grade</option>
                <option value="2">Prep Grade</option>
                <option value="3">1st Grade</option>
                <option value="4">2nd Grade</option>
                <option value="5">3rd Grade</option>
                <option value="6">4th Grade</option>
                <option value="7">5th Grade</option>
                <option value="8">6th Grade</option>
                <option value="9">7th Grade</option>
                <option value="10">8th Grade</option>
                <option value="11">9th Grade</option>
                <option value="12">10th Grade</option>
             
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
   </>
  );
}

export default Admission;