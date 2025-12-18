import React from 'react';
import ControlGroup from './ControlGroup';
import './SelectControl.css';

const SelectControl = ({ label, value, onChange, options }) => {
  return (
    <ControlGroup label={label}>
      <select
        className="control-select"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </ControlGroup>
  );
};

export default SelectControl;


