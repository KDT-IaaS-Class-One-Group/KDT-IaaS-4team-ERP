// card.tsx 는 홈페이지의 카드 컴포넌트 입니다.
// card.tsx 는 Image태그를 사용하였기 때문에 Image태그의 속성에 width={}과 height={}를 활용하여 이미지의 크기를 조절해야 합니다.

import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../../JH-interfaces/interfaces';

// interface CardProps {
//   pUrl: string;
//   pTitle: string;
//   pSub: string;
//   pPrice: number;
// }

/**
 * 
 * @param pUrl 상품 이미지 url : string
 * @param pTitle 상품명 : string
 * @param pSub 상품 설명 : string
 * @param pPrice 상품 가격 : number
 * @returns 
 */
const Card: React.FC<CardProps> = ({pUrl, pTitle, pSub, pPrice}) => {
  return (
    <div className='flex flex-col justify-between items-center w-80 h-2/5 border border-black p-4 gap-6'>
      <Image src={pUrl} alt='homepageCardImage' width={280} height={280} className=' outline-1 outline'/>
      <div className='card-subArea w-full h-1/3 flex justify-between flex-col '>
        <div>
          <div className='w-1/3 h-1 border-b-2 border-slate-800 mb-1'></div>
          <h3 className='text-base font-bold mb-1'>{pTitle}</h3>
          <p className='text-xs'>{pSub}</p>
        </div>
        <p className='text-xs'>{pPrice}원</p>
      </div>
    </div>
  );
}

export default Card;