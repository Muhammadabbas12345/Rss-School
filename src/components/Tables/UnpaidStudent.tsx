"use client";
import { useState } from "react";
import { FaPrint, FaEllipsisV, FaUser, } from "react-icons/fa"; // Added FaArrowLeft and FaArrowRight
import Image from "next/image";
const studentData = [
  {
    avatar: "/images/user/user-01.png",
    name: "Liam Mason",
    id: "9876543211",
    class: "VIII A",
    fees: "$45,500",
    rank: "Second"
},
{
    avatar: "/images/user/user-02.png",
    name: "Emma Smith",
    id: "9876543212",
    class: "VIII B",
    fees: "$46,700",
    rank: "First"
},
{
    avatar: "/images/user/user-03.png",
    name: "Noah Johnson",
    id: "9876543213",
    class: "VIII A",
    fees: "$47,300",
    rank: "Third"
},
{
    avatar: "/images/user/user-04.png",
    name: "Olivia Brown",
    id: "9876543214",
    class: "VIII C",
    fees: "$48,900",
    rank: "First"
},
{
    avatar: "/images/user/user-05.png",
    name: "William Jones",
    id: "9876543215",
    class: "VIII A",
    fees: "$49,100",
    rank: "Second"
},
{
    avatar: "/images/user/user-06.png",
    name: "Sophia Garcia",
    id: "9876543216",
    class: "VIII B",
    fees: "$50,400",
    rank: "Fourth"
},
{
    avatar: "/images/user/user-07.png",
    name: "James Martinez",
    id: "9876543217",
    class: "VIII C",
    fees: "$51,600",
    rank: "Third"
},
{
    avatar: "/images/user/user-08.png",
    name: "Isabella Lopez",
    id: "9876543218",
    class: "VIII A",
    fees: "$52,200",
    rank: "First"
},
{
    avatar: "/images/user/user-09.png",
    name: "Lucas Gonzalez",
    id: "9876543219",
    class: "VIII B",
    fees: "$53,400",
    rank: "Second"
},
{
    avatar: "/images/user/user-10.png",
    name: "Mia Wilson",
    id: "9876543220",
    class: "VIII C",
    fees: "$54,600",
    rank: "Third"
},
{
    avatar: "/images/user/user-11.png",
    name: "Benjamin Anderson",
    id: "9876543221",
    class: "VIII A",
    fees: "$55,800",
    rank: "Fourth"
},
{
    avatar: "/images/user/user-12.png",
    name: "Charlotte Thomas",
    id: "9876543222",
    class: "VIII B",
    fees: "$56,900",
    rank: "First"
}

];


const UnpaidStudent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 6;

  // Calculate the indices for the displayed students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentData.slice(indexOfFirstStudent, indexOfLastStudent);

  const totalPages = Math.ceil(studentData.length / studentsPerPage);


  return (
    <div className="rounded-md border border-stroke bg-white dark:bg-boxdark  pb-2.5 pt-6 shadow-default dark:border-strokedark dark:text-white text-black  xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold dark:text-white font-semibold px-7.5">Unpaid Student Intuition</h4>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-meta-4 dark:bg-blue-600 text-sm font-medium uppercase text-gray-200 px-7.5">
              <th className="py-3 px-7.5">Name</th>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Class</th>
              <th className="py-3 px-4">Fees</th>
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student, index) => (
              <tr key={index} className="border-b border-stroke dark:border-strokedark text-sm " >
                <td className="py-3 px-4 flex items-center px-7.5">
                  <Image
                    src={student.avatar}
                    alt="Student Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="ml-3 dark:text-white font-bold ">{student.name}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-primary dark:text-blue-500">ID {student.id}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="mr-2 rounded-full bg-orange-500 p-2">
                      <FaUser className="text-white" />
                    </div>
                    <span className="dark:text-white font-semibold">{student.class}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="dark:text-white font-semibold">{student.fees}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="dark:text-white font-semibold">{student.rank}</span>
                </td>
                <td className="py-3 px-4 flex items-center gap-3">
                  <button className="dark:text-white font-semibold">
                    <FaPrint />
                  </button>
                  <button className="dark:text-white font-semibold">
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination with Arrow Icons */}
        <div className="flex justify-between items-center mt-4 mb-4 dark:text-white font-semibold px-7.5">
          <span>
            Showing {indexOfFirstStudent + 1} to {indexOfLastStudent} of {studentData.length} entries
          </span>
          <div className="flex items-center space-x-2 ">
            <button
              className={`px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`px-3 py-1 border border-gray-300 rounded-md text-sm  ${
                  currentPage === i + 1 ? "bg-purple-100 text-purple-700 " : "text-gray-600"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 dark:text-white ${
                currentPage === totalPages ? "cursor-not-allowed" : ""
              }`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnpaidStudent;
