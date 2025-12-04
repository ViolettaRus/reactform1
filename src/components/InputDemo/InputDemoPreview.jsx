import React from 'react';
import Input from '../Input/Input';

const InputDemoPreview = ({ settings }) => {
  return (
    <div className="input-demo-preview">
      <Input
        placeholder={settings.placeholder}
        label={settings.label}
        description={settings.description || undefined}
        error={settings.error || undefined}
        variant={settings.variant}
        radius={settings.radius}
        size={settings.size}
        disabled={settings.disabled}
        withAsterisk={settings.withAsterisk}
        name="demo-input"
      />
    </div>
  );
};

export default InputDemoPreview;

