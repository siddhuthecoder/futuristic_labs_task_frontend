import React from 'react';

const FormComponent = ({ component }) => {
  return (
    <form style={{ ...component.style }}>
      <input type="text" placeholder="Input" />
      <textarea placeholder="Textarea"></textarea>
      <input type="checkbox" /> Checkbox
    </form>
  );
};

export default FormComponent;
