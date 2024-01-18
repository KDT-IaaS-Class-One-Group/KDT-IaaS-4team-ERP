"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import CartNav from "./CartNav/CartNav";
import Btn from "../Btn/Btn";
import CartList from "./cartList/CartList";
// import Image from 'next/image';

export default function CartMain() {
  const [requestData, setRequestData] = useState<any[]>([]);

  useEffect(() => {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col overflow-hidden w-full h-full">
      <Link href="/orderlist" className="ml-auto">
        <Btn
          textContent="결제 하기"
          className="h-10 w-28 border border-black flex items-center justify-center"
          onClick={() => {
            alert("결제가 완료 되었습니다.");
          }}
        />
      </Link>
      <CartNav />
      <ul id="productUl" className="flex flex-col gap-6 overflow-scroll">
        {requestData.map((item, index) => (
          <CartList
            key={item.cartIndex} // 반드시 고유한 key를 제공해야 함
            cartIndex={item.cartIndex}
            prodIndex={item.prodIndex}
            prodImgUrl={item.prodImgUrl}
            cartProductCount={item.cartProductCount}
            prodPrice={item.prodPrice}
            prodDescription={item.prodDescription}
          />
        ))}
      </ul>
    </main>
  );
}
