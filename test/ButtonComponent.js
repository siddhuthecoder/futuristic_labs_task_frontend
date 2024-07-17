import React from 'react';

const ButtonComponent = ({ component }) => {
  return <button style={{ ...component.style }}>{component.text || 'Button'}</button>;
};

export default ButtonComponent;
