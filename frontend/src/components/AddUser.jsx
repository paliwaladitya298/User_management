import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/add", form);
      console.log(response.data); // server response
      setForm({ name: "", email: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-sky-200">
      <div>
        <form onSubmit={onSubmithandler}>
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
