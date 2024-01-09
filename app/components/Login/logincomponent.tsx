'use client';
import Link from 'next/link';
import LoginButton from './LoginButton';
import LoginText from './LoginText';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthContext';

const LoginHome = () => {
  const router = useRouter();
  const {login} = useAuth();
  // const { isLoggedIn } = useAuth();
  
  const [loginUser, setLoginUser] = useState({
    user_id: '',
    password: '',
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
      const response = await fetch(`http://192.168.100.76:3580/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: loginUser.user_id,
          password: loginUser.password,
        }),
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      const { success, message, token, user_id } = data;
      console.log(success, message, token, user_id)
      console.log(data);
      if (data.success) {
        sessionStorage.setItem('jwt_token', token);
        sessionStorage.setItem('user_id', user_id);
        login();
        router.push('/')
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
          inputchange={(value: string) => handleInputChange('user_id', value)}
        />
        <LoginText
          title='PASSWORD'
          inputchange={(value: string) => handleInputChange('password', value)}
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
// 레이아웃 컴포넌트 감지를 못한다.
// 다시 리렌더를 찾아보는 것 ISR