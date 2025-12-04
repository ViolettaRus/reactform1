import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import InputDemo from './components/InputDemo/InputDemo';
import './App.css';

function App() {
  const handleSigninSubmit = (data) => {
    console.log('Signin data:', data);
    alert(`Вход выполнен!\nEmail: ${data.email}`);
  };

  const handleSignupSubmit = (data) => {
    console.log('Signup data:', data);
    alert(`Регистрация выполнена!\nИмя: ${data.name}\nНик: @${data.nickname}\nEmail: ${data.email}\nПол: ${data.gender === 'male' ? 'Мужской' : 'Женский'}`);
  };

  return (
    <div className="app">
      <div className="app-section">
        <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', fontWeight: '600' }}>
          Демонстрация компонента Input
        </h1>
        <InputDemo />
      </div>
      <div className="app-container">
        <div className="form-section">
          <h2>Вход</h2>
          <Signin onSubmit={handleSigninSubmit} />
        </div>
        <div className="form-section">
          <h2>Регистрация</h2>
          <Signup onSubmit={handleSignupSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;

