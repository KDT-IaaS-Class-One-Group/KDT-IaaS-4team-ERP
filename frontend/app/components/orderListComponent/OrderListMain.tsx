// OrderListMain.tsx 는 주문조회 페이지의 메인 컴포넌트 입니다.

import React from "react"; 
import OrderList from "./orderList/OrderList";
import OrderListNav from "./orderListNav/OrderListNav";


export default function OrderListMain() {
  return (
    <main className="flex flex-col overflow-hidden">
      <OrderListNav />
      <ul id="productUl" className="flex flex-col gap-6">
        {/* 리스트가 추가 될 곳 , db 정보와 함께 생성되는 스크립트를 작성하면 된다.*/}

        {/* 밑의 orderList는 예시입니다.*/}
        <OrderList pUrl=''pCount={2} pPrice={150000} pSub="이 상품은 예시입니다." orderId="aasd" orderDate="20230102"
        orderState={true} />
        <OrderList pUrl=''pCount={2} pPrice={150000} pSub="이 상품은 예시입니다." orderId="aasd" orderDate="20230102"
        orderState={true} />
      </ul>
    </main>
  );
}
