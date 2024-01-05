import React from 'react';
import HeaderMenu from './HeaderMenu';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex bg-blue-500 text-white p-4 justify-between'>
      <Link href='/'>
        <h1 className='text-xl'>form 미쳤다.</h1>
      </Link>
      <ul className='flex ml-auto'>
        <Link href='/login'>
          <HeaderMenu>로그인</HeaderMenu>
        </Link>
        <Link href='/orderlist'>
          <HeaderMenu>주문조회</HeaderMenu>
        </Link>
        <Link href='/cart'>
          <HeaderMenu>장바구니</HeaderMenu>
        </Link>
        <Link href='/cs'>
          <HeaderMenu>고객센터</HeaderMenu>
        </Link>
      </ul>
    </header>
  );
}
