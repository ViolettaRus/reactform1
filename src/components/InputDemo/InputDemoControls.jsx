import React from 'react';
import TextControl from './TextControl';
import SelectControl from './SelectControl';
import SliderControl from './SliderControl';
import ToggleControl from './ToggleControl';
import './InputDemoControls.css';

const InputDemoControls = ({ settings, onSettingChange, getRadiusValue, getSizeValue, handleRadiusChange, handleSizeChange }) => {
  const variantOptions = [
    { value: 'default', label: 'Default' },
    { value: 'filled', label: 'Filled' },
    { value: 'unstyled', label: 'Unstyled' },
  ];

  return (
    <div className="input-demo-controls">
      <TextControl
        label="Placeholder"
        value={settings.placeholder}
        onChange={(e) => onSettingChange('placeholder', e.target.value)}
      />

      <TextControl
        label="Label"
        value={settings.label}
        onChange={(e) => onSettingChange('label', e.target.value)}
      />

      <TextControl
        label="Description"
        value={settings.description}
        onChange={(e) => onSettingChange('description', e.target.value)}
        placeholder="Description"
      />

      <TextControl
        label="Error"
        value={settings.error}
        onChange={(e) => onSettingChange('error', e.target.value)}
        placeholder="Error"
      />

      <SelectControl
        label="Variant"
        value={settings.variant}
        onChange={(e) => onSettingChange('variant', e.target.value)}
        options={variantOptions}
      />

      <SliderControl
        label="Radius"
        value={getRadiusValue()}
        onChange={(e) => handleRadiusChange(parseInt(e.target.value))}
        displayValue={settings.radius}
      />

      <SliderControl
        label="Size"
        value={getSizeValue()}
        onChange={(e) => handleSizeChange(parseInt(e.target.value))}
        displayValue={settings.size}
      />

      <ToggleControl
        label="Disabled"
        checked={settings.disabled}
        onChange={(e) => onSettingChange('disabled', e.target.checked)}
      />

      <ToggleControl
        label="With asterisk"
        checked={settings.withAsterisk}
        onChange={(e) => onSettingChange('withAsterisk', e.target.checked)}
      />
    </div>
  );
};

export default InputDemoControls;

