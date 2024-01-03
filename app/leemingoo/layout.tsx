// 관리자 페이지 레이아웃

import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-full'>
      <Sidebar />
      {children}
    </div>
  );
}
