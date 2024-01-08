import DeliveryInformation from "@/components/Payment/deliveryInformation";
import ProductInformation from "@/components/Payment/productInformation";
import BuyButton from "@/components/Payment/buyButton";

export default function PaymentPage() {
  return (
    <>
    <DeliveryInformation/>
    <ProductInformation />
    <BuyButton />
    </>
  );
}
