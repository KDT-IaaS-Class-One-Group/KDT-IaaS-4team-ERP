'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function AdminLoginPage() {
  const [adminId, setAdminId] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3560/api/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminId, adminPassword }),
      });
      const data = await response.json();
      if (data.success) {
        // JWT 저장
        localStorage.setItem('token', data.token);

        alert(`${data.adminName}님 반갑습니다.`);
        router.push('/admin');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen '>
      <div className='w-full max-w-xs border-2 border-wine'>
        <form
          onSubmit={handleLogin}
          className='shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <h1 className='text-lg font-bold mb-5 text-center'>관리자 로그인</h1>
          <div className='mb-4'>
            <input
              type='text'
              placeholder='아이디'
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-text'
            />
          </div>
          <div className='mb-6'>
            <input
              type='password'
              placeholder='비밀번호'
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline cursor-text'
            />
          </div>
          <div className='flex'>
            <button
              type='submit'
              className='w-full border-2 border-wine text-yellow-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
