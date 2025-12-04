import React, { useState } from 'react';
import Input from './Input/Input';
import FormButton from './common/FormButton';
import RadioGroup from './common/RadioGroup';
import AtIcon from './common/AtIcon';
import './Signup.css';

const Signup = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    email: '',
    gender: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const genderOptions = [
    { value: 'male', label: 'Мужской' },
    { value: 'female', label: 'Женский' },
  ];

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        label="Имя"
        placeholder="Введите ваше имя"
        value={formData.name}
        onChange={handleChange}
        withAsterisk
        required
      />
      <Input
        type="text"
        name="nickname"
        label="Ник"
        placeholder="username"
        value={formData.nickname}
        onChange={handleChange}
        icon={<AtIcon />}
        withAsterisk
        required
      />
      <Input
        type="email"
        name="email"
        label="Почта"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
        withAsterisk
        required
      />
      <RadioGroup
        label="Пол"
        name="gender"
        value={formData.gender}
        onChange={handleRadioChange}
        options={genderOptions}
        required
      />
      <Input
        type="password"
        name="password"
        label="Пароль"
        placeholder="Введите пароль"
        value={formData.password}
        onChange={handleChange}
        withAsterisk
        required
      />
      <Input
        type="password"
        name="repeatPassword"
        label="Повторить пароль"
        placeholder="Повторите пароль"
        value={formData.repeatPassword}
        onChange={handleChange}
        withAsterisk
        required
      />
      <FormButton>Зарегистрироваться</FormButton>
    </form>
  );
};

export default Signup;

