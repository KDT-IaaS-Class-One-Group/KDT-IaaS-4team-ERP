import React from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import ChildrenProps from '@interfaces/interfaces';
import HeaderItem from '@components/Header/HeaderItem';

export default function CustomerLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header>
        <HeaderItem href='/login'>로그인/로그아웃</HeaderItem>
        <HeaderItem href='/order'>주문조회</HeaderItem>
        <HeaderItem href='/cart'>장바구니</HeaderItem>
        <HeaderItem href='/customer-service'>고객센터</HeaderItem>
      </Header>
      {children}
      <Footer></Footer>
    </>
  );
}
