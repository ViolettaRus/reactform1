import React from 'react';
import './RadioGroup.css';

const RadioGroup = ({ label, name, value, onChange, options, required = false }) => {
  return (
    <div className="radio-group-container">
      <label className="radio-group-label">
        {label}
        {required && <span style={{ color: '#fa5252', marginLeft: '2px' }}>*</span>}
      </label>
      <div className="radio-group-options">
        {options.map((option) => (
          <label key={option.value} className="radio-option-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              required={required}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;

