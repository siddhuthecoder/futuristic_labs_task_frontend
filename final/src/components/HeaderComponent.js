import React from 'react';
import './styles.css'

const HeaderComponent = ({ text, link }) => (
  <div className="header-component">
    <a href={link}>{text}</a>
  </div>
);

const FooterComponent = ({ text, link }) => (
  <div className="footer-component">
    <a href={link}>{text}</a>
  </div>
);

export { HeaderComponent, FooterComponent };
