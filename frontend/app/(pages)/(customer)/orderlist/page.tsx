"use client";

import OrderListNav from "@/app/components/orderListComponent/orderListNav/OrderListNav";
import OrderList from "@/app/components/orderListComponent/orderList/OrderList";
import React, { useState, useEffect } from "react";
import { OrderPageGetDataProps } from "@/app/interfaces/Order/OrderPageGetDataProps";

const OrderListComponent: React.FC = () => {
  const [orderList, setOrderList] = useState<OrderPageGetDataProps[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost:3560/orderpage/getdata`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("주문 목록을 가져오는 데 실패했습니다.");
        }

        const data = await response.json();
        console.log("data : ", data);
        setOrderList(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
      <OrderListNav />
      <div className="h-full w-full flex flex-col overflow-scroll overflow-x-hidden">
        {orderList.length === 0 ? (
          <p>주문 목록이 비어 있습니다.</p>
        ) : (
          <ul className="flex flex-col justify-start h-full w-full">
            {orderList.map((order, index) => (
              <OrderList key={index} data={order} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default OrderListComponent;
