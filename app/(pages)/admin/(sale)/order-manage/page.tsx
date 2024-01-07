'use client';
import React from 'react';
import { OrderIdProps } from '@interfaces/Order/OrderIdProps';
import { UserIdProps } from '@interfaces/User/UserIdProps';
import { OrderDateProps } from '@interfaces/Order/OrderDateProps';
import { OrderItemsProps } from '@interfaces/Order/OrderItemsProps';

export interface OrderManagePageProps
  extends OrderIdProps,
    OrderDateProps,
    OrderItemsProps,
    UserIdProps {}

export default function OrderManagePage() {
  // 임시 주문 데이터
  const orders: OrderManagePageProps[] = [
    // 예시 데이터
    {
      orderId: 101,
      userId: 'test',
      orderDate: '2024-01-04',
      orderItems: ['상품 A', '상품 B'],
    },
    // ... 추가 주문 데이터
  ];

  // 주문 수락 함수
  const handleAccept = (orderId: number): void => {
    console.log('Accepting order with id:', orderId);
    // 여기에 주문 수락 로직 구현
  };

  // 주문 거절 함수
  const handleReject = (orderId: number): void => {
    console.log('Rejecting order with id:', orderId);
    // 여기에 주문 거절 로직 구현
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-xl font-semibold mb-6'>주문 관리</h1>
        {orders.map((order) => (
          <div
            key={order.orderId}
            className='border-b border-gray-200 py-4 flex flex-col md:flex-row items-center justify-between'
          >
            <div>
              <p>주문번호: {order.orderId}</p>
              <p>고객 ID: {order.userId}</p>
              <p>주문일자: {order.orderDate}</p>
              <p>주문상품: {order.orderItems.join(', ')}</p>
            </div>
            <div>
              <button
                onClick={() => handleAccept(order.orderId)}
                className='bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 mx-1 rounded'
              >
                수락
              </button>
              <button
                onClick={() => handleReject(order.orderId)}
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 mx-1 rounded'
              >
                거절
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
