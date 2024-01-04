import React from 'react';
import Sidebar from '@components/Sidebar/Sidebar';

export default function Layout({
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
