'use client';

import React, { useState } from 'react';

export default function RevenueView() {
  // 날짜 상태
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [revenue, setRevenue] = useState<number | null>(null);

  // 날짜 변경 핸들러
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else if (name === 'endDate') {
      setEndDate(value);
    }
  };

  // 수익 계산 함수
  const calculateRevenue = () => {
    // 예시로 고정된 수익을 반환합니다. 실제로는 서버에서 데이터를 가져와야 합니다.
    const exampleRevenue = 100000; // 임시로 설정된 수익 값
    setRevenue(exampleRevenue);
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-xl font-semibold mb-6'>매출 조회</h1>
        <div className='mb-4'>
          <label
            htmlFor='startDate'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            시작 날짜:
          </label>
          <input
            type='date'
            id='startDate'
            name='startDate'
            value={startDate}
            onChange={handleDateChange}
            className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='endDate'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            끝 날짜:
          </label>
          <input
            type='date'
            id='endDate'
            name='endDate'
            value={endDate}
            onChange={handleDateChange}
            className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <button
            onClick={calculateRevenue}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            수익 계산
          </button>
        </div>
        {revenue !== null && (
          <p className='text-green-500'>
            선택한 기간 동안의 수익: {revenue.toLocaleString()}원
          </p>
        )}
      </div>
    </div>
  );
}
