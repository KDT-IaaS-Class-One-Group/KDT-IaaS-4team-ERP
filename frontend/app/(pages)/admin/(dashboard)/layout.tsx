import React from 'react';
import Header from '@/components/Header/Header';
import { ChildrenProp } from '@/interfaces/ChildrenProp';
import HeaderItem from '@/components/Header/HeaderItem';
import Sidebar from '@/components/Sidebar/Sidebar';

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
