import styles from "./productInformation.module.css";

export default function productInformation() {
  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className ="flex justify-center items-center mt-5">
      <div className={`${styles.productInformation}`}>
        <div className="flex">
          <div>상품 정보</div>
          <div>주문 일자</div>
          <div>주문 번호</div>
          <div>주문 금액(수량)</div>
          <div>주문 상태</div>
        </div>
        <div className="flex">
          <div>product img data</div>
          <div>order date data</div>
          <div>order id data</div>
          <div>order price data</div>
          <div>order state data</div>
        </div>
      </div>
    </div>
  );
}
