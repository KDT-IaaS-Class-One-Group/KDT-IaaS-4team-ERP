import React from "react"; 
import CartNav from "../CartNav/CartNav";
import Btn from "../Btn/Btn";


export default function CartComponent() {
  return (
    <main>
      <Btn textContent='주문하기'/>
      <CartNav />
      {/* 대충 제품 */}
    </main>
  );
}
