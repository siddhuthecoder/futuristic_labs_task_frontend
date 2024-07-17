import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server)
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      subscribe: false,
    });
  };

  return (
    <div className="border border-gray-700 bg-gray-900 rounded-lg p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-white">
          <span className="text-green-500">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
            required
          />
        </label>
        
        <label className="block text-white">
          <span className="text-green-500">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
            required
          />
        </label>

        <label className="block text-white">
          <span className="text-green-500">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
            rows="4"
            required
          />
        </label>

        <label className="flex items-center text-white">
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            className="mr-2 text-green-500 focus:ring-green-500"
          />
          <span>Subscribe to newsletter</span>
        </label>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
