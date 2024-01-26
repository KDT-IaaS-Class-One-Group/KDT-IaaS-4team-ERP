'use client';
import DeliveryInformation from '@/app/components/Payment/deliveryInformation';
import ProductInformation from '@/app/components/Payment/productInformation';
import BuyButton from '@/app/components/Payment/buyButton';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/Modal/Modal';

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

   // Modal state 및 함수 추가
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    title: '',
    message: '',
  });

  // Modal 열기 함수
  const openModal = (title: string, message: string) => {
    setModalContent({
      isOpen: true,
      title,
      message,
    });
  };

  // Modal 닫기 함수
  const closeModal = () => {
    setModalContent({
      isOpen: false,
      title: '',
      message: '',
    });
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
        alert('주문이 성공적으로 완료되었습니다.');
        router.push('/');
      } else {
        // 결제 실패 시 Modal 열기
        openModal('결제 실패', '결제에 실패했습니다.');
      }
    } catch (error) {
      // 에러 발생 시 Modal 열기
      openModal('에러',"구매 정보가 올바르지 않습니다.");
    }
  };

  return (
    <>
      <DeliveryInformation setpaymentcompleteinfo={updateDeliveryInfo} />
      <ProductInformation setpaymentcompleteinfo={updateDeliveryInfo} />
      <BuyButton onclick={handleButtonClick} />

      {/* Modal 컴포넌트 추가 */}
      <Modal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
      />

    </>
  );
}
