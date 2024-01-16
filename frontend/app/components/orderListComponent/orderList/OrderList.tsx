// 현재 폴더 : components/cartComponents/productList
// OrderList.tsx는 주문 목록 컴포넌트입니다.

import React from 'react';
import Image from 'next/image';

interface OrderListProps {
  data: {
    prodImgUrl: string; // products 테이블의 prodImgUrl 필드와 관련된 데이터 타입
    prodDescription: string; // products 테이블의 prodDescription 필드와 관련된 데이터 타입
    prodPrice: number; // products 테이블의 prodPrice 필드와 관련된 데이터 타입
    orderPaymentDatetime: string; // order 테이블의 orderPaymentDatetime 필드와 관련된 데이터 타입
    orderIndex: number; // order 테이블의 orderIndex 필드와 관련된 데이터 타입
    orderPaymentCount: number; // order 테이블의 orderPaymentCount 필드와 관련된 데이터 타입
    orderDeliveryDone: number;
    // orderState: boolean; // 만약 orderState를 사용한다면 해당 필드와 관련된 데이터 타입 추가
  };
}

const OrderList: React.FC<OrderListProps> = ({ data }) => {

  return (
    <li className='w-full flex justify-between items-center border-2 border-slate-800 p-4'>
      <div className='flex w-1/3 gap-6'>
        <div className='image-area'>
          <Image src={data.prodImgUrl} alt="이미지가 들어갈 자리입니다." width="65" height = "65"/>
          {/* products테이블에서 prodImgUrl을 가져와야함 */}
        </div>
        <p className='text-xs flex-center'>{data.prodDescription}</p>
        {/* *products테이블에서 prodDescription을 가져와야함 */}
      </div>
      <div className='flex gap-6 w-2/3 '>
        <div className='w-1/6 flex-center text-xs'>{data.orderPaymentDatetime}</div>
        {/* order테이블에 있는 orderPaymentDatetime */}
        <div className='w-1/6 flex-center text-xs'>{data.orderIndex}</div>
        {/* orderIndex */}
        <div className='w-1/2 flex-center'>{`${data.prodPrice}원 (${data.orderPaymentCount}개)`}</div>
        {/*  */}
        <div className='w-1/2 flex-center'>{data.orderDeliveryDone ? '배송 중' : '배송 전'}</div>
        {/* 배송중, 배송전 orderDeliveryDone 0,1로 구분? 일단 보류 */}
      </div>
    </li>
  );
}

export default OrderList;