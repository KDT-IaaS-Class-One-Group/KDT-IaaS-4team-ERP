'use client';

import React, { useState } from 'react';

// 주문 타입 정의
interface IOrder {
  id: number;
  customerName: string;
  orderDate: string;
  deliveryStatus: '배송 준비' | '배송 완료';
}

// 주문 관리 컴포넌트
export default function DeliveryManage() {
  // 주문 목록 상태
  const [orders, setOrders] = useState<IOrder[]>([
    // 예시 데이터
    {
      id: 1,
      customerName: '고객 A',
      orderDate: '2024-01-01',
      deliveryStatus: '배송 준비',
    },
    {
      id: 2,
      customerName: '고객 B',
      orderDate: '2024-01-02',
      deliveryStatus: '배송 준비',
    },
    // ... 추가 주문 데이터
  ]);

  // 배송 상태를 업데이트하는 함수
  const updateDeliveryStatus = (
    orderId: number,
    status: IOrder['deliveryStatus'],
  ) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, deliveryStatus: status } : order,
      ),
    );
    // 배송 상태 업데이트 로직 추가
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-xl font-semibold mb-6'>배송 관리</h1>
        <div className='overflow-x-auto'>
          <table className='min-w-full leading-normal'>
            <thead>
              <tr>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  주문번호
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  고객명
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  주문일자
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  배송상태
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100'></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {order.id}
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {order.customerName}
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {order.orderDate}
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {order.deliveryStatus}
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-right'>
                    <button
                      onClick={() =>
                        updateDeliveryStatus(order.id, '배송 완료')
                      }
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      배송 시작
                    </button>
                    {/* 기타 상태 변경 버튼 추가 가능 */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
