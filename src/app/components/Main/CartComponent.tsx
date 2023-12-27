import React from "react"; 
import CartNav from "../CartNav/CartNav";
import Btn from "../Btn/Btn";
import ProductList from "../productList/ProductList";


export default function CartComponent() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Btn textContent='주문하기' className="h-10 w-28 outline outline-1 flex items-center justify-center "/>
      <CartNav />
      <ul id="productUl">
        {/*제품리스트가 추가 될 곳*/}
        <ProductList pUrl=''pCount={1} pPrice={150000} pSub="이 상품은 예시입니다." />
      </ul>
    </main>
  );
}
