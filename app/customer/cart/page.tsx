// Cart page를 렌더링하는 파일입니다.

import Nav from "@/app/components/Nav/Nav"; 
import CartMain from "../../components/cartComponents/CartMain";

export default function Cart() {
  return (
    <div>
      <Nav />
      <CartMain />
    </div>
  );
}
