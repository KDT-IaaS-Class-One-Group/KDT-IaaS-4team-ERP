import styles from "./style/productInformation.module.css";

export default function productInformation() {
  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className ="flex justify-center items-center mt-5">
      <div className={`${styles.productInformation}`}>
        <div>
          <div className= "bg-slate-300">상품 정보</div>
          <div className= "bg-slate-300">주문 일자</div>
          <div className= "bg-slate-300">주문 번호</div>
          <div className= "bg-slate-300">주문 금액(수량)</div>
          <div className= "bg-slate-300">주문 상태</div>
        </div>
        <div>
          <div>
          <div className="bg-slate-500">product img data</div>
          <div>product content data</div>
          </div>
          <div className="bg-red-400">order date data</div>
          <div className="bg-red-400">order id data</div>
          <div className="bg-red-400">order price data</div>
          <div className="bg-red-400">order state data</div>
        </div>
      </div>
    </div>
  );
}
