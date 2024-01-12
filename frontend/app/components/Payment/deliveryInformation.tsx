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
        className={`${styles.buyerInformation} flex flex-col justify-center h-3/5`}
      >
        {/* tailwind와 css모듈 같이 사용하기 */}
        <div className="flex w-full justify-around mt-2 mb-2 ">
          <label htmlFor="deliveryname">이름:</label>
          <input className='w-3/5' id ='deliveryname' />
          {/* {deliveryinfo.productData} */}
        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryname">연락처:</label>
          <input className='w-3/5' id ='deliveryname' />

        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryaddress">주소:</label>
          <input className='w-3/5' id ='deliveryaddress' />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryrequest">요청사항:</label>
          <input className='w-3/5 ' id ='deliveryrequest' />

        </div>
      </div>
    </div>
    
  );
}

export default DeliveryInformation;