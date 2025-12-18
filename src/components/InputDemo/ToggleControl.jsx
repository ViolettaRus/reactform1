import React from 'react';
import ControlGroup from './ControlGroup';
import './ToggleControl.css';

const ToggleControl = ({ label, checked, onChange }) => {
  return (
    <ControlGroup label={label}>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className={`toggle-slider ${checked ? 'active' : ''}`}></span>
      </label>
    </ControlGroup>
  );
};

export default ToggleControl;


