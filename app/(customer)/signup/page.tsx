'use client'

import React, { useState, ChangeEvent } from 'react';

interface FormData {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

const SignUpComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (): Promise<void> => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <label>아이디:</label>
      <input type="text" name="username" onChange={handleInputChange} /><br />
      <label>비밀번호:</label>
      <input type="password" name="password" onChange={handleInputChange} /><br />
      <label>이메일:</label>
      <input type="email" name="email" onChange={handleInputChange} /><br />
      <label>전화번호:</label>
      <input type="tel" name="phoneNumber" onChange={handleInputChange} /><br />
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default SignUpComponent;