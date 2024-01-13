import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ChildrenProps from '@/interfaces/ChildrenProps';
import HeaderItem from '@/components/Header/HeaderItem';

export default function CustomerLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      {children}
      <Footer></Footer>
    </>
  );
}
