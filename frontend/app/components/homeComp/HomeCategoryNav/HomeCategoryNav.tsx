// custom home 페이지의 카테고리 네비게이션 바입니다.
// 버튼이 눌렀을 때 카테고리 별 컴포넌트가 수정됩니다.

import Link from 'next/link';
import React from 'react';

interface HomeCategoryNavProps {
  categories: string[];
}

const HomeCategoryNav: React.FC<HomeCategoryNavProps> = ({ categories }) => {

  const categoryList = categories || [];
  return (
    // 임시 스타일링: 호버시 밑줄
    <nav className='w-screen h-1/6'>
      <ul className='flex justify-center items-center gap-6 h-32 font-serif font-bold text-5xl'>
        {categoryList.map((category, index) => (
          <li key={index}>
              <div className='transition-all hover:underline'>
                {category}
              </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HomeCategoryNav;