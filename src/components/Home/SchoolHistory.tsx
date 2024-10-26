import Image from 'next/image'
import React from 'react'

function SchoolHistory() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white p-8 md:px-72 md:py-32 mx-auto">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-red-600 text-sm font-semibold">ABOUT US</h2>
        <h1 className="text-4xl font-bold text-gray-800">History of our school</h1>
        <p className="text-gray-700 font-semibold">
          Sed ultricies nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.
          Proin risus erat, fringilla vel purus sit amet.
        </p>
        <p className="text-gray-600">
          Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus mattis porta enim.
          Duis fermentum faucibus est, sed vehicula velit sodales vitae.
        </p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md font-semibold mt-4">Our teachers</button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image 
          src="/images/children.jpg" 
          alt="Children studying together"
          width={500} 
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default SchoolHistory
