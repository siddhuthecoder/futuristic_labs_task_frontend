import React from 'react';

const HeaderComponent = ({ component }) => {
  return <h1 style={{ ...component.style }}>{component.text || 'Header'}</h1>;
};

export default HeaderComponent;
