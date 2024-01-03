// 구매완료 버튼을 눌렀을 때 상품에 대한 데이터나 상태를 '주문됨'으로 바꿔주는 기능을 하는 컴포넌트.
// 추후 필요한 작업: 아직 상태관리나 데이터를 바꿔주는 기능이 없음. 추후 작업이 필요.

// import styles from "./style/buyButton.module.css";

export default function buyButton() {
  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="flex justify-center relative mt-5">
      <div className="flex flex-row-reverse w-4/5">
        <button className="bg-slate-300">구매완료</button>
        {/* 기능 api 결제사용? */}
      </div>
    </div>
  );
}
