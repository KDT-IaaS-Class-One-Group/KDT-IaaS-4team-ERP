import styles from "./style/deliveryInformation.module.css";
import { deliveryType } from "./types"

type DeliveryInfo = {
  deliveryinfo: deliveryType;
  setpaymentcompleteinfo: (field: string, value: string) => void;
};


const DeliveryInformation: React.FC<DeliveryInfo> = ({
  deliveryinfo,
  setpaymentcompleteinfo
}) => { 
  const handleInputChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpaymentcompleteinfo(field, event.target.value);
  };


  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="flex justify-center items-center mt-5">
      <div
        className={`${styles.buyerInformation} flex flex-col justify-center h-3/5`}
      >
        {/* tailwind와 css모듈 같이 사용하기 */}
        <div className="flex w-full justify-around mt-2 mb-2 ">
          <label htmlFor="deliveryname">이름:</label>
          <input type ='text' className='w-3/5' id ='deliveryname'  onChange={handleInputChange("orderReceiver")} />
          {/* {deliveryinfo.productData} */}
        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryphone">연락처:</label>
          <input type ='text' className='w-3/5' id ='deliveryphone' onChange={handleInputChange("orderReceiverPhone")} />

        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryaddress">주소:</label>
          <input  type ='text' className='w-3/5' id ='deliveryaddress' onChange={handleInputChange("orderDeliveryAddress")} />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryrequest">요청사항:</label>
          <input type ='text' className='w-3/5 ' id ='deliveryrequest' onChange={handleInputChange("orderRequest")} />

        </div>
      </div>
    </div>
    
  );
}

export default DeliveryInformation;