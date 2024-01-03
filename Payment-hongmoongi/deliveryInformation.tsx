// 배송정보에 대한 사용자 데이터를 입력해줘야 하는 컴포넌트.
// 추후 필요한 작업: 데이터를 입력해줘야하는 컴포넌트인데, 데이터를 입력받는 컴포넌트라고 잘못생각하고 만들었음. 다시 만들어야함.

import styles from "./style/deliveryInformation.module.css";
import { deliveryType } from "./types"

type DeliveryInfo = {
  deliveryinfo: deliveryType;
};


const DeliveryInformation: React.FC<DeliveryInfo> = ({ deliveryinfo }) => {
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
          {/* {deliveryinfo.productData} */}
        </div>

        <div className="relative mt-2 mb-2">
          <p>이름/연락처:</p>
          <p>buyerInfo data</p>
          {/* {deliveryinfo.buyerInfo} */}
        </div>

        <div className="relative mt-2 mb-2">
          <p>주소:</p>
          <p>address data</p>
          {/* {deliveryinfo.address} */}
        </div>

        <div className="relative mt-2 mb-2">
          <p>요청사항:</p>
          <p>request data </p>
          {/* {deliveryinfo.request} */}
        </div>
      </div>
    </div>
  );
}

export default DeliveryInformation;