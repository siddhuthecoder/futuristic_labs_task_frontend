import React from 'react';

const TextBlockComponent = ({ component }) => {
  return <div style={{ ...component.style }}>{component.text || 'Text Block'}</div>;
};

export default TextBlockComponent;
