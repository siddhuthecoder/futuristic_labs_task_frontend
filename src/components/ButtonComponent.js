import React from 'react';
import './styles.css'
const ButtonComponent = ({ text, link }) => (
  <a href={link} className="button-component">
    {text}
  </a>
);

export default ButtonComponent;
