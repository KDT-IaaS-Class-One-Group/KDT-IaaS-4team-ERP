// import styles from "./style/buyButton.module.css";

export default function BuyButton() {
  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="flex justify-center relative mt-5">
      <div className="flex flex-row-reverse w-4/5">
        <button type='button' className="bg-slate-300">구매완료</button>
        {/* 기능 api 결제사용? */}
      </div>
    </div>
  );
}
