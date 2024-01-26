"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import CartNav from "./CartNav/CartNav";
import Btn from "../Btn/Btn";
import CartList from "./cartList/CartList";
import CTPDeliveryinfo from "../Payment/CartToPayment/CTPDeliveryinfo";
import { checkAllValuesNotEmpty } from "@/app/utils/checkAllValuesNotEmpty";
import Modal from "../Modal/Modal";
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
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  // 배송 정보를 담는 state
  const [deliveryInfo, setDeliveryInfo] = useState({
    orderReceiver: "",
    orderReceiverPhone: "",
    orderDeliveryAddress: "",
    orderRequest: "",
  });

  //Modal 코드
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    title: '',
    message: '',
  });

 // Modal을 열기 위한 함수
 const openModal = (title: string, message: string) => {
  setModalContent({
    isOpen: true,
    title,
    message,
  });
};

  // Modal을 닫기 위한 함수
  const closeModal = () => {
    setModalContent({
      isOpen: false,
      title: '',
      message: '',
    });
  };


  // 수량 변경 콜백 함수
  const handleQuantityChange = (cartIndex: number, newQuantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [cartIndex]: newQuantity,
    }));
  };

  const handleDeliveryInfoChange = (name: string, value: string) => {
    setDeliveryInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 결제 버튼 데이터 가공 로직
  const handleCartToPayment = async (requestData: object) => {
    // requestData에 수량 변경사항과 배송 정보 통합
    const processedData: any[] = Array.isArray(requestData)
      ? requestData.map((item: any) => ({
          ...item,
          cartProductCount: quantities[item.cartIndex] || item.cartProductCount,
          orderReceiver: deliveryInfo.orderReceiver,
          orderReceiverPhone: deliveryInfo.orderReceiverPhone,
          orderDeliveryAddress: deliveryInfo.orderDeliveryAddress,
          orderRequest: deliveryInfo.orderRequest,
        }))
      : [];

    // processedData를 사용하여 결제 요청 전송
    // 예: fetch('/api/payment', { method: 'POST', body: JSON.stringify(processedData) })

    // 디버깅용
    console.log("processedData", processedData);

    // 결제 요청 전송
    try {
      const token = localStorage.getItem("token"); // 사용자 토큰 가져오기
      const response = await fetch("http://localhost:3560/cart/cartToPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(processedData),
      });

      if (!response.ok) {
        throw new Error("Payment request failed");
      }

      // 요청 성공 처리
      const result = await response.json();
      console.log("Payment Success:", result);
      // 추가적인 성공 처리 로직 (예: 사용자를 주문 확인 페이지로 리디렉션)
    } catch (error) {
      console.error("Payment Error:", error);
      // 에러 처리 로직
    }
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
  },[]);

  // 총 가격을 계산하는 함수
  const calculateTotalPrice = (): number => {
    let totalPrice = 0;

    requestData.forEach((item) => {
      // 만약 quantities에서 업데이트된 cartProductCount를 사용할 수 있다면 사용합니다.
      const quantity = quantities[item.cartIndex] || item.cartProductCount;
      totalPrice += item.prodPrice * quantity;
    });

    return totalPrice;
  };

  // 결제하기 버튼 클릭 이벤트 핸들러 (최종 실행 함수)
  const handlePaymentClick = () => {
    if (checkAllValuesNotEmpty(deliveryInfo) === true) {
      handleCartToPayment(requestData);
    } else {
      // 알림 모달이 떠야할 자리
      // alert("배송 정보에 정보가 없습니다.");
      console.log("배송 정보에 정보가 없습니다.");
    }
  };

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
        {/* 서버에서 가져온 DB 데이터 */}
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
      <div className="flex flex-row">
        <div className="h-10 w-7/12 ml-48 border border-black flex items-center justify-center">
          총 금액: {calculateTotalPrice()}원
        </div>
        <Link
          href={checkAllValuesNotEmpty(deliveryInfo) ? "/orderlist" : "#"}
          className="ml-auto"
        >
          <Btn
            textContent="결제 하기"
            className="h-10 w-28 border border-black flex items-center justify-center cursor-pointer"
            onClick={() => {
              handlePaymentClick();
            }}
          />
        </Link>

      {/* Modal 컴포넌트 추가 */}
      <Modal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
      />

      </div>
    </main>
  );
}
