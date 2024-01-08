'use client'

// Cart page를 렌더링하는 파일입니다.
import CartMain from "@/app/components/cartComponents/CartMain";
import ProductList from "@/app/components/cartComponents/Productlist"

export default function Cart() {
  return (
    <div>
      <CartMain />
      <ProductList />
    </div>
  );
}
