import React from 'react';
import './styles.css'

const GridComponent = ({ items }) => (
  <div className="grid-component" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
    {items.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
  </div>
);

export default GridComponent;
