import type { Metadata } from 'next';
import '@/styles/globals.css';
import React from 'react';

import { ChildrenProps } from '@/interfaces/ChildrenProps';

export const metadata: Metadata = {
  title: 'form 미쳤다',
  description: 'shopping',
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='ko'>
      <body className='flex flex-col justify-between h-screen'>{children}</body>
    </html>
  );
}
