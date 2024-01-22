'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
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
        // 로그인 성공 처리
        alert(`${data.adminName}님 환영합니다.`);
        router.push('/admin');
      } else {
        // 로그인 실패 처리
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='w-full max-w-xs'>
        <form
          onSubmit={handleLogin}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <h1 className='text-lg font-bold mb-5 text-center'>관리자 로그인</h1>
          <div className='mb-4'>
            <input
              type='text'
              placeholder='아이디'
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-6'>
            <input
              type='password'
              placeholder='비밀번호'
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='flex'>
            <button
              type='submit'
              className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
