"use client";
import { useState } from "react";
import AddpopupTeacher from "./AddpopupTeacher";
import Image from "next/image";

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

const teachersData: Teacher[] = [
  { id: 1, name: "Alice Johnson", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"],  image: "/images/user/user-01.png"},
  { id: 2, name: "Michael Smith", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-02.png"},
  { id: 3, name: "Sarah Williams", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-03.png" },
  { id: 4, name: "James Brown", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-04.png" },
  { id: 5, name: "Emma Davis", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-05.png" },
  { id: 6, name: "John Wilson", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-06.png" },
  { id: 7, name: "Olivia Miller", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-07.png" },
  { id: 8, name: "David Moore", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-08.png" },
  { id: 9, name: "Sophia Taylor", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-09.png" },
  { id: 10, name: "Daniel Anderson", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-10.png" },
  { id: 11, name: "Isabella Thomas", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-11.png" },
  { id: 12, name: "William Jackson", contact:'032565565', position: "Teacher", subjects: ["Mathematics", "Science", "Art"], image: "/images/user/user-12.png" },
];


export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>(teachersData);
  const [search, setSearch] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null); 
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTeacher = (newTeacher: Teacher) => {
    setTeachers([...teachers, newTeacher]);
    setIsModalOpen(false);
  };

  const handleSelectTeacher = (teacher: Teacher) => {
    setSelectedTeacher(teacher); 
  };

  const filteredTeachers = teachers.filter((teacher) =>
    (teacher.name?.toLowerCase() || '').includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-2 py-2">
      <div className="flex justify-between mb-4 bg-white p-4 dark:bg-boxdark">
        <input
          type="text"
          placeholder="Search here..."
          className="border dark:border-gray-300 border-black rounded px-3 py-2 dark:bg-boxdark outline-none w-[30%]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          + New Teacher
        </button>
      </div>

      <AddpopupTeacher
        isVisible={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddTeacher}
      />

      {selectedTeacher ? (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white dark:bg-boxdark dark:text-white ">
           <div className="flex justify-end">
           <button
              onClick={() => setSelectedTeacher(null)} // Deselect teacher
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded ">
              Close Profile
            </button>
           </div>
          <div className="flex flex-col items-center">
            <Image
              src={selectedTeacher.image}
              alt={selectedTeacher.name}
              className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
              width={150}
              height={50}
              priority={true}
            />
            <h2 className="text-2xl font-bold">{selectedTeacher.name}</h2>
            <h3 className="text-md">{selectedTeacher.position}</h3>
            <p className="text-center">Contact: {selectedTeacher.contact}</p>
            <div className="mt-2 flex justify-center flex-wrap">
              {(selectedTeacher.subjects || []).map((subject, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-200 rounded-full px-2 py-1 mr-2 mt-1 dark:bg-blue-300">
                  {subject}
                </span>
              ))}
              
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="border rounded-lg p-4 shadow-md bg-white w-full dark:bg-boxdark dark:text-white dark:border-strokedark">
              <Image
                src={teacher.image}
                alt={teacher.name}
                className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
                width={150}
                height={50}
                priority={true}
              />
              <h3 className="text-lg font-semibold text-center">{teacher.name}</h3>
              <h3 className="text-md text-center">{teacher.position}</h3>
              <div className="mt-2 flex justify-center flex-wrap">
                {(teacher.subjects || []).map((subject, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-200 rounded-full px-2 py-1 mr-2 mt-1 dark:bg-blue-300">
                    {subject}
                  </span>
                  
                ))}
                
              </div>
              
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleSelectTeacher(teacher)} // Select the teacher
                  className="bg-purple-500 text-white px-3 py-1 rounded w-full">
                  Profile
                </button>
                <button className="bg-gray-300 px-3 py-1 rounded w-full dark:bg-blue-400">
                  <a href={getWhatsAppUrl(teacher.contact)} target="_blank" rel="noopener noreferrer">
                    Chat
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
