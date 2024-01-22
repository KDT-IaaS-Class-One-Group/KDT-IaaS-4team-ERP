'use client';
import React, { useState, useEffect } from 'react';
import { orderIndexProp } from '@/types/Order/OrderIndexProp';
import { OrderRequestProp } from '@/types/Order/OrderRequestProp';
import { OrderDeliveryAddressProp } from '@/types/Order/OrderDeliveryAddressProp';
import { OrderPaymentCountProp } from '@/types/Order/OrderPaymentCountProp';
import { OrderPaymentDatetimeProps } from '@/types/Order/OrderPaymentDatetimeProp';
import { OrderPaymentPriceAtOrderProp } from '@/types/Order/OrderPaymentPriceAtOrderProp';
import { OrderDeliveryDoneProp } from '@/types/Order/OrderDeliveryDoneProp';
import { UserIndexProp } from '@/types/Order/UserIndexProp';
import { ProdIndexProp } from '@/types/Order/ProdIndexProp';

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
    <div className='flex container mx-auto p-4 items-center flex-col'>
      <div className='overflow-x-auto w-full'>
        <div className='max-h-[800px] overflow-y-auto'>
          <table className='min-w-full leading-normal'>
            <thead>
              <tr>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  주문 번호
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  요청 사항
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  배송 주소
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  주문 상품 개수
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  주문 날짜
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  주문 금액
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  배송 상태
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  조치
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderIndex}>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='text-gray-900 whitespace-no-wrap'>
                      {order.orderIndex}
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='text-gray-900 whitespace-no-wrap'>
                      {order.orderRequest}
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='text-gray-900 whitespace-no-wrap'>
                      {order.orderDeliveryDone}
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='text-gray-900 whitespace-no-wrap'>
                      {order.orderPaymentCount}
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='text-gray-900 whitespace-no-wrap'>
                      {order.orderPaymentDatetime}
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='text-gray-900 whitespace-no-wrap'>
                      {order.orderPaymentPriceAtOrder}원
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='text-gray-900 whitespace-no-wrap'>
                      {order.orderDeliveryDone === 0
                        ? '배송 준비'
                        : '배송 완료'}
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {order.orderIsOrderAccepted === 1 && (
                      <>
                        <button
                          onClick={() =>
                            handleDeliveryStatus(order.orderIndex, 0)
                          }
                          className='text-blue-500 hover:text-blue-800'
                        >
                          배송 준비
                        </button>
                        <button
                          onClick={() =>
                            handleDeliveryStatus(order.orderIndex, 1)
                          }
                          className='text-green-500 hover:text-green-800 ml-4'
                        >
                          배송 완료
                        </button>
                      </>
                    )}
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
