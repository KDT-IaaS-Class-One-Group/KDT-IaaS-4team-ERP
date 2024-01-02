// 현재 폴더 : components/cartComponents/productList

import React from 'react';
import Btn from '../Btn/Btn';
import Image from 'next/image';
import { PList } from '../../../interfaces/interfaces';

const ProductList: React.FC<PList> = ({ pUrl, pSub, pPrice, pCount, className }) => {
  const combinedClassName = `w-full flex justify-between items-center border-2 border-slate-800 p-4 ${className}`;

  return (
    <li className={combinedClassName}>
      <Image src={pUrl} alt="이미지가 들어갈 자리입니다." width="65" height = "65"/>
      <p className='text-xs'>{pSub}</p>
      <div >{pPrice}</div>
      <div>{pCount}</div>
      <Btn textContent='삭제'
        className='h-10 w-28 outline outline-1 flex items-center justify-center '/>
      <Btn textContent='옵션 변경'
        className='h-10 w-28 outline outline-1 flex items-center justify-center '/>
        {/* 옵션 변경에 대한 기능이 들어가야 합니다. */}
    </li>
  );
}

export default ProductList;