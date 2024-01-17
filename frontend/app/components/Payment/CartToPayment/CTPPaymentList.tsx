"use client";

import Btn from '@/components/Btn/Btn';
import Image from 'next/image';
import { useState } from 'react';

export default function CTPPaymentList({ className, cartProductCount, prodDescription, prodImgUrl }) {
  const [quantity, setQuantity] = useState(cartProductCount);

  const handleIncrease = () => {
    if (quantity < 50){
    setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const paymentListDefualt = `CTPPaymentList w-full h-1/4 border border-slate-950 flex justify-around items-center ${className}`;

  return (
    <li className={paymentListDefualt}>
      <div className='flex justify-start items-center gap-6 w-2/5 h-full p-1'>
        <Image alt='' src={prodImgUrl} width={85} height={85} />
        <p className='productSub text-xs h-20 w-1/2 flex items-center'>{prodDescription}</p>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <span className='cartProductCount text-xl font-medium'>{quantity}</span>
        <div className='flex flex-col justify-center items-center gap-0 w-7'>
          <button className='w-full flex justify-center items-center text-center' onClick={handleDecrease}>-</button>
          <button className='w-full flex justify-center items-center text-center' onClick={handleIncrease}>+</button>
        </div> 
        {/* 버튼 세로 묶음 */}
      </div>
      {/* 버튼 컴포넌트 */}

      <Btn 
        className='w-1/6 h-10 border border-slate-950 text-sm ' 
        textContent='리스트 삭제'
        onClick={() => {console.log('리스트 삭제')}}
      />
      {/* todo : 리스트 삭제 기능 추가해야함
        1. 해당 리스트 컴포넌트를 식별한다.
        2. 해당 리스트 컴포넌트를 삭제한다.
        3. 해당 리스트 컴포넌트를 삭제하면 cart table에서 해당 상품을 삭제한다.
       */}
    </li>
  );
}