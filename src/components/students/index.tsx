"use client";
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaEllipsisV } from 'react-icons/fa';
import Image from "next/image";


type Student = {
  id: number;
  name: string;
  date: string;
  parentName: string;
  city: string;
  contact: string;
  email: string;
  grade: string;
  profilePic: string;
};

export default function StudentTable() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: 'John Doe',
      date: '2024-10-01',
      parentName: 'Jane Doe',
      city: 'New York',
      contact: '1234567890',
      email: 'john@example.com',
      grade: 'A',
      profilePic: '/images/user/user-03.png',
    },
    {
      id: 2,
      name: 'Alice Johnson',
      date: '2024-09-15',
      parentName: 'Bob Johnson',
      city: 'San Francisco',
      contact: '9876543210',
      email: 'alice@example.com',
      grade: 'B',
      profilePic: '/images/user/user-03.png',
    },
    {
      id: 3,
      name: 'Sam Smith',
      date: '2024-09-10',
      parentName: 'Ella Smith',
      city: 'Los Angeles',
      contact: '5551234567',
      email: 'sam@example.com',
      grade: 'C',
      profilePic: '/images/user/user-03.png',
    },
  ]);

  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [activePopup, setActivePopup] = useState<number | null>(null); // Track which popup is open
  const [viewModal, setViewModal] = useState<Student | null>(null); // Track student to view
  const [editModal, setEditModal] = useState<Student | null>(null); // Track student to edit
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Image preview in edit modal

  // Handle the checkbox toggle
  const handleCheckboxChange = (id: number): void => {
    if (selectedStudents.includes(id)) {
      setSelectedStudents(selectedStudents.filter((studentId) => studentId !== id));
    } else {
      setSelectedStudents([...selectedStudents, id]);
    }
  };

  // Handle main checkbox (select all)
  const handleMainCheckbox = (): void => {
    if (selectedStudents.length === students.length) {
      setSelectedStudents([]); // Deselect all
    } else {
      setSelectedStudents(students.map((student) => student.id)); // Select all
    }
  };

  // Handle bulk delete action
  const handleBulkDelete = (): void => {
    setStudents(students.filter((student) => !selectedStudents.includes(student.id)));
    setSelectedStudents([]); // Clear selected students after deletion
  };

  // Handle individual delete action from the popup
  const handleDeleteSingleStudent = (id: number): void => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Helper function to generate WhatsApp URL for phone number
  const getWhatsAppUrl = (phone: string): string => {
    return `https://wa.me/${phone}`;
  };

  // Helper function to generate mailto URL for email
  const getEmailUrl = (email: string): string => {
    return `mailto:${email}`;
  };

  // Toggle the popup when the ellipsis icon is clicked
  const togglePopup = (id: number): void => {
    setActivePopup(activePopup === id ? null : id); // Close popup if it's already open
  };

  // Open view modal
  const handleView = (student: Student): void => {
    setViewModal(student);
    setActivePopup(null);
  };

  // Open edit modal
  const handleEdit = (student: Student): void => {
    setEditModal(student);
    setImagePreview(student.profilePic); // Set the current profile picture in preview
    setActivePopup(null);
  };

  // Handle edit form submission
  const handleEditSubmit = (updatedStudent: Student): void => {
    setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
    setEditModal(null); // Close modal after submitting
  };

  // Handle image upload and preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Show the preview of the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="overflow-x-auto h-screen">
      <div className="flex justify-end mb-4">
        {selectedStudents.length > 0 && (
          <div className="flex space-x-4">
            <button
              onClick={handleBulkDelete}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <a
              href={getEmailUrl(students.find(student => selectedStudents.includes(student.id))?.email || '')}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Mail
            </a>
          </div>
        )}
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden dark:bg-boxdark-2 dark:text-bodydark">
        <thead>
          <tr className="bg-blue-100 text-blue-600 dark:bg-boxdark dark:text-bodydark">
            <th className="p-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-full"
                onChange={handleMainCheckbox}
                checked={selectedStudents.length === students.length && students.length > 0}
              />
            </th>
            <th className="p-4 text-left">Student</th>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Parent Name</th>
            <th className="p-4 text-left">City</th>
            <th className="p-4 text-left">Contact</th>
            <th className="p-4 text-left">Grade</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t bg-white hover:bg-blue-50 transition-all dark:bg-boxdark-2 dark:text-bodydark">
              <td className="p-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 rounded-full"
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => handleCheckboxChange(student.id)}
                />
              </td>
              <td className="p-4 flex items-center space-x-4">
                <img
                  src={student.profilePic}
                  alt={student.name}
                  className="w-10 h-10 rounded-full shadow-lg"
                />
                <span className="text-blue-700">{student.name}</span>
              </td>
              <td className="p-4">{student.id}</td>
              <td className="p-4">{student.date}</td>
              <td className="p-4">{student.parentName}</td>
              <td className="p-4">{student.city}</td>
              <td className="p-4 flex space-x-4">
                <a href={getWhatsAppUrl(student.contact)} target="_blank" rel="noopener noreferrer">
                  <FaPhoneAlt className="text-green-400 hover:text-green-600 w-5 h-5" />
                </a>
                <a href={getEmailUrl(student.email)} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope className="text-blue-400 hover:text-blue-600 w-5 h-5" />
                </a>
              </td>
              <td className="p-4">{student.grade}</td>
              <td className="p-4">
                <button className="focus:outline-none" onClick={() => togglePopup(student.id)}>
                  <FaEllipsisV className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                </button>

                {activePopup === student.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10 dark:bg-boxdark-2 dark:text-bodydark">
                    <button
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-blue-100"
                      onClick={() => handleView(student)}
                    >
                      View
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-blue-100"
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-blue-100"
                      onClick={() => handleDeleteSingleStudent(student.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View Modal */}
      {viewModal && (
       <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
       <div className="bg-white p-6 rounded-lg shadow-2xl w-96 transform transition-transform duration-300 ease-in-out">
         <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">Student Details</h2>
         
         <div className="flex flex-col items-center mb-6">
            <Image
                src={viewModal.profilePic}
                alt={viewModal.name}
                 className="w-28 h-28 rounded-full mb-4 shadow-lg border-4 border-blue-400"
                width={150}
                height={50}
                priority={true}
              />
           <h3 className="text-xl font-semibold text-gray-700">{viewModal.name}</h3>
           <p className="text-gray-500">{viewModal.city}</p>
         </div>
     
         <div className="space-y-4 text-gray-600 text-left">
           <p><strong className="text-gray-700">Parent Name:</strong> {viewModal.parentName}</p>
           <p><strong className="text-gray-700">City:</strong> {viewModal.city}</p>
         </div>
     
         <button
           onClick={() => setViewModal(null)}
           className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-200 ease-in-out"
         >
           Close
         </button>
       </div>
     </div>
     
      )}

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-2xl w-96 transition-transform transform duration-300 ease-in-out">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">Edit Student</h2>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            handleEditSubmit(editModal);
          }}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={editModal.name}
                onChange={(e) => setEditModal({ ...editModal, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
      
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile-pic">
                Profile Picture
              </label>
              <input
                id="profile-pic"
                type="file"
                onChange={handleImageChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-4 w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg mx-auto" />
              )}
            </div>
      
            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out shadow-lg mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditModal(null)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out shadow-lg ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      
      )}
    </div>
  );
}
