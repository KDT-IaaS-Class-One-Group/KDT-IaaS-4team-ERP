"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import CartNav from "./CartNav/CartNav";
import Btn from "../Btn/Btn";
import CartList from "./cartList/CartList";
import CTPDeliveryinfo from "../Payment/CartToPayment/CTPDeliveryinfo";
// import Image from 'next/image';

/**
 * 장바구니 todo
 * todo 1. cartList 컴포넌트에서 변경된 수량 끌어올려서 cartIndex 별 변경된 수량을 보관합니다.
 * todo 2. CTPDeliveryInfo의 input.value를 배송 정보 컴포넌트에서 끌어올려서 수량을 보관합니다.
 * todo 3. requestData에 저장된 data를 가공하여 따로 저장합니다. (DeliveryInfo의 데이터를 객체에 추가합니다. 각 cartIndex에 변경된 수량을 cartProductCount의 값을 변경하여 저장합니다.
 * todo 4. handleCartToPayment 이벤트를 발생시키는 결제 하기 버튼을 눌러 post 타입, token과 가공된 data를 담아 보냅니다. 여기서 mariaDB의 ordersTable에 저장할 것입니다.
 */

export default function CartMain() {
  const [requestData, setRequestData] = useState<any[]>([]);
  // 수량 변경사항을 담는 state
  const [quantities, setQuantities] = useState({});
  // 배송 정보를 담는 state
  const [deliveryInfo, setDeliveryInfo] = useState({
    orderReceiver: "",
    orderReceiverPhone: "",
    orderDeliveryAddress: "",
    orderRequest: "",
  });

  // 수량 변경 콜백 함수
  const handleQuantityChange = (cartIndex: number, newQuantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [cartIndex]: newQuantity,
    }));
  };

  const handleDeliveryInfoChange = (name, value) => {
    setDeliveryInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 결제 버튼 데이터 가공 로직
  const handleCartToPayment = () => {
    // requestData에 수량 변경사항과 배송 정보 통합
    const processedData = requestData.map((item) => ({
      ...item,
      cartProductCount: quantities[item.cartIndex] || item.cartProductCount,
      orderReceiver: deliveryInfo.orderReceiver,
      orderReceiverPhone: deliveryInfo.orderReceiverPhone,
      orderDeliveryAddress: deliveryInfo.orderDeliveryAddress,
      orderRequest: deliveryInfo.orderRequest,
    }));

    // processedData를 사용하여 결제 요청 전송
    // 예: fetch('/api/payment', { method: 'POST', body: JSON.stringify(processedData) })
    console.log("processedData", processedData);
  };

  // 디버깅용 useEffects
  useEffect(() => {
    console.log("deliveryInfo", deliveryInfo);
    console.log("quantities", quantities);
    console.log("requestData", requestData);
  }, [deliveryInfo, quantities, requestData]);

  // * 업데이트용 useEffect
  useEffect(() => {
    // 서버로부터 데이터를 가져옵니다.
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3560/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          const errorBody = await response.text(); // 서버로부터 받은 응답 본문을 가져옵니다.
          console.error(
            `Server responded with ${response.status}: ${errorBody}`
          );
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        console.log(data);
        setRequestData(data);
        console.log("requestData", requestData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col overflow-hidden w-full h-full p-3 gap-2">
      <CTPDeliveryinfo
        className="border border-slate-900 mb-4 w-full p-2"
        onDeliveryInfoChange={handleDeliveryInfoChange}
      />
      <CartNav />
      <ul
        id="productUl"
        className="flex flex-col gap-6 overflow-x-hidden w-full h-1/2"
      >
        {requestData.map((item, index) => (
          <CartList
            key={item.cartIndex} // 반드시 고유한 key를 제공해야 함
            cartIndex={item.cartIndex}
            prodIndex={item.prodIndex}
            prodImgUrl={item.prodImgUrl}
            cartProductCount={item.cartProductCount}
            prodPrice={item.prodPrice}
            prodDescription={item.prodDescription}
            className="h-20"
            onQuantityChange={(newQuantity) =>
              handleQuantityChange(item.cartIndex, newQuantity)
            }
          />
        ))}
      </ul>
      <Link href="/orderlist" className="ml-auto">
        <Btn
          textContent="결제 하기"
          className="h-10 w-28 border border-black flex items-center justify-center"
          onClick={handleCartToPayment}
        />
      </Link>
    </main>
  );
}
