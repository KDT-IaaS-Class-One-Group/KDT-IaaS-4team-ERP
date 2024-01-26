// 현재 폴더 : components/cartComponents/productList
// OrderList.tsx는 주문 목록 컴포넌트입니다.

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../../utils/formatDate";
import { OrderPageGetDataProps } from "@/app/interfaces/Order/OrderPageGetDataProps";

interface OrderListProps {
  data: OrderPageGetDataProps;
}
/**
 * 주문 목록을 표시하는 컴포넌트입니다.
 *
 * @param {Object} data - 주문 목록 컴포넌트에 전달되는 props입니다.
 * @param {string} data.prodIndex - 상품 인덱스입니다.
 * @param {string} data.prodImgUrl - 상품 이미지 URL입니다.
 * @param {string} data.prodDescription - 상품 설명입니다.
 * @param {string} data.orderPaymentDatetime - 주문 결제 일시입니다.
 * @param {string} data.orderIndex - 주문 인덱스입니다.
 * @param {number} data.prodPrice - 상품 가격입니다.
 * @param {number} data.orderPaymentCount - 주문 수량입니다.
 * @param {boolean} data.orderDeliveryDone - 배송 완료 여부입니다.
 * @returns {JSX.Element} - 주문 목록 컴포넌트의 JSX 요소입니다.
 */
const OrderList: React.FC<OrderListProps> = ({ data }) => {
  const formattedPaymentDatetime = formatDate(data.orderPaymentDatetime); // 날짜 포맷 적용

  const linkHref = `/product/${data.prodIndex}`;
  return (
    <li className='w-full flex justify-between items-center border-2 border-slate-800 p-4'>
      <Link
        href={linkHref}
        className='flex w-1/3 gap-6 justify-center items-center'
      >
        <Image
          src={`/images${data.prodImgUrl}`}
          alt='이미지가 들어갈 자리입니다.'
          width={70}
          height={70}
        />
        {/* products테이블에서 prodImgUrl을 가져와야함 */}
        <p className='text-xs'>{data.prodDescription}</p>
        {/* *products테이블에서 prodDescription을 가져와야함 */}
      </Link>
      <div className="flex gap-6 w-2/3 ">
        <div className="w-1/6 flex justify-center items-center text-xs text-right">
          {formatDate(data.orderPaymentDatetime)}
        </div>
        {/* order테이블에 있는 orderPaymentDatetime */}
        <div className='w-1/6 flex justify-center items-center text-xs'>
          {data.orderIndex}
        </div>
        {/* orderIndex */}
        <div className="w-1/2 flex justify-center items-center">{`${data.prodPrice}원 (${data.orderPaymentCount}개)`}</div>
        <div className="w-1/2 flex justify-center items-center">  
          {data.orderDeliveryDone ? "배송 준비" : "배송 완료"}
        </div>
      </div>
    </li>
  );
};

export default OrderList;
