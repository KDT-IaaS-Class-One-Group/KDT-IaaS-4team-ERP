import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import '../../app/globals.css'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <div className='flex h-full'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}