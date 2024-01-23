import styles from "./style/deliveryInformation.module.css";
import { productType } from "./types";
import { Productpaymentprops } from "@/interfaces/Product/ProductpaymentProps";

// type DeliveryInfo = {
//   deliveryinfo: deliveryType;
//   setpaymentcompleteinfo: (field: string, value: string) => void;
// };


const DeliveryInformation: React.FC<Productpaymentprops> = ({
  setpaymentcompleteinfo
}) => { 
  const handleInputChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpaymentcompleteinfo(field, event.target.value);
  };


  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="w-screen h-1/4 border border-slate-950 flex justify-around items-center">
      <div
        className={`flex flex-col justify-center h-3/5`}
      >
        {/* tailwind와 css모듈 같이 사용하기 */}
        <div className="flex w-full justify-around mt-2 mb-2 ">
          <label htmlFor="deliveryname">이름:</label>
          <input type ='text' className='w-5/6' id ='deliveryname'  onChange={handleInputChange("orderReceiver")} />
          {/* {deliveryinfo.productData} */}
        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryphone">연락처:</label>
          <input type ='text' className='w-5/6' id ='deliveryphone' onChange={handleInputChange("orderReceiverPhone")} />

        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryaddress">주소:</label>
          <input  type ='text' className='w-5/6' id ='deliveryaddress' onChange={handleInputChange("orderDeliveryAddress")} />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2 ">
        <label htmlFor="deliveryrequest">요청사항:</label>
          <input type ='text' className='w-5/6 ' id ='deliveryrequest' onChange={handleInputChange("orderRequest")} />

        </div>
      </div>
    </div>
    
  );
}

export default DeliveryInformation;