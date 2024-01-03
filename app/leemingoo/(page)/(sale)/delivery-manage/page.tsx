// 배송 관리 페이지

'use client';
import React from 'react';

interface Shipment {
  id: number;
  orderID: number;
  address: string;
  status: string; // 예를 들어 '준비중', '배송중', '배송완료' 등
}

const shippingData: Shipment[] = [
  // ... 배송 데이터
];

export default function DeliveryManage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-semibold mb-4'>배송 관리</h1>
      <div className='flex flex-col space-y-2'>
        {shippingData.map((shipment) => (
          <div
            key={shipment.id}
            className='flex justify-between items-center p-4 border-b'
          >
            <div>주문번호: {shipment.orderID}</div>
            <div>주소: {shipment.address}</div>
            <div>상태: {shipment.status}</div>
            {/* 상태 변경 버튼 등 추가 가능 */}
          </div>
        ))}
      </div>
    </div>
  );
}
