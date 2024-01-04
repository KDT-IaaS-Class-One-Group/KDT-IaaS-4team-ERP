import type { Metadata } from 'next';

import React from 'react';

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
      <body className='flex flex-col justify-between h-screen'>{children}</body>
    </html>
  );
}
