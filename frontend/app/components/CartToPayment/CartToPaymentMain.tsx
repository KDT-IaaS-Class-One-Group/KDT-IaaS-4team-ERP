"use client";
import Btn from "../Btn/Btn";
import CTPDeliveryinfo from "../Payment/CartToPayment/CTPDeliveryinfo";
import CTPPaymentList from "../Payment/CartToPayment/CTPPaymentList";

export default function CartToPaymentMain() {
  // todo 1 : cartTable을 토큰으로 조회하여 선택한 상품의 정보를 받아와서 보여준다.
  // todo 2 : 인풋 값을 상태에 저장한다.
  // todo 3 : 인풋 값이 모두 없으면 디나이 기능을 넣는다.
  // todo 4 : 인풋 값이 모두 있으면 buyButton을 누르면 결제가 되도록 한다.
  // todo 5 : 결제가 실패하면 alert를 띄운다.
  // todo 6 : 결제가 완료되면 장바구니에서 해당 상품을 삭제한다.
  // todo 7 : 결제가 완료되면 주문 조회페이지로 이동한다.

  // 할 일 리스트
  // 1. 컴포넌트 만들기
  // 2. 상태 만들기
  // 3. 기능 구현하기

  const test = () => {
    console.log("버튼 작동");
  };

  return (
    <main className="w-full h-full flex justify-start items-center flex-col p-3 gap-5">
      <CTPDeliveryinfo className="w-4/5 h-1/5 overflow-hidden border border-slate-900 flex flex-col justify-center items-center gap-3 p-3 mt-5" />
      <ul className="CTPPaymentUl w-4/5 flex flex-col justify-center items-center h-3/5 border border-slate-950 gap-3">
        {/* <CTPPaymentList />
        <CTPPaymentList /> */}
      </ul>
      <div className="CTPPaymentMainBottomArea w-4/5 h-1/5 flex justify-end">
        <Btn
          className="CTPPaymentButton h-12 w-28 border border-slate-950 cursor-pointer"
          textContent="구매하기"
          onClick={test}
        />
      </div>
    </main>
  );
}
