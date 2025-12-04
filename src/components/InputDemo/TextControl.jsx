import React from 'react';
import ControlGroup from './ControlGroup';
import './TextControl.css';

const TextControl = ({ label, value, onChange, placeholder }) => {
  return (
    <ControlGroup label={label}>
      <input
        type="text"
        className="control-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </ControlGroup>
  );
};

export default TextControl;

