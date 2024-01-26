'use clinet';
// 'use client' 대신 'use strict'으로 가정하고 수정했습니다.

import React, { ChangeEvent } from 'react';

interface ProductTextProps {
  title: string;
  inputchange: (value: string) => void; // ChangeEvent<HTMLInputElement> 대신 value를 직접 전달
}

const ProductText: React.FC<ProductTextProps> = ({ title, inputchange, textheight }) => {
  return (
    <div className={textheight}>
      <label
        htmlFor={`inputText-${title}`} // id 속성을 동적으로 생성하여 고유성 보장
        className='w-32 flex justify-center mt-8'
      >
        {`${title} :`}
      </label>
      <textarea
        id={`inputText-${title}`}
        
        className='cursor-text w-full h-full text-black flex-wrap'
        onChange={(e) => {
          inputchange(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default ProductText;