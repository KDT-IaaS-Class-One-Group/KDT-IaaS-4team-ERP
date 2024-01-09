'use client';
import React, { useState } from 'react';

export default function AdminSignupPage() {
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, userid, password }),
      });

      const data = await response.json();
      if (data.success) {
        // 회원가입 성공 처리
        console.log('회원가입 성공:', data);
      } else {
        // 회원가입 실패 처리
        console.log('회원가입 실패:', data.message);
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
    }
  };

  return (
    <div>
      <h1>관리자 회원가입</h1>
      <form onSubmit={handleSignup}>
        <input
          type='text'
          placeholder='이름'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          placeholder='사용자 ID'
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <input
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>회원가입</button>
      </form>
    </div>
  );
}
