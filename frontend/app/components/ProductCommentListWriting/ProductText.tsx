'use clinet';
// 'use client' 대신 'use strict'으로 가정하고 수정했습니다.

import React, { ChangeEvent } from 'react';

interface ProductTextProps {
  title: string;
  inputchange: (value: string) => void; // ChangeEvent<HTMLInputElement> 대신 value를 직접 전달
}

const ProductText: React.FC<ProductTextProps> = ({ title, inputchange }) => {
  return (
    <div className='flex h-20 m-2 w-full justify-between'>
      <label
        htmlFor={`inputText-${title}`} // id 속성을 동적으로 생성하여 고유성 보장
        className='w-32 text-center flex justify-center items-center'
      >
        {`${title} :`}
      </label>
      <input
        type='text'
        id={`inputText-${title}`}
        className='w-3/5 border-solid border-2'
        onChange={(e) => {
          inputchange(e.target.value);
        }}
      />
    </div>
  );
};

export default ProductText;