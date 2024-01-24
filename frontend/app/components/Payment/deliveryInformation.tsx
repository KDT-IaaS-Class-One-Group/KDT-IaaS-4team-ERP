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
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setpaymentcompleteinfo(field, event.target.value);
    };
  setpaymentcompleteinfo,
}) => {
  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setpaymentcompleteinfo(field, event.target.value);
    };

  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="w-screen h-1/4 border border-slate-950 flex justify-around items-center">
      <div className={`flex flex-col justify-center h-3/5`}>
        {/* tailwind와 css모듈 같이 사용하기 */}
        <div className="flex w-full justify-around mt-2 mb-2">
          <label htmlFor="deliveryname">이름:</label>
          <input
            type="text"
            className="w-5/6 border border-gray-400 p-1"
            id="deliveryname"
            onChange={handleInputChange("orderReceiver")}
            placeholder="이름을 입력하세요"
          />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2">
          <label htmlFor="deliveryphone">연락처:</label>
          <input
            type="text"
            className="w-5/6 border border-gray-400 p-1"
            id="deliveryphone"
            onChange={handleInputChange("orderReceiverPhone")}
            placeholder="연락처를 입력하세요"
          />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2">
          <label htmlFor="deliveryaddress">주소:</label>
          <input
            type="text"
            className="w-5/6 border border-gray-400 p-1"
            id="deliveryaddress"
            onChange={handleInputChange("orderDeliveryAddress")}
            placeholder="주소를 입력하세요"
          />
        </div>

        <div className="flex w-full justify-around mt-2 mb-2">
          <label htmlFor="deliveryrequest">요청사항:</label>
          <input
            type="text"
            className="w-5/6 border border-gray-400 p-1"
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
