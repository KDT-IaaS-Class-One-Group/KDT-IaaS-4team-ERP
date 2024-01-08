'use client'
import Link from 'next/link';
import LoginButton from '../Login/LoginButton';
import LoginText from '../Login/LoginText';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUpHome: React.FC = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    user_id: '',
    password: '',
    password1: '',
    email: '',
    phone: '', // phone을 문자열이 아니라 정수로 처리
  });

  const handleInputChange = (title: string, value: string) => {
    setSignupData((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value, // phoneNumber일 경우 문자열을 정수로 변환
    }));
  };

  const handleSubmitClick = async () => {
    try {
      const response = await fetch('http://192.168.100.76:3560/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        // 성공적으로 데이터를 저장한 경우
        alert('회원가입 성공')
        router.push('/login')

      } else {
        // API 서버에서 오류 응답을 받은 경우
        alert('회원가입 실패');
      }
    } catch (error) {
      // 네트워크 오류 등의 문제 발생
      console.error('오류 발생', error);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col w-2/6 h-2/5'>
      <div className='h-5/6 flex flex-col justify-between w-full'>
        <LoginText title='ID' inputchange={(value) => handleInputChange('ID', value)} />
        <LoginText title='Password' inputchange={(value) => handleInputChange('password', value)} />
        <LoginText title='Password1' inputchange={(value) => handleInputChange('password1', value)} />
        <LoginText title='email' inputchange={(value) => handleInputChange('email', value)} />
        <LoginText title='Phone Number' inputchange={(value) => handleInputChange('phone', value)} />
      </div>
      <div className='h-1/6 w-full flex justify-end'>
        <LoginButton value='Submit' onClick={handleSubmitClick} />
      </div>
    </div>
  );
};

export default SignUpHome;
