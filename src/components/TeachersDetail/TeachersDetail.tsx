import React, { useState } from "react";

const TeachersDetail = () => {
  // Sample data for teachers (12 teachers)
  const teachers = [
    { name: "Hanu", subject: "Programming", qualification: "B.Tech", fees: "$217.70", performance: "Good" },
    { name: "Hardy", subject: "Basic Algorithm", qualification: "B.E", fees: "$17.70", performance: "Good" },
    { name: "Harry", subject: "English", qualification: "B.Tech", fees: "$219.70", performance: "Bad" },
    { name: "Harry John", subject: "History", qualification: "B.Tech", fees: "$18.70", performance: "Good" },
    { name: "Jack Xarma", subject: "Programming", qualification: "B.Tech", fees: "$19.2.70", performance: "Good" },
    { name: "James", subject: "History", qualification: "B.Com", fees: "$21.70", performance: "Bad" },
    { name: "Mark", subject: "Mathematics", qualification: "M.Sc", fees: "$25.70", performance: "Bad" },
    { name: "John", subject: "Physics", qualification: "M.Sc", fees: "$30.70", performance: "Good" },
    { name: "Doe", subject: "Chemistry", qualification: "M.Sc", fees: "$35.70", performance: "Bad" },
    { name: "Lisa", subject: "Biology", qualification: "B.Sc", fees: "$40.70", performance: "Good" },
    { name: "Anna", subject: "Computer Science", qualification: "B.Sc", fees: "$50.70", performance: "Good" },
    { name: "Emma", subject: "History", qualification: "M.Com", fees: "$60.70", performance: "Bad" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate current teachers
  const indexOfLastTeacher = currentPage * itemsPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;
  const currentTeachers = teachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

  // Calculate total pages
  const totalPages = Math.ceil(teachers.length / itemsPerPage);

  const renderPerformanceBadge = (performance: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined) => {
    return (
      <span
        className={`px-2 py-1 rounded-md text-white text-sm ${
          performance === "Good" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
        }`}
      >
        {performance}
      </span>
    );
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white  py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h1 className="text-xl font-bold text-black mb-4 px-7.5 dark:text-white">Teacher Details</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left dark:text-white">
          <thead>
            <tr className="bg-blue-200 w-full px-7.5">
              <th className="py-2 font-medium text-gray-600 px-7.5">Name</th>
              <th className="py-2 font-medium text-gray-600">Subject</th>
              <th className="py-2 font-medium text-gray-600">Qualification</th>
              <th className="py-2 font-medium text-gray-600">Fees</th>
              <th className="py-2 font-medium text-gray-600">Performance</th>
            </tr>
          </thead>
          <tbody>
            {currentTeachers.map((teacher, index) => (
              <tr key={index} className="border-t border-gray-200 ">
                <td className="py-4 px-7.5">{teacher.name}</td>
                <td className="py-4">{teacher.subject}</td>
                <td className="py-4">{teacher.qualification}</td>
                <td className="py-4">{teacher.fees}</td>
                <td className="py-4">{renderPerformanceBadge(teacher.performance)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 px-7.5 dark:text-white">
          <span className="text-gray-600 text-md font-bold dark:text-white">
            Showing {indexOfFirstTeacher + 1} to {Math.min(indexOfLastTeacher, teachers.length)} of {teachers.length} entries
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

export default TeachersDetail;
