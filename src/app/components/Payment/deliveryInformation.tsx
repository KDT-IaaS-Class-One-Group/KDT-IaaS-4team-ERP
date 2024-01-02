import styles from "./style/deliveryInformation.module.css";

export default function deliveryInformation() {
  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="flex justify-center items-center mt-5">
      <div
        className={`${styles.buyerInformation} flex flex-col justify-center`}
      >
        {/* tailwind와 css모듈 같이 사용하기 */}
        <div className="relative mt-2 mb-2">
          <p>배송정보:</p>
          <p>product data</p>
        </div>

        <div className="relative mt-2 mb-2">
          <p>이름/연락처:</p>
          <p>buyerInfo data</p>
        </div>

        <div className="relative mt-2 mb-2">
          <p>주소:</p>
          <p>address data</p>
        </div>

        <div className="relative mt-2 mb-2">
          <p>요청사항:</p>
          <p>request data</p>
        </div>
      </div>
    </div>
  );
}
