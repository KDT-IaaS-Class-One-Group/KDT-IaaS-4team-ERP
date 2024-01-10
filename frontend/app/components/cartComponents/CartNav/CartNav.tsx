// CartNav.tsx 는 장바구니 페이지의 네비게이션 바 입니다.
// 카트 리스트들의 정보를 보여주는 역할을 합니다.

import React from 'react';

const CartNav: React.FC = () => {
  return (
    <ul className='flex justify-between items-center w-full h-24 border border-black p-4 gap-6'>
      <li className='w-2/6 h-full border border-black  flex justify-center items-center '>상품 정보</li>
      <ul className='flex justify-end items-center h-full w-2/3 gap-6'>
        <li className='w-1/6 flex justify-center items-center border border-black h-full'>금액</li>
        <li className='w-1/6 flex justify-center items-center border border-black h-full'>수량</li>
        <li className='w-1/2 flex justify-center items-center border border-black h-full'>주문 관리</li>
      </ul>
    </ul>
  );
}

export default CartNav;