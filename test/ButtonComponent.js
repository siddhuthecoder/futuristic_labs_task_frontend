import React from 'react';

const ButtonComponent = ({ component }) => {
  return <button style={{ ...component.style }}>{component.text || 'Buttoon'}</button>;
};

export default ButtonComponent;
