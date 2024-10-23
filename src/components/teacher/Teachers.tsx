"use client";
import { useState } from "react";
import AddpopupTeacher from "./AddpopupTeacher";

type Teacher = {
  id: number;
  name: string;
  contact: string;
  position: string;
  subjects: string[];
  image: string;
};
const getWhatsAppUrl = (phone: string): string => {
  return `https://wa.me/${phone}`;
};

{
  /* */
}
const teachersData: Teacher[] = [
  {
    id: 1,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-01.png",
  },
  {
    id: 2,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-02.png",
  },
  {
    id: 3,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-03.png",
  },
  {
    id: 4,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-04.png",
  },
  {
    id: 5,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-05.png",
  },
  {
    id: 6,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-06.png",
  },
  {
    id: 7,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-07.png",
  },
  {
    id: 8,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-08.png",
  },
  {
    id: 9,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-09.png",
  },
  {
    id: 10,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-10.png",
  },
  {
    id: 11,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-11.png",
  },
  {
    id: 12,
    name: "Dimitres Viga",
    contact: "032565565",
    position: "Teacher",
    subjects: ["Mathematics", "Science", "Art"],
    image: "/images/user/user-12.png",
  },
];

export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>(teachersData);
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle the submission of the new teacher form
  const handleAddTeacher = (newTeacher: Teacher) => {
    setTeachers([...teachers, newTeacher]);
    setIsModalOpen(false); // Close the modal after submission
  };

  // Filter teachers based on search input
  const filteredTeachers = teachers.filter((teacher) =>
    (teacher.name?.toLowerCase() || "").includes(search.toLowerCase()),
  );
  console.log(filteredTeachers, "heloo");

  return (
    <div className="container mx-auto px-4 py-2 sm:px-2 ">
      <div className="mb-4 flex justify-between bg-white  p-4 dark:bg-boxdark ">
        <input
          type="text"
          placeholder="Search here..."
          className="w-[30%] rounded border border-black px-3 py-2 outline-none dark:border-gray-300 dark:bg-boxdark "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setIsModalOpen(true)} // Open the modal on button click
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          + New Teacher
        </button>
      </div>

      {/* Render the modal */}
      <AddpopupTeacher
        isVisible={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddTeacher}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="w-full rounded-lg border bg-white p-4 shadow-md dark:border-strokedark dark:bg-boxdark dark:text-white"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
            />
            <h3 className="text-center text-lg font-semibold">
              {teacher.name}
            </h3>
            <h3 className="text-md text-center">{teacher.position}</h3>
            <div className="mt-2 flex flex-wrap justify-center">
              {(teacher.subjects || []).map((subject, idx) => (
                <span
                  key={idx}
                  className="mr-2 mt-1 rounded-full bg-gray-200 px-2 py-1 text-xs dark:bg-blue-300"
                >
                  {subject}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <button className="w-full rounded bg-purple-500 px-3 py-1 text-white">
                Profile
              </button>
              <button className="w-full rounded bg-gray-300 px-3 py-1 dark:bg-blue-400 ">
                <a
                  href={getWhatsAppUrl(teacher.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  chat
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
