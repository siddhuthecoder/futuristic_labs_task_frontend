import React from 'react';

const ImageComponent = ({ component }) => {
  return <img src={component.src || 'https://via.placeholder.com/150'} alt="Image Holder" style={{ ...component.style }} />;
};

export default ImageComponent;
