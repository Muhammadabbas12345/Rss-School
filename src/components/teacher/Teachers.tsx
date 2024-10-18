"use client";
import { useState } from "react";

// Defining the type for the teacher data
type Teacher = {
  id: number;
  name: string;
  position: string;
  subjects: string[];
  image: string;
};

const teachersData: Teacher[] = [
  { id: 1, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-01.png" },
  { id: 2, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-02.png" },
  { id: 3, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-03.png" },
  { id: 4, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-04.png" },
  { id: 5, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-05.png" },
  { id: 6, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-06.png" },
  { id: 7, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-07.png" },
  { id: 8, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-08.png" },
  { id: 9, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-09.png" },
  { id: 10, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-10.png" },
  { id: 11, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-11.png" },
  { id: 12, name: "Dimitres Viga", position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-12.png" },
];

export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>(teachersData);
  const [search, setSearch] = useState<string>("");

  // Add new teacher function
  const addNewTeacher = () => {
    const newTeacher: Teacher = {
      id: teachers.length + 1,
      name: "New Teacher",
      position: "Teacher",
      subjects: ["Mathematics", "Art"],
      image: "/images/user/new-teacher.png", // You can replace this with an actual image path
    };
    setTeachers([...teachers, newTeacher]);
  };

  // Filter teachers based on search input
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-2 py-2">
      <div className="flex justify-between mb-4 bg-white p-4">
        <input
          type="text"
          placeholder="Search here..."
          className="border border-gray-300 rounded px-3 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={addNewTeacher}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          + New Teacher
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="border rounded-lg p-4 shadow-md bg-white w-full">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{teacher.name}</h3>
            <h3 className="text-md text-center">{teacher.position}</h3>
            <div className="mt-2 flex justify-center flex-wrap">
              {teacher.subjects.map((subject, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-200 rounded-full px-2 py-1 mr-2 mt-1">
                  {subject}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <button className="bg-purple-500 text-white px-3 py-1 rounded w-full">
                Profile
              </button>
              <button className="bg-gray-300 px-3 py-1 rounded w-full">Chat</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
