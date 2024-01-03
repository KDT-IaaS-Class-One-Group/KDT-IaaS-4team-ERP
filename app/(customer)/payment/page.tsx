import DeliveryInformation from "@/app/components/Payment/deliveryInformation";
import ProductInformation from "@/app/components/Payment/productInformation";
import BuyButton from "@/app/components/Payment/buyButton";

export default function PaymentPage() {
  return (
    <>
    <DeliveryInformation/>
    <ProductInformation />
    <BuyButton />
    </>
  );
}
