// import styles from "./style/buyButton.module.css";

export default function BuyButton({onclick}: {onclick: () => void}) {

  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="flex justify-center relative mt-5 ">
      <div className="flex flex-row-reverse w-4/5">
        <button type='submit' className="text-xl cursor-pointer bg-slate-800 w-28 h-16 rounded-md" onClick={onclick}>구매완료</button>
        {/* 기능 api 결제사용? */}
      </div>
    </div>
  );
}
