import styles from './style/deliveryInformation.module.css';
import { productType } from './types';
import { Productpaymentprops } from '@/app/types/Product/ProductpaymentProps';

// type DeliveryInfo = {
//   deliveryinfo: deliveryType;
//   setpaymentcompleteinfo: (field: string, value: string) => void;
// };

const DeliveryInformation: React.FC<Productpaymentprops> = ({
  setpaymentcompleteinfo,
}) => {
  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>) => {
      setpaymentcompleteinfo(field, event.target.value);
    };


  return (
    <div className="w-screen h-1/4 border  border-slate-950 flex justify-around items-center">
      <div className='flex flex-col justify-center h-3/5 w-1/3'>
        {/* tailwind와 css모듈 같이 사용하기 */}
        <div className="flex w-full justify-around mt-2 mb-2">
          <label className='w-20' htmlFor="deliveryname">이름:</label>
          <input
            type="text"
            className="w-5/6 border border-gray-400 p-1 cursor-text"
            id="deliveryname"
            onChange={handleInputChange("orderReceiver")}
            placeholder="이름을 입력하세요"
          />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2">
          <label className='w-20' htmlFor="deliveryphone">연락처:</label>
          <input
            type="text"
            className="w-5/6 border border-gray-400 p-1 cursor-text"
            id="deliveryphone"
            onChange={handleInputChange("orderReceiverPhone")}
            placeholder="연락처를 입력하세요"
          />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2">
          <label className='w-20' htmlFor="deliveryaddress">주소:</label>
          <textarea
            className="w-5/6 border border-gray-400 p-1 text-black cursor-text"
            id="deliveryaddress"
            onChange={handleInputChange("orderDeliveryAddress")}
            placeholder="주소를 입력하세요"
          />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2">
          <label className='w-20' htmlFor="deliveryrequest">요청사항:</label>
          <textarea
            className="w-5/6 border border-gray-400 p-1 cursor-text text-black"
            id="deliveryrequest"
            onChange={handleInputChange("orderRequest")}
            placeholder="요청사항을 입력하세요"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInformation;
