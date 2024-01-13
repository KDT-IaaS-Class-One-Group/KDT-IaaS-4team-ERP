'use client';
import React, { ChangeEvent } from 'react';

import Link from 'next/link';
import LoginButton from './loginbutton';
import LoginText from './logintext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginHome = () => {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState({
    userId: '',
    userPassword: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginUser({
      ...loginUser,
      [field]: value,
    });
  };

  const handleSignup = () => {};

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:3560/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: loginUser.userId,
          userPassword: loginUser.userPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      console.log(data);
      if (data.success) {
        location.href='/'
        localStorage.setItem('token', data.token)
        alert('로그인 성공');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error(error);
      alert('로그인 실패');
    }
  };

  return (
    <div className='flex justify-center items-center flex-col h-2/6 w-2/6'>
      <div className='h-2/5 flex flex-col justify-around items-center w-full'>
        <LoginText
          title='ID'
          inputchange={(value: string) => handleInputChange('userId', value)}
        />
        <LoginText
          title='PASSWORD'
          inputchange={(value: string) => handleInputChange('userPassword', value)}
        />
      </div>
      <div className='h-1/5 flex items-center justify-end w-full'>
        <Link href='/signup'>
          <LoginButton value='sign up' onClick={handleSignup} />
        </Link>
        <LoginButton value='login' onClick={handleLogin} />
      </div>
    </div>
  );
};

export default LoginHome;
