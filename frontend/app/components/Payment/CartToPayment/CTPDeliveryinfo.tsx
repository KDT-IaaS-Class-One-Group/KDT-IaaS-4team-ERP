import CTPInput from "./CTPInput";
export default function CTPDeliveryinfo({
  className,
  onDeliveryInfoChange,
}: {
  className?: string;
  onDeliveryInfoChange: (name: string, value: string) => void;
}) {
  const handleInputChange = (event : any) => {
    const { name, value } = event.target;
    onDeliveryInfoChange(name, value);
  };

  return (
    <ul className={className}>
      <CTPInput
        InputName="orderReceiver"
        inputPlaceholder="수령인을 작성해주세요"
        liClassName="h-12 pr-3"
        listName="이름"
        onChange={handleInputChange}
      />
      <CTPInput
        InputName="orderReceiverPhone"
        inputPlaceholder="연락처을 작성해주세요"
        liClassName=" h-12 pr-3 "
        listName="연락처"
        onChange={handleInputChange}
      />
      <CTPInput
        InputName="orderDeliveryAddress"
        inputPlaceholder="주소를 작성해주세요"
        liClassName=" h-12 pr-3  "
        listName="주소"
        onChange={handleInputChange}
      />
      <CTPInput
        InputName="orderRequest"
        inputPlaceholder="요청사항를 작성해주세요"
        liClassName=" h-12 pr-3  "
        listName="요청사항"
        onChange={handleInputChange}
      />
    </ul>
  );
}
