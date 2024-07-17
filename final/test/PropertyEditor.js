import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';

const PropertyEditor = () => {
  const { selectedComponent, updateComponent } = useContext(AppContext);
  const [properties, setProperties] = useState({});

  useEffect(() => {
    if (selectedComponent) {
      setProperties(selectedComponent);
    }
  }, [selectedComponent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperties({ ...properties, [name]: value });
  };

  const handleSave = () => {
    updateComponent(properties);
  };

  if (!selectedComponent) {
    return <div className="property-editor">Select a component to edit</div>;
  }

  return (
    <div className="property-editor">
      <h3>Edit Properties</h3>
      <div>
        <label>Text</label>
        <input
          type="text"
          name="text"
          value={properties.text || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Style</label>
        <input
          type="text"
          name="style"
          value={properties.style || ''}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PropertyEditor;
