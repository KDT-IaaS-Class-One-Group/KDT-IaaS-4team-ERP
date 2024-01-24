'use client';

import React from 'react';
import { ChildrenProp } from '@/app/types/ChildrenProp';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminLayout({ children }: ChildrenProp) {
  return (
    <div className='flex h-full'>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}
