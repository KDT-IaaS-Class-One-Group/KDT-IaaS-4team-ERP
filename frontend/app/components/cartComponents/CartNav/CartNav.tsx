// CartNav.tsx 는 장바구니 페이지의 네비게이션 바 입니다.
// 카트 리스트들의 정보를 보여주는 역할을 합니다.

import React from "react";

const CartNav: React.FC = () => {
  return (
    <ul className="flex justify-between items-center w-full h-24 border border-black p-4 gap-6">
      <li className="w-3/6 h-full border border-black text-sm flex justify-center items-center ">
        상품 정보
      </li>
      <li className="w-1/6 flex justify-center items-center text-sm border border-black h-full">
        금액
      </li>
      <li className="w-1/6 flex justify-center items-center text-sm border border-black h-full">
        단가/수량설정
      </li>
      <li className="w-1/6 flex justify-center items-center text-sm border border-black h-full">
        주문 관리
      </li>
    </ul>
  );
};

export default CartNav;
