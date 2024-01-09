'use client';

import React, { useState } from 'react';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다.');
      }

      const data = await response.json();
      // 로그인 성공 후 처리
    } catch (error) {
      console.error('로그인 요청 중 에러가 발생했습니다:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>로그인</button>
    </form>
  );
};

export default LoginPage;
