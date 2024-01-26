"use client";
import React, { useState, useEffect } from "react";
import { orderIndexProp } from "@/app/types/Order/OrderIndexProp";
import { OrderRequestProp } from "@/app/types/Order/OrderRequestProp";
import { OrderDeliveryAddressProp } from "@/app/types/Order/OrderDeliveryAddressProp";
import { OrderPaymentCountProp } from "@/app/types/Order/OrderPaymentCountProp";
import { OrderPaymentDatetimeProps } from "@/app/types/Order/OrderPaymentDatetimeProp";
import { OrderPaymentPriceAtOrderProp } from "@/app/types/Order/OrderPaymentPriceAtOrderProp";
import { OrderDeliveryDoneProp } from "@/app/types/Order/OrderDeliveryDoneProp";
import { OrderReceiverPhoneProp } from "@/app/types/Order/OrderReceiverPhoneProp";
import { UserIndexProp } from "@/app/types/Order/UserIndexProp";

import { ProductsTableProps } from "@/app/types/Product/ProductsTableProps";
import Image from "next/image";
import { formatDate } from "@/app/utils/formatDate";
import { OrderReceiverProp } from "@/app/types/Order/OrderReceiverProp";

interface OrderProps
  extends orderIndexProp,
    OrderRequestProp,
    OrderDeliveryAddressProp,
    OrderPaymentCountProp,
    OrderPaymentDatetimeProps,
    OrderPaymentPriceAtOrderProp,
    OrderReceiverPhoneProp,
    OrderIsOrderAccepted,
    OrderReceiverProp,
    OrderDeliveryDoneProp,
    UserIndexProp,
    ProductsTableProps {}

export default function OrderManagement() {
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    // 주문 데이터 불러오기
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3560/api/orders");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("주문 데이터 로딩 오류:", error);
      }
    };
    fetchOrders();
  }, []);

  // todo 01/22 추가된 코드
  // 주문 수락 또는 거절 처리 함수
  const handleOrderAcceptance = async (
    orderIndex: number,
    isAccepted: boolean
  ) => {
    try {
      const response = await fetch(
        `http://localhost:3560/api/orders/acceptance/${orderIndex}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isAccepted }),
        }
      );

      const data = await response.json();
      if (data.success) {
        // 주문 상태 업데이트
        setOrders(
          orders.map((order) => {
            if (order.orderIndex === orderIndex) {
              return { ...order, orderIsOrderAccepted: isAccepted ? 1 : 2 };
            }
            return order;
          })
        );
      } else {
        // 오류 처리
      }
    } catch (error) {
      console.error("주문 상태 업데이트 오류:", error);
    }
  };

  // 배송 상태 변경 처리 함수
  const handleDeliveryStatus = async (orderIndex: number, status: number) => {
    try {
      const response = await fetch(
        `http://localhost:3560/api/orders/delivery/${orderIndex}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ deliveryStatus: status }),
        }
      );

      const data = await response.json();
      if (data.success) {
        // 배송 상태 업데이트
        setOrders(
          orders.map((order) => {
            if (order.orderIndex === orderIndex) {
              return { ...order, orderDeliveryDone: status };
            }
            return order;
          })
        );
      } else {
        // 오류 처리
        console.error("배송 상태 업데이트 실패");
      }
    } catch (error) {
      console.error("배송 상태 업데이트 오류:", error);
    }
  };

  return (
    <main className="flex container mx-auto p-4 items-center flex-col w-full h-full">
      <div className="overflow-x-auto w-full h-full">
        <div className="overflow-y-auto h-full">
          <table className="min-w-full leading-normal">
            <thead className="sticky top-0 bg-gray-500">
              <tr className="text-center">
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  주문 번호
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  이미지
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  상품명
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  요청 사항
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  수령인
                </th>
                <th className="w-1/6 px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  배송 주소
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  연락처
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  주문 개수
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  주문 날짜
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  주문 금액
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  배송 상태
                </th>
                <th className="px-5 py-3 border-b-2 border-wine text-yellow-300  text-xs font-semibold uppercase tracking-wider">
                  조치
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderIndex} className="text-center">
                  <td className="px-5 py-3 border-b text-sm">
                    <div className="whitespace-no-wrap">{order.orderIndex}</div>
                  </td>
                  <td className="px-4 py-2 border-b text-sm">
                    <Image
                      width={50}
                      height={50}
                      className="rounded-full"
                      src={`/images${order.prodImgUrl}`}
                      alt="image"
                    />
                  </td>
                  <td className="w-1/12 px-5 py-3 border-b text-sm">
                    {order.prodName}
                  </td>

                  <td className="px-2 py-3 border-b text-sm">
                    <div className="whitespace-no-wrap">
                      {order.orderRequest}
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b text-sm">
                    <div className="whitespace-no-wrap">
                      {order.orderReceiver}
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b text-sm">
                    <div className="whitespace-no-wrap">
                      {order.orderDeliveryAddress}
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b text-sm">
                    <div className="whitespace-no-wrap">
                      {order.orderReceiverPhone}
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b text-sm">
                    <div className="whitespace-no-wrap">
                      {order.orderPaymentCount}
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b text-sm">
                    <div className="whitespace-no-wrap">
                      {formatDate(order.orderPaymentDatetime)}
                    </div>
                  </td>
                  <td className="py-3 border-b text-sm">
                    <div className="whitespace-no-wrap">
                      {order.orderPaymentPriceAtOrder}원
                    </div>
                  </td>
                  <td className="-ml-2 py-3 border-b text-sm">
                    <div
                      className={`whitespace-no-wrap ${
                        order.orderDeliveryDone === 0 ? "text-red-500" : ""
                      }`}
                    >
                      {order.orderDeliveryDone === 0
                        ? "배송 준비"
                        : "배송 완료"}
                    </div>
                  </td>
                  <td className="pr-5 py-3 border-b text-sm">
                    {order.orderDeliveryDone === 0 && (
                      <button
                        onClick={() =>
                          handleDeliveryStatus(order.orderIndex, 1)
                        }
                        className="text-blue-500 hover:text-blue-800 cursor-pointer text-center w-full mr-1 mb-1"
                      >
                        배송하기
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
