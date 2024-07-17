import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from './context/AppContext';

const Sidebar = () => {
  const { addComponent } = useContext(AppContext);

  const components = [
    { type: 'text', name: 'Text Block' },
    { type: 'image', name: 'Image Holder' },
    { type: 'button', name: 'Button' },
    { type: 'header', name: 'Header' },
    { type: 'carousel', name: 'Carousel' },
    { type: 'card', name: 'Card' },
    { type: 'video', name: 'Video Embed' },
    { type: 'form', name: 'Form' },
    { type: 'grid', name: 'Grid Layout' },
    { type: 'socialMedia', name: 'Social Media Icons' }
  ];

  return (
    <div className="sidebar">
      <h3>Components</h3>
      {components.map((component) => (
        <div
          key={component.type}
          onClick={() => addComponent({ id: uuidv4(), ...component })}
          style={{ cursor: 'pointer', padding: '5px 0' }}
        >
          {component.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
