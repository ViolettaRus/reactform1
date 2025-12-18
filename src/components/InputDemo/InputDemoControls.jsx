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
        onChange={(event) => onSettingChange('placeholder', event.target.value)}
      />

      <TextControl
        label="Label"
        value={settings.label}
        onChange={(event) => onSettingChange('label', event.target.value)}
      />

      <TextControl
        label="Description"
        value={settings.description}
        onChange={(event) => onSettingChange('description', event.target.value)}
        placeholder="Description"
      />

      <TextControl
        label="Error"
        value={settings.error}
        onChange={(event) => onSettingChange('error', event.target.value)}
        placeholder="Error"
      />

      <SelectControl
        label="Variant"
        value={settings.variant}
        onChange={(event) => onSettingChange('variant', event.target.value)}
        options={variantOptions}
      />

      <SliderControl
        label="Radius"
        value={getRadiusValue()}
        onChange={(event) => handleRadiusChange(parseInt(event.target.value))}
        displayValue={settings.radius}
      />

      <SliderControl
        label="Size"
        value={getSizeValue()}
        onChange={(event) => handleSizeChange(parseInt(event.target.value))}
        displayValue={settings.size}
      />

      <ToggleControl
        label="Disabled"
        checked={settings.disabled}
        onChange={(event) => onSettingChange('disabled', event.target.checked)}
      />

      <ToggleControl
        label="With asterisk"
        checked={settings.withAsterisk}
        onChange={(event) => onSettingChange('withAsterisk', event.target.checked)}
      />
    </div>
  );
};

export default InputDemoControls;


