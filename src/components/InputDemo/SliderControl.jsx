import React from 'react';
import ControlGroup from './ControlGroup';
import './SliderControl.css';

const SliderControl = ({ label, value, onChange, displayValue }) => {
  const percentage = (value / 4) * 100;

  return (
    <ControlGroup label={label}>
      <div className="slider-container">
        <input
          type="range"
          className="control-slider"
          min="0"
          max="4"
          step="1"
          value={value}
          onChange={onChange}
          style={{
            background: `linear-gradient(to right, #228be6 0%, #228be6 ${percentage}%, #e9ecef ${percentage}%, #e9ecef 100%)`
          }}
        />
        <span className="slider-value">{displayValue}</span>
      </div>
    </ControlGroup>
  );
};

export default SliderControl;


