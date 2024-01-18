// 현재 폴더 : components/cartComponents/productList
// OrderList.tsx는 주문 목록 컴포넌트입니다.

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface OrderListProps {
  data: {
    prodIndex: number; // products 테이블의 prodIndex 필드와 관련된 데이터 타입
    prodImgUrl: string; // products 테이블의 prodImgUrl 필드와 관련된 데이터 타입
    prodDescription: string; // products 테이블의 prodDescription 필드와 관련된 데이터 타입
    prodPrice: number; // products 테이블의 prodPrice 필드와 관련된 데이터 타입
    orderPaymentDatetime: string; // order 테이블의 orderPaymentDatetime 필드와 관련된 데이터 타입
    orderIndex: number; // order 테이블의 orderIndex 필드와 관련된 데이터 타입
    orderPaymentCount: number; // order 테이블의 orderPaymentCount 필드와 관련된 데이터 타입
    orderDeliveryDone: number; // order테이블의 배송전, 후를 구별하는 데이터 타입
  };
}

const OrderList: React.FC<OrderListProps> = ({ data }) => {
  const linkHref = `/product/${data.prodIndex}`;
  return (
    <li className="w-full flex justify-between items-center border-2 border-slate-800 p-4">
      <Link
        href={linkHref}
        className="flex w-1/3 gap-6 justify-center items-center"
      >
        <Image
          src={`/images${data.prodImgUrl}`}
          alt="이미지가 들어갈 자리입니다."
          width={70}
          height={70}
        />
        {/* products테이블에서 prodImgUrl을 가져와야함 */}
        <p className="text-xs">{data.prodDescription}</p>
        {/* *products테이블에서 prodDescription을 가져와야함 */}
      </Link>
      <div className="flex gap-6 w-2/3 ">
        <div className="w-1/6 flex justify-center items-center text-xs">
          {data.orderPaymentDatetime}
        </div>
        {/* order테이블에 있는 orderPaymentDatetime */}
        <div className="w-1/6 flex justify-center items-center text-xs">
          {data.orderIndex}
        </div>
        {/* orderIndex */}
        <div className="w-1/2 flex justify-center items-center">{`${data.prodPrice}원 (${data.orderPaymentCount}개)`}</div>
        {/*  */}
        <div className="w-1/2 flex justify-center items-center">
          {data.orderDeliveryDone ? "배송 중" : "배송 전"}
        </div>
        {/* todo : 배송중, 배송전 orderDeliveryDone 0,1로 구분?  */}
      </div>
    </li>
  );
};

export default OrderList;
