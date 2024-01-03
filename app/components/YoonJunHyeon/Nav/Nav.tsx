// Nav.tsx 는 네비게이션 바의 예시 컴포넌트 입니다.
// 원본과의 충돌을 위해 삭제하셔도 좋습니다.

import React from 'react';

export default function Nav() {
  return (
    // 임시 스타일링
    <nav className='w-screen h-1/6'>
      <ul className='flex-center gap-6'>
        <li>
          <a href='/'>홈</a>
        </li>
        <li>
          <a href='/a'>a</a>
        </li>
        <li>
          <a href='/b'>b</a>
        </li>
        <li>
          <a href='/c'>c</a>
        </li>
        <li>
          <a href='/cart'>장바구니</a>
        </li>
        <li>
          <a href='/orderList'>주문 조회</a>
        </li>
      </ul>
    </nav>
  );
}
