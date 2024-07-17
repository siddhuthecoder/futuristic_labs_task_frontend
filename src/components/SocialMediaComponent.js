import React, { useState } from 'react';

const SocialMediaComponent = () => {
  const [links, setLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <h3>Social Media Links</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Facebook:
          <input
            type="text"
            name="facebook"
            value={links.facebook}
            onChange={handleChange}
            placeholder="Enter Facebook URL"
          />
        </label>
        <label>
          Twitter:
          <input
            type="text"
            name="twitter"
            value={links.twitter}
            onChange={handleChange}
            placeholder="Enter Twitter URL"
          />
        </label>
        <label>
          Instagram:
          <input
            type="text"
            name="instagram"
            value={links.instagram}
            onChange={handleChange}
            placeholder="Enter Instagram URL"
          />
        </label>
        <label>
          LinkedIn:
          <input
            type="text"
            name="linkedin"
            value={links.linkedin}
            onChange={handleChange}
            placeholder="Enter LinkedIn URL"
          />
        </label>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        {links.facebook && (
          <a href={links.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        )}
        {links.twitter && (
          <a href={links.twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        )}
        {links.instagram && (
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialMediaComponent;
