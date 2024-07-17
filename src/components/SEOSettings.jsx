import React from 'react';

const SEOSettings = ({ seoData, setSeoData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSeoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 bg-gray-800 shadow-md rounded-md text-white">
      <h3 className="text-lg font-semibold mb-4">SEO Settings</h3>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Title:</label>
        <input
          type="text"
          name="title"
          value={seoData.title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-gray-700 border rounded-md text-white focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Description:</label>
        <textarea
          name="description"
          value={seoData.description}
          onChange={handleInputChange}
          rows="4"
          className="w-full px-3 py-2 bg-gray-700 border rounded-md text-white resize-none focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div>
        <label className="block mb-1 font-medium">Keywords:</label>
        <input
          type="text"
          name="keywords"
          value={seoData.keywords}
          onChange={handleInputChange}
          className="w-full px-3 py-2 bg-gray-700 border rounded-md text-white focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default SEOSettings;
