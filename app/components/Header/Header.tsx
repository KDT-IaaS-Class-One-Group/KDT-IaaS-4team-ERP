import React from 'react';
import HeaderItem from './HeaderItem';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex bg-blue-500 text-white p-4 justify-between'>
      <Link href='/'>
        <h1 className='text-xl'>form 미쳤다.</h1>
      </Link>
      <ul className='flex ml-auto'>
        <Link href='/login'>
          <HeaderItem>로그인</HeaderItem>
        </Link>
        <Link href='/login'>
          <HeaderItem>주문조회</HeaderItem>
        </Link>
        <Link href='/login'>
          <HeaderItem>장바구니</HeaderItem>
        </Link>
        <Link href='/login'>
          <HeaderItem>고객센터</HeaderItem>
        </Link>
      </ul>
    </header>
  );
}
