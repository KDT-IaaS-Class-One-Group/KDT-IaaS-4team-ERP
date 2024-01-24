'use client';

import React from 'react';
import { ChildrenProp } from '@/app/types/ChildrenProp';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { AuthProvider } from '@/app/contexts/AuthContext';

export default function CustomerLayout({ children }: ChildrenProp) {
  return (
    <AuthProvider>
      <div className='flex h-full'>
        <Sidebar></Sidebar>
        {children}
      </div>
    </AuthProvider>
  );
}
