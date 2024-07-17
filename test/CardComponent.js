import React from 'react';

const CardComponent = ({ component }) => {
  return (
    <div style={{ ...component.style }}>
      <h2>{component.title || 'Card Title'}</h2>
      <p>{component.text || 'Card Content'}</p>
    </div>
  );
};

export default CardComponent;
