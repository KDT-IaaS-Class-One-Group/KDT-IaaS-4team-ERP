'use client'

import React, { useState, ChangeEvent } from 'react';

interface FormData {
  username: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (): Promise<void> => {
    try {
      console.log('Sending data to the server:', formData);
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {username: formData.username,
          password: formData.password}),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <label>아이디:</label>
      <input type="text" name="username" onChange={handleInputChange} /><br />
      <label>비밀번호:</label>
      <input type="password" name="password" onChange={handleInputChange} /><br />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginComponent;