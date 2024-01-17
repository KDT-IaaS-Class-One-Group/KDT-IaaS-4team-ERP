import CTPInput from './CTPInput';
export default function CTPDeliveryinfo({ className }: { className: string }) {
  return (
    <ul className={className}>
      <CTPInput InputName='orderReceiver' inputPlaceholder='수령인을 작성해주세요' liClassName='h-12 pr-3  outline outline-1 ' listName='이름'/>
      <CTPInput InputName='deliveryphone' inputPlaceholder='연락처을 작성해주세요' liClassName=' h-12 pr-3 outline outline-1 ' listName='연락처'/>
      <CTPInput InputName='deliveryaddress' inputPlaceholder='주소를 작성해주세요' liClassName=' h-12 pr-3 outline outline-1 ' listName='주소'/>
      <CTPInput InputName='deliveryrequest' inputPlaceholder='요청사항를 작성해주세요' liClassName=' h-12 pr-3 outline outline-1 ' listName='요청사항'/>
    </ul>
  );
}
