import React from 'react';

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
}

const AddpopupTeacher: React.FC<AddpopupTeacherProps> = ({ isVisible, onClose, onSubmit }) => {
  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newTeacher = {
      id: Math.random(), // You can replace this with a better ID generation logic
      name: formData.get("name") as string,
      position: formData.get("position") as string,
      subjects: (formData.get("subjects") as string).split(","),
      image: "/images/user/user-01.png", // You can allow the user to add an image path too
    };
    
    onSubmit(newTeacher);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg dark:bg-black dark:text-white w-[30%]">
        <div className='flex justify-between items-center'>
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
            <label className="block mb-1">Subjects (comma separated)</label>
            <input name="subjects" type="text" className="border w-full p-2 dark:bg-boxdark" required />
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
