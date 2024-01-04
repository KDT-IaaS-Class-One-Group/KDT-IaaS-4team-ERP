import type { Metadata } from 'next';
import './globals.css';
import Header from './customComp/layoutComp/Header';
import Footer from './customComp/layoutComp/Footer';
import React from 'react';

export const metadata: Metadata = {
  title: 'form 미쳤다',
  description: 'shopping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='flex flex-col justify-between h-screen '>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
