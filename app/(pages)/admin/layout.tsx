import React from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import ChildrenProps from '@interfaces/interfaces';
import HeaderItem from '@components/Header/HeaderItem';
import Sidebar from '@components/Sidebar/Sidebar';

export default function CustomerLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header>
        <HeaderItem href='/login'>로그인/로그아웃</HeaderItem>
      </Header>

      <div className='flex h-full'>
        <Sidebar></Sidebar>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
