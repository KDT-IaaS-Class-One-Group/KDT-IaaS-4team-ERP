import styles from "./buyerInformation.module.css";

export default function buyerInformation() {
  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="flex justify-center items-center mt-10">
      <div
        className={`${styles.buyerInformation} bg-red-500 flex flex-col justify-center`}
      >
        {/* tailwind와 css모듈 같이 사용하기 */}
        <div className="relative mt-2 mb-2">
          <p>배송정보:</p>
          <p>product</p>
        </div>

        <div className="relative mt-2 mb-2">
          <p>이름/연락처:</p>
          <p>buyerInfo</p>
        </div>

        <div className="relative mt-2 mb-2">
          <p>주소:</p>
          <p>address</p>
        </div>

        <div className="relative mt-2 mb-2">
          <p>요청사항:</p>
          <p>request</p>
        </div>
      </div>
    </div>
  );
}
