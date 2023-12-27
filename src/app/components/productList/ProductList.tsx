import React from 'react';
import Btn from '../Btn/Btn';
import Image from 'next/image';

interface PList {
  pUrl: string;
  pSub: string;
  pPrice: number;
  pCount: number;
}

const ProductList: React.FC<PList> = ({pUrl, pSub, pPrice, pCount}) => {
  return (
    <li 
    className='w-full flex justify-between items-center border-2 border-slate-800 p-4'>
      <Image src={pUrl} alt="이미지가 들어갈 자리입니다." width="65" height = "65"/>
      <p className='text-xs'>{pSub}</p>
      <div >{pPrice}</div>
      <div>{pCount}</div>
      <Btn textContent='삭제'
        className='h-10 w-28 outline outline-1 flex items-center justify-center '/>
      <select name="option" id="pOption" 
        className='border-1 border-slate-600'>
        <option value="1">1개</option>
        <option value="2">2개</option>
        <option value="3">3개</option>
      </select>
    </li>
  );
}

export default ProductList;