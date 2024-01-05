'use client'

import Link from "next/link";
import React from "react";
import Link from "next/link";
import React from "react";
import CartNav from "./CartNav/CartNav";
import Btn from "../Btn/Btn";
import CartList from "./cartList/CartList";
import { useState, useEffect } from "react";

const [requestData, setRequestData] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/path/to/productdata.json"); // 경로는 실제 파일 경로로 변경해야 합니다.
      const data = await response.json();
      setRequestData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);

export default function CartMain() {
  return (
    <main className="flex flex-col overflow-hidden w-full h-full"> 
      <Link href='/payment' className="ml-auto">
        <Btn textContent='주문하기' className="h-10 w-28 border border-black flex items-center justify-center" />
      </Link>
      <CartNav />
      <ul id="productUl" className="flex flex-col gap-6 overflow-scroll">
      {requestData.map((item, index) => (
        <CartList
          key={index} // 반드시 고유한 key를 제공해야 함
          pUrl={item.image_url}
          pCount={item.cart_quantity}
          pPrice={item.paymentpriceatorder}
          pSub={item.description}
        />
      ))}
      </ul>
    </main> 
  );
}
