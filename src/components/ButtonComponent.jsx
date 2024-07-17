import React, { useState } from 'react';

const ButtonComponent = ({ text, link }) => {
  const [buttonText, setButtonText] = useState(text);
  const [buttonLink, setButtonLink] = useState(link);

  return (
    <div className="border border-gray-700 bg-gray-900 rounded-lg p-6">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          placeholder="Button Text"
          className="block w-full mt-1 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
        />
        <input
          type="text"
          value={buttonLink}
          onChange={(e) => setButtonLink(e.target.value)}
          placeholder="Button Link"
          className="block w-full mt-1 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
        />
      </div>
      <div className="mt-6 flex justify-center">
        <a href={buttonLink} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ButtonComponent;
