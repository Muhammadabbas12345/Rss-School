// components/StudentResults.tsx
import React from 'react';

interface Student {
  id: number;
  rollNumber: number;
  name: string;
  totalmarks: number;
  obtainmarks: number;
  status?: 'Pass' | 'Fail'; // Make status optional
  position?: number;
}

interface StudentResultsProps {
  students: Student[];
  classTitle: string;
}

const StudentResults: React.FC<StudentResultsProps> = ({ students, classTitle }) => {
  // Sort students by obtain marks in descending order
  const sortedStudents = [...students].sort((a, b) => b.obtainmarks - a.obtainmarks);

  // Assign positions and calculate percentage and pass/fail status
  const positionedStudents = sortedStudents.map((student, index) => {
    const percentage = (student.obtainmarks / student.totalmarks) * 100;
    return {
      ...student,
      position: index + 1,
      percentage: percentage,
      status: percentage >= 50 ? 'Pass' : 'Fail', // Calculate status based on percentage
    };
  });

  // Calculate total pass/fail count
  const totalStudents = positionedStudents.length;
  const passedStudents = positionedStudents.filter(student => student.status === 'Pass').length;
  const failedStudents = totalStudents - passedStudents;

  // Calculate overall class result percentage
  const passPercentage = (passedStudents / totalStudents) * 100;

  return (
    <div className="overflow-x-auto ">
      <h2 className="text-xl font-semibold text-center mb-4">Class {classTitle}</h2>
      <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-3 px-4 border-b border-gray-200 text-left">Roll Num</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left">Name</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left">Total Marks</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left">Obtain Marks</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left">Percentage</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left">Status</th>
            <th className="py-3 px-4 border-b border-gray-200 text-left">Position</th>
          </tr>
        </thead>
        <tbody>
          {positionedStudents.map((student) => (
            <tr key={student.id} className="hover:bg-gray-100 dark:bg-boxdark-2 dark:text-bodydark">
              <td className="py-3 px-4 border-b border-gray-200">{student.rollNumber}</td>
              <td className="py-3 px-4 border-b border-gray-200">{student.name}</td>
              <td className="py-3 px-4 border-b border-gray-200">{student.totalmarks}</td>
              <td className="py-3 px-4 border-b border-gray-200">{student.obtainmarks}</td>
              <td className="py-3 px-4 border-b border-gray-200">{student.percentage.toFixed(2)}%</td>
              <td className={`py-3 px-4 border-b border-gray-200 ${student.status === 'Pass' ? 'text-green-600' : 'text-red-600'}`}>
                {student.status}
              </td>
              <td className="py-3 px-4 border-b border-gray-200">{student.position}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Overall Class Result */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Overall Class Result</h3>
        <p>Total Students: {totalStudents}</p>
        <p className="text-green-600">Passed Students: {passedStudents}</p>
        <p className="text-red-600">Failed Students: {failedStudents}</p>
        <p className="font-semibold">Pass Percentage: {passPercentage.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default StudentResults;
