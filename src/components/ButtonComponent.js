import React, { useState } from 'react';

const ButtonComponent = ({ text, link }) => {
  const [buttonText, setButtonText] = useState(text);
  const [buttonLink, setButtonLink] = useState(link);

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <input
        type="text"
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
        placeholder="Button Text"
      />
      <input
        type="text"
        value={buttonLink}
        onChange={(e) => setButtonLink(e.target.value)}
        placeholder="Button Link"
      />
      <a href={buttonLink}>
        <button>{buttonText}</button>
      </a>
    </div>
  );
};

export default ButtonComponent;
