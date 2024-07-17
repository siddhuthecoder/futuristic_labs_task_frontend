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
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <input
        type="text"
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        placeholder="Card Title"
      />
      <textarea
        value={cardContent}
        onChange={(e) => setCardContent(e.target.value)}
        placeholder="Card Content"
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {cardImage && <img src={cardImage} alt="Card" style={{ maxWidth: '100%' ,height:"300px"}} />}
      <div>
        <h3>{cardTitle}</h3>
        <p>{cardContent}</p>
      </div>
    </div>
  );
};

export default CardComponent;
