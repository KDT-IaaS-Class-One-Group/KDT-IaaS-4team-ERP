'use client';
import React, { useState, useEffect } from 'react';

interface Order {
  orderId: number;
  userId: number;
  orderDate: string;
  orderItems: string[];
}

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // 주문 목록을 불러오는 함수
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(
          'There has been a problem with your fetch operation:',
          error,
        );
      }
    };

    fetchOrders();
  }, []);

  const handleAccept = async (orderId: number) => {
    // 주문을 수락하는 함수
    try {
      const response = await fetch(`/api/orders/accept/${orderId}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // 상태 업데이트 로직을 여기에 추가할 수 있습니다.
    } catch (error) {
      console.error('Failed to accept the order:', error);
    }
  };

  const handleReject = async (orderId: number) => {
    // 주문을 거절하는 함수
    try {
      const response = await fetch(`/api/orders/reject/${orderId}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // 상태 업데이트 로직을 여기에 추가할 수 있습니다.
    } catch (error) {
      console.error('Failed to reject the order:', error);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-xl font-semibold mb-6'>주문 관리</h1>
        {orders.length > 0 ? (
          orders.map((order) => (
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
          ))
        ) : (
          <p>주문이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
