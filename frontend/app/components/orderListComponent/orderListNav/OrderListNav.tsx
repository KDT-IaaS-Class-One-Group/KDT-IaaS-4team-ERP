// OrderListNav는 주문조회 페이지의 네비게이션 컴포넌트 입니다.
// 밑의 리스트들의 내용의 의미를 담고 있습니다.

import React from "react";

const OrderListNav: React.FC = () => {
  return (
    <ul className="flex justify-between items-center w-full h-24 border border-black p-4 gap-6">
      <li className="w-2/6 h-full text-sm border border-black  flex justify-center items-center ">
        상품 정보
      </li>
      <ul className="flex justify-end items-center h-full w-2/3 gap-6">
        <li className="w-1/6 text-sm flex justify-center items-center border border-black h-full">
          주문 일자
        </li>
        <li className="w-1/6 text-sm flex justify-center items-center border border-black h-full">
          주문 번호
        </li>
        <li className="w-1/2 text-sm flex justify-center items-center border border-black h-full">
          주문 금액(수량)
        </li>
        <li className="w-1/2 text-sm flex justify-center items-center border border-black h-full">
          배송 상태
        </li>
      </ul>
    </ul>
  );
};

export default OrderListNav;
