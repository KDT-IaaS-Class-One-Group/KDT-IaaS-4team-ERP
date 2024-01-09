'use client';
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ChildrenProps } from '@/interfaces/ChildrenProps';
import HeaderItem from '@/components/Header/HeaderItem';
import { useState, useEffect } from 'react';

export default function CustomerLayout({ children }: ChildrenProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn)

  useEffect(() => {
    const storedToken = sessionStorage.getItem('jwt_token');
    setIsLoggedIn(!!storedToken);
  }, [isLoggedIn]);


  return (
    <>
      <Header>
        {isLoggedIn ? (
          <>
            <HeaderItem href='/orderlist'>주문조회</HeaderItem>
            <HeaderItem href='/cart'>장바구니</HeaderItem>
            <HeaderItem href='/logout'>로그아웃</HeaderItem>
          </>
        ) : (
          <HeaderItem href='/login' >로그인</HeaderItem>
        )}
      </Header>
      {children}
      <Footer />
    </>
  );
}