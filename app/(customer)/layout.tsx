import type { Metadata } from 'next';
import Header from '../customComp/layoutComp/Header';
import Footer from '../customComp/layoutComp/Footer';
import React from 'react';
import '../../app/globals.css'

export const metadata: Metadata = {
  title: 'form 미쳤다',
  description: 'shopping',
};

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <div className='flex flex-col justify-between h-screen '>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}