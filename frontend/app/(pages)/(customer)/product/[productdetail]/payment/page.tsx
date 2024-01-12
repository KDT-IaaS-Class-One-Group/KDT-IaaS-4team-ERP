'use client'
import DeliveryInformation from "@/components/Payment/deliveryInformation";
import ProductInformation from "@/components/Payment/productInformation";
import BuyButton from "@/components/Payment/buyButton";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


export default function PaymentPage() {
  const [paymentcompleteinfo, setpaymentcompleteinfo] =useState(
    {orderReceiver : '',
    orderReceiverPhone : '',
    orderDeliveryAddress : '',
    orderRequest : '',
    prodIndex : '',
    orderPaymentCount : '',
    orderPaymentTotalPrice : '',
  })

  const paymentcomp = (field: string, value: string) => {
    setpaymentcompleteinfo({
      ...paymentcompleteinfo,
      [field]: value,
    });
  }




  return (
    <>
    <DeliveryInformation/>
    <ProductInformation />
    <BuyButton />
    </>
  );
  
}
