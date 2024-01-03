// CartMain.tsx 는 장바구니 페이지의 메인 컴포넌트 입니다.
// 수정할 사항은 DB와 함께, 제품리스트가 추가되는 스크립트를 작성하는 것입니다.


import React from "react"; 
import CartNav from "./CartNav/CartNav";
import Btn from "../Btn/Btn";
import CartList from "./cartList/CartList";


export default function CartMain() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Btn textContent='주문하기' className="h-10 w-28 outline outline-1 flex items-center justify-center ali self-end"/>
      <CartNav />
      <ul id="productUl" className="flex flex-col gap-6">
        {/*제품리스트가 추가 될 곳 , db 정보와 함께 생성되는 스크립트를 작성하면 된다.*/}
        <CartList pUrl=''pCount={1} pPrice={150000} pSub="이 상품은 예시입니다." />
        <CartList pUrl=''pCount={1} pPrice={150000} pSub="이 상품은 예시입니다." />
        <CartList pUrl=''pCount={1} pPrice={150000} pSub="이 상품은 예시입니다." />
        <CartList pUrl=''pCount={1} pPrice={150000} pSub="이 상품은 예시입니다." />
        <CartList pUrl=''pCount={1} pPrice={150000} pSub="이 상품은 예시입니다." />
      </ul>
    </main>
  );
}
