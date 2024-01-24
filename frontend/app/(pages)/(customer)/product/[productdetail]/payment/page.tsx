'use client';
import DeliveryInformation from '@/app/components/Payment/deliveryInformation';
import ProductInformation from '@/app/components/Payment/productInformation';
import BuyButton from '@/app/components/Payment/buyButton';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const searchparams = useSearchParams();
  const quantity = searchparams.get('quantity');
  const prodIndex = searchparams.get('prodIndex');

  const [paymentcompleteinfo, setpaymentcompleteinfo] = useState({
    orderReceiver: '',
    orderReceiverPhone: '',
    orderDeliveryAddress: '',
    orderRequest: '',
    prodIndex: prodIndex,
    orderPaymentCount: quantity,
  });

  const updateDeliveryInfo = (field: string, value: string) => {
    setpaymentcompleteinfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `http://localhost:3560/product/${prodIndex}/payment`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ paymentcompleteinfo }),
        },
      );
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `데이터 응답 못받음${response.status} - ${errorMessage}`,
        );
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
      alert(error.message);
    }
  };

  return (
    <>
      <DeliveryInformation setpaymentcompleteinfo={updateDeliveryInfo} />
      <ProductInformation setpaymentcompleteinfo={updateDeliveryInfo} />
      <BuyButton onclick={handleButtonClick} />
    </>
  );
}
