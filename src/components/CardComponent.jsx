import React, { useState } from 'react';

const CardComponent = ({ title, content, image }) => {
  const [cardTitle, setCardTitle] = useState(title);
  const [cardContent, setCardContent] = useState(content);
  const [cardImage, setCardImage] = useState(image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCardImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="border border-gray-700 bg-gray-900 rounded-lg p-4 shadow-lg">
      <input
        type="text"
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        placeholder="Card Title"
        className="bg-gray-800 text-white px-3 py-2 mb-3 rounded-md w-full focus:outline-none focus:bg-gray-700"
      />
      <textarea
        value={cardContent}
        onChange={(e) => setCardContent(e.target.value)}
        placeholder="Card Content"
        className="bg-gray-800 text-white px-3 py-2 mb-3 rounded-md w-full h-20 focus:outline-none focus:bg-gray-700"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-3 focus:outline-none"
      />
      <div className="w-[97%] bg-black max-w-[450px] mx-auto flex flex-col shadow">
      {cardImage && (
        <img src={cardImage} alt="Card" className="mb-3 rounded-lg shadow-md max-w-full h-64" />
      )}
      <div className=" ">
        <h3 className="text-4xl text-green-500 text-center  font-bold">{cardTitle}</h3>
        <p className="text-zinc-400 text-center">{cardContent}</p>
      </div>
      </div>
    </div>
  );
};

export default CardComponent;
