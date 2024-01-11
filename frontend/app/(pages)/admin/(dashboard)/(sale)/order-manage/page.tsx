'use client';
import React, { useState, useEffect } from 'react';
import { orderIndexProp } from '@/app/types/Order/OrderIndexProp';
import { OrderRequestProp } from '@/app/types/Order/OrderRequestProp';
import { OrderDeliveryAddressProp } from '@/app/types/Order/OrderDeliveryAddressProp';
import { OrderPaymentCountProp } from '@/app/types/Order/OrderPaymentCountProp';
import { OrderPaymentDatetimeProps } from '@/app/types/Order/OrderPaymentDatetimeProp';
import { OrderPaymentPriceAtOrderProp } from '@/app/types/Order/OrderPaymentPriceAtOrderProp';
import { OrderDeliveryDoneProp } from '@/app/types/Order/OrderDeliveryDoneProp';
import { UserIndexProp } from '@/app/types/Order/UserIndexProp';
import { ProdIndexProp } from '@/app/types/Order/ProdIndexProp';

interface OrderProps
  extends orderIndexProp,
    OrderRequestProp,
    OrderDeliveryAddressProp,
    OrderPaymentCountProp,
    OrderPaymentDatetimeProps,
    OrderPaymentPriceAtOrderProp,
    OrderIsOrderAccepted,
    OrderDeliveryDoneProp,
    UserIndexProp,
    ProdIndexProp {}

export default function OrderManagement() {
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    // 주문 데이터 불러오기
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3560/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('주문 데이터 로딩 오류:', error);
      }
    };
    fetchOrders();
  }, []);

  // 주문 수락 또는 거절 처리 함수
  const handleOrderAcceptance = async (
    orderIndex: number,
    isAccepted: boolean,
  ) => {
    try {
      const response = await fetch(
        `http://localhost:3560/api/orders/acceptance/${orderIndex}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ isAccepted }),
        },
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
          }),
        );
      } else {
        // 오류 처리
      }
    } catch (error) {
      console.error('주문 상태 업데이트 오류:', error);
    }
  };

  // 배송 상태 변경 처리 함수
  const handleDeliveryStatus = async (orderIndex: number, status: number) => {
    try {
      const response = await fetch(
        `http://localhost:3560/api/orders/delivery/${orderIndex}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ deliveryStatus: status }),
        },
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
          }),
        );
      } else {
        // 오류 처리
      }
    } catch (error) {
      console.error('배송 상태 업데이트 오류:', error);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      {orders.map((order) => (
        <div
          key={order.orderIndex}
          className='bg-white p-4 shadow-md rounded-lg mb-4'
        >
          <h3 className='text-lg font-semibold mb-2'>
            주문 번호: {order.orderIndex}
          </h3>
          <p>요청 사항: {order.orderRequest}</p>
          <p>배송 주소: {order.orderDeliveryDone}</p>
          <p>주문 상품 개수: {order.orderPaymentCount}</p>
          <p>주문 날짜: {order.orderPaymentDatetime}</p>
          <p>주문 금액: {order.orderPaymentPriceAtOrder}원</p>
          <p className='mb-4'>
            배송 상태:{' '}
            {order.orderDeliveryDone === 0 ? '배송 준비' : '배송 완료'}
          </p>
          <div className='flex'>
            {order.orderIsOrderAccepted === 0 && (
              <>
                <button
                  onClick={() => handleOrderAcceptance(order.orderIndex, true)}
                  className='...'
                >
                  주문 수락
                </button>
                <button
                  onClick={() => handleOrderAcceptance(order.orderIndex, false)}
                  className='...'
                >
                  주문 거절
                </button>
              </>
            )}

            {/* 배송 상태 버튼 */}
            {order.orderIsOrderAccepted === 1 && (
              <>
                <button
                  onClick={() => handleDeliveryStatus(order.orderIndex, 0)}
                  className='...'
                >
                  배송 준비
                </button>
                <button
                  onClick={() => handleDeliveryStatus(order.orderIndex, 1)}
                  className='...'
                >
                  배송 완료
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
