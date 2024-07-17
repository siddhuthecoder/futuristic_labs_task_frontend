import React from 'react';
import './styles.css'

const CardComponent = ({ title, content, image }) => (
  <div className="card-component">
    <img src={image} alt="Card" />
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default CardComponent;
