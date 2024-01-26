// custom home 페이지의 카테고리 네비게이션 바입니다.
// 버튼이 눌렀을 때 카테고리 별 컴포넌트가 수정됩니다.

interface HomeCategoryNavProps {
  categories: string[];
}

// HomeCategoryNav 컴포넌트
import React from "react";

interface HomeCategoryNavProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const HomeCategoryNav: React.FC<HomeCategoryNavProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <nav className="w-screen h-20">
      <ul className="flex justify-center items-center gap-6 h-32 font-serif font-bold text-5xl">
        <li className="cursor-pointer" onClick={() => onSelectCategory("")}>
          All
        </li>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            <div className="transition-all cursor-pointer">{category}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeCategoryNav;
