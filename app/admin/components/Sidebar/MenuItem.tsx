// 메뉴 아이템 컴포넌트 분리 (대 분류)
import Link from 'next/link';
import React from 'react';

export function MenuItem({ title, children }) {
  return (
    <li className='mb-2'>
      <p className='text-2xl block p-2 font-bold'>{title}</p>
      <ul className='pl-4'>
        {children}
      </ul>
    </li>
  );
}
