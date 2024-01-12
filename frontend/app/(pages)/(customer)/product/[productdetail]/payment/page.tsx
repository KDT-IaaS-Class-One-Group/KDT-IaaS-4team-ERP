'use client'
import DeliveryInformation from "@/components/Payment/deliveryInformation";
import ProductInformation from "@/components/Payment/productInformation";
import BuyButton from "@/components/Payment/buyButton";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


type ProductType = {
  setpaymentcompleteinfo: (info: any) => void; // 적절한 타입으로 변경
};

export default function PaymentPage() {
  const router =useRouter();
  const searchparams = useSearchParams()
  const quantity = searchparams.get('quantity')
  const prodIndex = searchparams.get('prodIndex')
  console.log(prodIndex)

  const [paymentcompleteinfo, setpaymentcompleteinfo] = useState(
    {
      orderReceiver: '',
      orderReceiverPhone: '',
      orderDeliveryAddress: '',
      orderRequest: '',
      prodIndex: prodIndex,
      orderPaymentCount: quantity,
    })


  const updateDeliveryInfo = (field: string, value: string) => {
    setpaymentcompleteinfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  }

  console.log(paymentcompleteinfo)
  const handleButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3560/product/${prodIndex}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          
        },
        body: JSON.stringify({paymentcompleteinfo}),
      });
      if (!response.ok) {
        throw new Error('결제 실패');
      }

      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert('결제 성공');
        router.push('/');
      } else {
        alert('결제 실패');
      }
    } catch (error) {
      console.error(error);
      alert('회원가입 실패');
    }
  }




  return (
    <>
      <DeliveryInformation setpaymentcompleteinfo={updateDeliveryInfo} />
      <ProductInformation setpaymentcompleteinfo={updateDeliveryInfo} />
      <BuyButton onclick={handleButtonClick} />
    </>
  );

}
