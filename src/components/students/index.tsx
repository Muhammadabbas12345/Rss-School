"use client"
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaEllipsisV } from 'react-icons/fa';

// Define a type for each student's data
type Student = {
  id: number;
  name: string;
  date: string;
  parentName: string;
  city: string;
  contact: string; // Phone number
  email: string;   // Email address
  grade: string;
  profilePic: string;  // Add profile picture field
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
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
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
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
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
      profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
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


  
  // Handle the "Delete" action
  const handleDelete = (id: number): void => {
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
  };

  // Open edit modal
  const handleEdit = (student: Student): void => {
    setEditModal(student);
    setImagePreview(student.profilePic); // Set the current profile picture in preview
  };

  // Handle edit form submission (for demo purposes)
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
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden  dark:bg-boxdark-2 dark:text-bodydark">
        <thead>
          <tr className="bg-pink-100 text-pink-600  dark:bg-boxdark dark:text-bodydark"> {/* Playful colors */}
            <th className="p-4">
              <input type="checkbox" className="form-checkbox h-5 w-5 rounded-full" />
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
            <tr key={student.id} className="border-t bg-white hover:bg-pink-50 transition-all  dark:bg-boxdark-2 dark:text-bodydark"> {/* Softer hover */}
              <td className="p-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 rounded-full"
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => handleCheckboxChange(student.id)}
                />
              </td>
              <td className="p-4 flex items-center space-x-4"> {/* Align image and text */}
                <img
                  src={student.profilePic}
                  alt={student.name}
                  className="w-10 h-10 rounded-full shadow-lg"
                />
                <span className="text-pink-700">{student.name}</span> {/* Colorful name */}
              </td>
              <td className="p-4">{student.id}</td>
              <td className="p-4">{student.date}</td>
              <td className="p-4">{student.parentName}</td>
              <td className="p-4">{student.city}</td>
              <td className="p-4 flex space-x-4"> {/* Contact with icons */}
                <a href={getWhatsAppUrl(student.contact)} target="_blank" rel="noopener noreferrer">
                  <FaPhoneAlt className="text-green-400 hover:text-green-600 w-5 h-5" />
                </a>
                <a href={getEmailUrl(student.email)} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope className="text-blue-400 hover:text-blue-600 w-5 h-5" />
                </a>
              </td>
              <td className="p-4">{student.grade}</td>
              <td className="relative p-4">
                <button
                  className="focus:outline-none"
                  onClick={() => togglePopup(student.id)}
                >
                  <FaEllipsisV className="w-5 h-5 text-pink-500 hover:text-pink-700" />
                </button>

                {/* Popup Menu */}
                {activePopup === student.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10  dark:bg-boxdark-2 dark:text-bodydark">
                    <button
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-pink-100"
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-pink-100"
                      onClick={() => handleView(student)}
                    >
                      View
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-pink-100"
                      onClick={() => handleDelete(student.id)}
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
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96  dark:bg-boxdark-2 dark:text-bodydark">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">View Student</h2>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={viewModal.profilePic}
                  alt={viewModal.name}
                  className="w-16 h-16 rounded-full shadow-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{viewModal.name}</h3>
                  <p>{viewModal.email}</p>
                  <p>{viewModal.contact}</p>
                </div>
              </div>
              <div>
                <p>Parent Name: {viewModal.parentName}</p>
                <p>City: {viewModal.city}</p>
                <p>Grade: {viewModal.grade}</p>
              </div>
            </div>
            <div className="p-4 text-right">
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg  dark:bg-boxdark-2 dark:text-bodydark"
                onClick={() => setViewModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96  dark:bg-boxdark-2 dark:text-bodydark">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Edit Student</h2>
              <div className="flex items-center space-x-4 mb-4">
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-16 h-16 rounded-full shadow-lg"
                  />
                )}
                <input type="file" onChange={handleImageChange} />
              </div>
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  value={editModal.name}
                  onChange={(e) => setEditModal({ ...editModal, name: e.target.value })}
                  className="w-full border rounded-lg p-2  dark:bg-boxdark-2 dark:text-bodydark"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  value={editModal.email}
                  onChange={(e) => setEditModal({ ...editModal, email: e.target.value })}
                  className="w-full border rounded-lg p-2  dark:bg-boxdark-2 dark:text-bodydark"
                />
              </div>
              <div>
                <label className="block mb-2">Contact</label>
                <input
                  type="text"
                  value={editModal.contact}
                  onChange={(e) => setEditModal({ ...editModal, contact: e.target.value }) }
                  className="w-full border rounded-lg p-2  dark:bg-boxdark-2 dark:text-bodydark"
                />
              </div>
              <div>
                <label className="block mb-2">Grade</label>
                <input
                  type="text"
                  value={editModal.grade}
                  onChange={(e) => setEditModal({ ...editModal, grade: e.target.value })}
                  className="w-full border rounded-lg p-2  dark:bg-boxdark-2 dark:text-bodydark"
                />
              </div>
            </div>
            <div className="p-4 text-right">
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
                onClick={() => handleEditSubmit(editModal)}
              >
                Save
              </button>
              <button
                className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg"
                onClick={() => setEditModal(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
