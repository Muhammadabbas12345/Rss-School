"use client"
import { useState } from 'react';

const DefaulterTable = () => {
  // Sample data
  const [defaulters, setDefaulters] = useState([
    { id: 1, name: 'John Doe', amount: 500, class: '10th Grade' },
    { id: 2, name: 'Jane Smith', amount: 700, class: '12th Grade' },
    { id: 3, name: 'Mark Johnson', amount: 300, class: '9th Grade' },
  ]);

  const [newDefaulter, setNewDefaulter] = useState({
    name: '',
    amount: '',
    class: '',
  });

  const [editingId, setEditingId] = useState(null);

  // Handle input changes
  const handleInputChange = (e:any) => {
    setNewDefaulter({
      ...newDefaulter,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (newDefaulter.name && newDefaulter.amount && newDefaulter.class) {
      const newEntry = {
        id: defaulters.length + 1,
        name: newDefaulter.name,
        amount: parseInt(newDefaulter.amount),
        class: newDefaulter.class,
      };
      setDefaulters([...defaulters, newEntry]);
      setNewDefaulter({ name: '', amount: '', class: '' }); // Reset form
    }
  };

  const handleDelete = (id:any) => {
    setDefaulters(defaulters.filter((defaulter) => defaulter.id !== id));
  };

  const handleEdit = (defaulter:any) => {
    setEditingId(defaulter.id);
    setNewDefaulter({ name: defaulter.name, amount: defaulter.amount, class: defaulter.class });
  };

  const handleUpdate = () => {
    setDefaulters(
      defaulters.map((defaulter) =>
        defaulter.id === editingId ? { ...defaulter, ...newDefaulter, amount: parseInt(newDefaulter.amount) } : defaulter
      )
    );
    setEditingId(null); // Reset editing mode
    setNewDefaulter({ name: '', amount: '', class: '' }); // Clear form
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Fee Defaulter List</h2>

      {/* Add/Edit Form */}
      <div className="mb-6">
        <input
          type="text"
          name="name"
          value={newDefaulter.name}
          placeholder="Name"
          onChange={handleInputChange}
          className="border px-4 py-2 mr-2"
        />
        <input
          type="number"
          name="amount"
          value={newDefaulter.amount}
          placeholder="Amount"
          onChange={handleInputChange}
          className="border px-4 py-2 mr-2"
        />
        <input
          type="text"
          name="class"
          value={newDefaulter.class}
          placeholder="Class"
          onChange={handleInputChange}
          className="border px-4 py-2 mr-2"
        />
        {editingId ? (
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        )}
      </div>

      {/* Defaulter Table */}
      <table className="table-auto w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Pay Amount</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {defaulters.map((defaulter) => (
            <tr key={defaulter.id} className="border-b">
              <td className="px-4 py-2">{defaulter.name}</td>
              <td className="px-4 py-2">{defaulter.amount}</td>
              <td className="px-4 py-2">{defaulter.class}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleEdit(defaulter)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(defaulter.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DefaulterTable;
