import React from 'react';
import './ControlGroup.css';

const ControlGroup = ({ label, children }) => {
  return (
    <div className="control-group">
      <label className="control-label">{label}</label>
      {children}
    </div>
  );
};

export default ControlGroup;


