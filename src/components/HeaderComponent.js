import React, { useState } from 'react';

export const HeaderComponent = ({ text, link }) => {
  const [headerText, setHeaderText] = useState(text);
  const [headerLink, setHeaderLink] = useState(link);

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <input
        type="text"
        value={headerText}
        onChange={(e) => setHeaderText(e.target.value)}
        placeholder="Header Text"
      />
      <input
        type="text"
        value={headerLink}
        onChange={(e) => setHeaderLink(e.target.value)}
        placeholder="Header Link"
      />
      <a href={headerLink}>
        <h1>{headerText}</h1>
      </a>
    </div>
  );
};

export const FooterComponent = ({ text, link }) => {
  const [footerText, setFooterText] = useState(text);
  const [footerLink, setFooterLink] = useState(link);

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <input
        type="text"
        value={footerText}
        onChange={(e) => setFooterText(e.target.value)}
        placeholder="Footer Text"
      />
      <input
        type="text"
        value={footerLink}
        onChange={(e) => setFooterLink(e.target.value)}
        placeholder="Footer Link"
      />
      <a href={footerLink}>
        <footer>{footerText}</footer>
      </a>
    </div>
  );
};
