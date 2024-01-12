'use client'
import DeliveryInformation from "@/components/Payment/deliveryInformation";
import ProductInformation from "@/components/Payment/productInformation";
import BuyButton from "@/components/Payment/buyButton";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


type ProductType = {
  setpaymentcompleteinfo: (info: any) => void; // 적절한 타입으로 변경
};

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


  const updateDeliveryInfo = (field: string, value: string) => {
    setpaymentcompleteinfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  }
  console.log(paymentcompleteinfo)




  return (
    <>
    <DeliveryInformation setpaymentcompleteinfo={updateDeliveryInfo}/>
    <ProductInformation setpaymentcompleteinfo={updateDeliveryInfo}/>
    <BuyButton />
    </>
  );
  
}
