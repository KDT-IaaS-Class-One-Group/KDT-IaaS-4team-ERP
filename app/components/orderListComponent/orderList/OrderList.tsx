// 현재 폴더 : components/cartComponents/productList
// OrderList.tsx는 주문 목록 컴포넌트입니다.

import React from 'react';
import Image from 'next/image';
import { OrderListProps } from '@/JH-interfaces/interfaces';

/**
 * 주문 목록 컴포넌트입니다.
 * 
 * @param pUrl - 상품 이미지 URL
 * @param pSub - 상품 제목
 * @param orderDate - 주문 일자
 * @param orderId - 주문 ID
 * @param pPrice - 상품 가격
 * @param pCount - 상품 수량
 * @param orderState - 주문 상태 (true: 배송 중, false: 배송 전)
 * @param className - 추가적인 CSS 클래스 이름
 */
const OrderList: React.FC<OrderListProps> = ({ pUrl, pSub, orderDate, orderId, pPrice, pCount, orderState, className }) => {
  const combinedClassName = `w-full flex justify-between items-center border-2 border-slate-800 p-4 ${className}`;

  return (
    <li className={combinedClassName}>
      <div className='flex w-1/3 gap-6'>
        <div className='image-area'>
          <Image src={pUrl} alt="이미지가 들어갈 자리입니다." width="65" height = "65"/>
        </div>
        <p className='text-xs flex-center'>{pSub}</p>
      </div>
      <div className='flex gap-6 w-2/3 '>
        <div className='w-1/6 flex-center text-xs'>{orderDate}</div>
        <div className='w-1/6 flex-center text-xs'>{orderId}</div>
        <div className='w-1/2 flex-center'>{`${pPrice}원 (${pCount}개)`}</div>
        <div className='w-1/2 flex-center'>{orderState ? '배송 중' : '배송 전'}</div>
      </div>
    </li>
  );
}

export default OrderList;