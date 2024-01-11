'use client'


import Link from "next/link";
import React from "react";
import CartNav from "./CartNav/CartNav";
import Btn from "../Btn/Btn";
import CartList from "./cartList/CartList";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function CartMain() {

const [requestData, setRequestData] = useState([])


const fetchData = async (endpoint: string, setRequestData: React.Dispatch<React.SetStateAction<any[]>>) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log(data);
    setRequestData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(() => {
  fetchData('http://192.168.100.83:3560/cart', setRequestData);
}, []);


  return (
    <main className="flex flex-col overflow-hidden w-full h-full"> 
      <Link href='/payment' className="ml-auto">
        <Btn textContent='주문하기' className="h-10 w-28 border border-black flex items-center justify-center" />
      </Link>
      <CartNav />
      <ul id="productUl" className="flex flex-col gap-6 overflow-scroll">
      {/* {requestData.map((item, index) => (
        <CartList
          key={index} // 반드시 고유한 key를 제공해야 함
          pUrl={item.image_url}
          pCount={item.cart_quantity}
          pPrice={item.paymentpriceatorder}
          pSub={item.description}
        />
      ))} */}
      </ul>
    </main> 
  );
}
