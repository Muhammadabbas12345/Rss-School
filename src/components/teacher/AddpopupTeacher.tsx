import React, { useState } from "react";

type AddpopupTeacherProps = {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (newTeacher: {
    id: number;
    name: string;
    position: string;
    contact: string;
    subjects: string[];
    image: string;
  }) => void;
};

const AddpopupTeacher: React.FC<AddpopupTeacherProps> = ({
  isVisible,
  onClose,
  onSubmit,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<string[]>([""]); // Initial empty subject

  if (!isVisible) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubjectChange = (index: number, value: string) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = value;
    setSubjects(updatedSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, ""]); // Add an empty subject input field
  };

  const handleRemoveSubject = (index: number) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newTeacher = {
      id: Math.random(), // You can replace this with a better ID generation logic
      name: formData.get("name") as string,
      contact: formData.get("contact") as string,
      position: formData.get("position") as string,
      subjects: subjects.filter((subject) => subject.trim() !== ""), // Remove empty subjects
      image: image || "",
    };

    onSubmit(newTeacher);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[30%] rounded bg-white p-6 shadow-lg dark:bg-black dark:text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">Teacher Detail</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black dark:text-white"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-4">
            <label className="mb-1 block">Name</label>
            <input
              name="name"
              type="text"
              className="w-full border p-2 dark:bg-boxdark"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Contact</label>
            <input
              name="contact"
              type="text"
              className="w-full border p-2 dark:bg-boxdark"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Position</label>
            <input
              name="position"
              type="text"
              className="w-full border p-2 dark:bg-boxdark"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Subjects</label>
            {subjects.map((subject, index) => (
              <div key={index} className="mb-2 flex items-center">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => handleSubjectChange(index, e.target.value)}
                  className="w-full border p-2 dark:bg-boxdark"
                  placeholder={`Subject ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSubject(index)}
                  className="ml-2 rounded bg-red-500 px-3 py-1 text-white"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSubject}
              className="rounded bg-blue-500 px-3 py-1 text-white"
            >
              Add Subject
            </button>
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full cursor-pointer rounded-lg border border-gray-300 text-sm text-gray-900 dark:bg-boxdark dark:text-white"
            />
            {image && (
              <img
                src={image}
                alt="Profile Preview"
                className="mt-2 h-24 w-24 rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-300 px-4 py-2 dark:bg-blue-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Add Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddpopupTeacher;
