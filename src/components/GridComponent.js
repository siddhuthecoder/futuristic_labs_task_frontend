import React from 'react';

const GridComponent = ({ items }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {items.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default GridComponent;
