import React from 'react';
import Header from '@/app/components/Header/Header';
import { ChildrenProp } from '@/app/types/ChildrenProp';
import HeaderItem from '@/app/components/Header/HeaderItem';
import Sidebar from '@/app/components/Sidebar/Sidebar';

export default function CustomerLayout({ children }: ChildrenProp) {
  return (
    <>
      <Header>
        <HeaderItem href='/login'>로그아웃</HeaderItem>
      </Header>

      <div className='flex h-full'>
        <Sidebar></Sidebar>
        {children}
      </div>
    </>
  );
}
