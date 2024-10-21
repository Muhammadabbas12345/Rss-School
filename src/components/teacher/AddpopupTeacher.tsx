import React, { useState } from "react";

type AddpopupTeacherProps = {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (newTeacher: {
    id: number;
    name: string;
    position: string;
    subjects: string[];
    image: string;
  }) => void;
};

const AddpopupTeacher: React.FC<AddpopupTeacherProps> = ({ isVisible, onClose, onSubmit }) => {
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
      position: formData.get("position") as string,
      subjects: subjects.filter(subject => subject.trim() !== ""), // Remove empty subjects
      image: image || ""
    };

    onSubmit(newTeacher);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg dark:bg-black dark:text-white w-[30%]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Teacher Detail</h2>
          <button onClick={onClose} className="text-gray-500 dark:text-white text-2xl hover:text-black">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-4">
            <label className="block mb-1">Name</label>
            <input name="name" type="text" className="border w-full p-2 dark:bg-boxdark" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Position</label>
            <input name="position" type="text" className="border w-full p-2 dark:bg-boxdark" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Subjects</label>
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => handleSubjectChange(index, e.target.value)}
                  className="border w-full p-2 dark:bg-boxdark"
                  placeholder={`Subject ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSubject(index)}
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddSubject}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Add Subject
            </button>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:bg-boxdark dark:text-white"
            />
            {image && (
              <img src={image} alt="Profile Preview" className="mt-2 w-24 h-24 object-cover rounded-full" />
            )}
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded dark:bg-blue-400">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Teacher</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddpopupTeacher;
