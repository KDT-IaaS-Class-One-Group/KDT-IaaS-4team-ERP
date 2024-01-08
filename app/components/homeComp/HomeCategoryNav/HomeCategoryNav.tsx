// custom home 페이지의 카테고리 네비게이션 바입니다.
// 버튼이 눌렀을 때 카테고리 별 컴포넌트가 수정됩니다.

import React from 'react';

export default function HomeCategoryNav() {
  return (
    // 임시 스타일링 : 호버시 밑줄
    <nav className='w-screen h-1/6'>
      <ul className='flex-center gap-6'>
        <li>
          <a href='/' className='transition-all hover:underline'>카테고리1</a>
        </li>
        <li>
          <a href='/a' className='transition-all hover:underline '>카테고리2</a>
        </li>
        <li>
          <a href='/b' className='transition-all hover:underline '>카테고리3</a>
        </li>
        <li>
          <a href='/c' className='transition-all hover:underline '>카테고리4</a>
        </li>
      </ul>
    </nav>
  );
}
