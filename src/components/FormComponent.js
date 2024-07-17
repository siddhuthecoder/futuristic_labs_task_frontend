import React from 'react';
import './styles.css'

const FormComponent = () => (
  <form className="form-component">
    <input type="text" placeholder="Input field" />
    <textarea placeholder="Textarea field"></textarea>
    <label>
      <input type="checkbox" /> Checkbox
    </label>
    <button type="submit">Submit</button>
  </form>
);

export default FormComponent;
