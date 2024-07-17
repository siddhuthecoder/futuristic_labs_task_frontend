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
    <div>
      <h3>SEO Settings</h3>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={seoData.title} onChange={handleInputChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={seoData.description} onChange={handleInputChange}></textarea>
      </div>
      <div>
        <label>Keywords:</label>
        <input type="text" name="keywords" value={seoData.keywords} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default SEOSettings;
