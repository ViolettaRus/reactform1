import React, { useState } from 'react';
import InputDemoPreview from './InputDemoPreview';
import InputDemoControls from './InputDemoControls';
import './InputDemo.css';

const InputDemo = () => {
  const [settings, setSettings] = useState({
    placeholder: 'Your name',
    label: 'Full name',
    description: '',
    error: '',
    variant: 'default',
    radius: 'sm',
    size: 'md',
    disabled: false,
    withAsterisk: true,
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getRadiusValue = () => {
    if (typeof settings.radius === 'string') {
      const map = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4 };
      return map[settings.radius] || 2;
    }
    if (settings.radius <= 2) return 0;
    if (settings.radius <= 4) return 1;
    if (settings.radius <= 8) return 2;
    if (settings.radius <= 16) return 3;
    return 4;
  };

  const getSizeValue = () => {
    const map = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4 };
    return map[settings.size] || 2;
  };

  const handleRadiusChange = (value) => {
    const radiusMap = { 0: 'xs', 1: 'sm', 2: 'md', 3: 'lg', 4: 'xl' };
    handleSettingChange('radius', radiusMap[value]);
  };

  const handleSizeChange = (value) => {
    const sizeMap = { 0: 'xs', 1: 'sm', 2: 'md', 3: 'lg', 4: 'xl' };
    handleSettingChange('size', sizeMap[value]);
  };

  return (
    <div className="input-demo-container">
      <InputDemoPreview settings={settings} />
      <InputDemoControls
        settings={settings}
        onSettingChange={handleSettingChange}
        getRadiusValue={getRadiusValue}
        getSizeValue={getSizeValue}
        handleRadiusChange={handleRadiusChange}
        handleSizeChange={handleSizeChange}
      />
    </div>
  );
};

export default InputDemo;


