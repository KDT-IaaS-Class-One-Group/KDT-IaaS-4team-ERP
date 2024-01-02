'use client'

import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import React, { useState } from "react";
import type { AppProps } from "next/app";
import Cart from "../components/cart/cart";
import { Product } from "../components/cart/types";

const MyApp: React.FC<AppProps> = ({ pageProps }) => {
  const [cartItems, setCartItems] = useState<Product[]>([
    { id: 1, name: "휴대폰", price: 500, image: "phone.jpg" },
    { id: 2, name: "노트북", price: 1200, image: "laptop.jpg" },
    { id: 3, name: "스마트워치", price: 300, image: "smartwatch.jpg" },
    // 다른 상품들 추가
  ]);

  return (
    <>
      <Header />
      <Nav />
      <Cart cartItems={cartItems} />
      <Footer />
    </>
  );
};

export default MyApp;
