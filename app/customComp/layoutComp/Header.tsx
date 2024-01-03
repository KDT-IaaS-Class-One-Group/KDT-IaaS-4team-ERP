import React, { ReactNode } from 'react';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  return (
    <header className='flex bg-blue-500 text-white p-4 justify-between'>
      <h1 className='text-xl'>form 미쳤다.</h1>
      <ul className='flex ml-auto'>
        <HeaderMenu>로그인</HeaderMenu>
        <HeaderMenu>주문조회</HeaderMenu>
        <HeaderMenu>장바구니</HeaderMenu>
        <HeaderMenu>고객센터</HeaderMenu>
      </ul>
    </header>
  );
}
