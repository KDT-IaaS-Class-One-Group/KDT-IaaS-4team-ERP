import React from 'react';
import Sidebar from '../../components/admin/Sidebar/Sidebar';

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
