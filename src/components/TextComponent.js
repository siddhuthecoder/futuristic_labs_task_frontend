import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.css'

const TextComponent = () => {
  const [text, setText] = useState('');

  return (
    <div className="text-component">
      <ReactQuill value={text} onChange={setText} />
    </div>
  );
};

export default TextComponent;
