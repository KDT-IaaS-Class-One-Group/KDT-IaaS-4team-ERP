import DeliveryInformation from "@/app/customComp/Payment/deliveryInformation";
import ProductInformation from "@/app/customComp/Payment/productInformation";
import BuyButton from "@/app/customComp/Payment/buyButton";

export default function PaymentPage() {
  return (
    <>
    <DeliveryInformation/>
    <ProductInformation />
    <BuyButton />
    </>
  );
}
