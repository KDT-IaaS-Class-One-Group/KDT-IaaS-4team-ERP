// card.tsx 는 홈페이지의 카드 컴포넌트 입니다.

import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces/interfaces';

// interface CardProps {
//   pUrl: string;
//   pTitle: string;
//   pSub: string;
//   pPrice: number;
// }

const Card: React.FC<CardProps> = ({pUrl, pTitle, pSub, pPrice}) => {
  return (
    <div className='flex flex-col justify-between items-center w-1/4 h-2/5 outline outline-1 p-4 gap-6'>
      <Image src={pUrl} alt='homepageCardImage' className='w-full max-h-2/3 outline-1 outline'/>
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