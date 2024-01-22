import React from 'react';
import { ChildrenProp } from '@/types/ChildrenProp';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function CustomerLayout({ children }: ChildrenProp) {
  return (
    <div className='flex h-full'>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}
