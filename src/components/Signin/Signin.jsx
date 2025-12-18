import React, { useState } from 'react';
import Input from '../common/Input/Input';
import FormButton from '../common/FormButton';
import './Signin.css';

const Signin = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
        withAsterisk
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
      <FormButton>Войти</FormButton>
    </form>
  );
};

export default Signin;

