import React from 'react';
import Image from 'next/image';

interface CardProps {
  pUrl: string;
  pTitle: string;
  pSub: string;
  pPrice: number;
}

const Card: React.FC<CardProps> = ({pUrl, pTitle, pSub, pPrice}) => {
  return (
    <div className='flex flex-col justify-between items-center w-60 h-80 outline outline-1 p-4 gap-6'>
      <Image src={pUrl} alt='homepageCardImage' width={240} className='w-full h-2/3 '/>
      <div className='w-full h-1/3 outline outline-1 flex justify-between flex-col'>
        <div>
          <h3 className='text-lg font-bold'>{pTitle}</h3>
          <p className='text-xs'>{pSub}</p>
        </div>
        <p className='text-xs'>{pPrice}</p>
      </div>
    </div>
  );
}

export default Card;