"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaEllipsisV } from "react-icons/fa";

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
      name: "John Doe",
      date: "2024-10-01",
      parentName: "Jane Doe",
      city: "New York",
      contact: "1234567890",
      email: "john@example.com",
      grade: "A",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Alice Johnson",
      date: "2024-09-15",
      parentName: "Bob Johnson",
      city: "San Francisco",
      contact: "9876543210",
      email: "alice@example.com",
      grade: "B",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Sam Smith",
      date: "2024-09-10",
      parentName: "Ella Smith",
      city: "Los Angeles",
      contact: "5551234567",
      email: "sam@example.com",
      grade: "C",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
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
      setSelectedStudents(
        selectedStudents.filter((studentId) => studentId !== id),
      );
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
    setStudents(
      students.filter((student) => !selectedStudents.includes(student.id)),
    );
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
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student,
      ),
    );
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
    <div className="h-screen overflow-x-auto">
      <div className="mb-4 flex justify-end">
        {selectedStudents.length > 0 && (
          <div className="flex space-x-4">
            <button
              onClick={handleBulkDelete}
              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Delete
            </button>
            <a
              href={getEmailUrl(
                students.find((student) =>
                  selectedStudents.includes(student.id),
                )?.email || "",
              )}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Mail
            </a>
          </div>
        )}
      </div>
      <table className="min-w-full overflow-hidden rounded-lg bg-white shadow-md dark:bg-boxdark-2 dark:text-bodydark">
        <thead>
          <tr className="bg-blue-100 text-blue-600 dark:bg-boxdark dark:text-bodydark">
            <th className="p-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-full"
                onChange={handleMainCheckbox}
                checked={
                  selectedStudents.length === students.length &&
                  students.length > 0
                }
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
            <tr
              key={student.id}
              className="border-t bg-white transition-all hover:bg-blue-50 dark:bg-boxdark-2 dark:text-bodydark"
            >
              <td className="p-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 rounded-full"
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => handleCheckboxChange(student.id)}
                />
              </td>
              <td className="flex items-center space-x-4 p-4">
                <img
                  src={student.profilePic}
                  alt={student.name}
                  className="h-10 w-10 rounded-full shadow-lg"
                />
                <span className="text-blue-700">{student.name}</span>
              </td>
              <td className="p-4">{student.id}</td>
              <td className="p-4">{student.date}</td>
              <td className="p-4">{student.parentName}</td>
              <td className="p-4">{student.city}</td>
              <td className="flex space-x-4 p-4">
                <a
                  href={getWhatsAppUrl(student.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhoneAlt className="h-5 w-5 text-green-400 hover:text-green-600" />
                </a>
                <a
                  href={getEmailUrl(student.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="h-5 w-5 text-blue-400 hover:text-blue-600" />
                </a>
              </td>
              <td className="p-4">{student.grade}</td>
              <td className="p-4">
                <button
                  className="focus:outline-none"
                  onClick={() => togglePopup(student.id)}
                >
                  <FaEllipsisV className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                </button>

                {activePopup === student.id && (
                  <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg border bg-white shadow-lg dark:bg-boxdark-2 dark:text-bodydark">
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="w-96 transform rounded-lg bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out">
            <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-800">
              Student Details
            </h2>

            <div className="mb-6 flex flex-col items-center">
              <img
                src={viewModal.profilePic}
                alt={viewModal.name}
                className="mb-4 h-28 w-28 rounded-full border-4 border-blue-400 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {viewModal.name}
              </h3>
              <p className="text-gray-500">{viewModal.city}</p>
            </div>

            <div className="space-y-4 text-left text-gray-600">
              <p>
                <strong className="text-gray-700">Parent Name:</strong>{" "}
                {viewModal.parentName}
              </p>
              <p>
                <strong className="text-gray-700">City:</strong>{" "}
                {viewModal.city}
              </p>
            </div>

            <button
              onClick={() => setViewModal(null)}
              className="mt-6 w-full rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-lg transition-colors duration-200 ease-in-out hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="w-96 transform rounded-lg bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out">
            <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-800">
              Edit Student
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSubmit(editModal);
              }}
            >
              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={editModal.name}
                  onChange={(e) =>
                    setEditModal({ ...editModal, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="profile-pic"
                >
                  Profile Picture
                </label>
                <input
                  id="profile-pic"
                  type="file"
                  onChange={handleImageChange}
                  className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto mt-4 h-24 w-24 rounded-full border-4 border-blue-400 shadow-lg"
                  />
                )}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="mr-2 w-full rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-lg transition-colors duration-200 ease-in-out hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditModal(null)}
                  className="ml-2 w-full rounded-full bg-red-600 px-4 py-2 font-bold text-white shadow-lg transition-colors duration-200 ease-in-out hover:bg-red-700"
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
