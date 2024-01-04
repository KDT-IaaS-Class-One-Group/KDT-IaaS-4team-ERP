import type { Metadata } from 'next';
import '@';

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
      <body className='flex flex-col justify-between h-screen'>{children}</body>
    </html>
  );
}
