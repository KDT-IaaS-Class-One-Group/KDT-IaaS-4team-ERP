'use client'
// 'use client' 대신 'use strict'으로 가정하고 수정했습니다.

import { useState, useEffect } from 'react';
import ProductText from '@/components/ProductCommentListWriting/ProductText';
import Link from 'next/link';
import ProductUploadButton from '../ProductComment/ProductUploadButton';

const ProductWritingHome = () => {
  const [ProductWrit, setLoginUser] = useState({
    reviewTitle: '',
    reviewContent: '',
    reviewRating: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginUser({
      ...ProductWrit,
      [field]: value,
    });
  };

  const handleSubmit = () => { }; // 등록 Btn

  const titletext = 'flex w-4/5 m-2 h-20 items-start justify-center'
  const contenttext ='flex w-4/5 m-2 h-4/5 items-start justify-center'
 

  const handleProductCommentListWriting = async () => {
    try {
      const response = await fetch('http://localhost:3560/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviewTitle: ProductWrit.reviewTitle,
          reviewContent: ProductWrit.reviewContent,
          reviewRating: ProductWrit.reviewRating,
        }),
      });

      if (!response.ok) {
        throw new Error('글 쓰기 실패');
      }

      const data = await response.json();
      console.log(data);

      if (data.success) {
        // router.push('/');//내가 원하는 페이지로 이동시 사용
        alert('글 작성 성공');
      } else {
        alert('글 작성 실패');
      }
    } catch (error) {
      console.error(error);
      alert('글 작성 실패');
    }
  };

  return (
    <div className='flex flex-col items-center bg-blue-400 text-white w-full h-full justify-center'>
      <div className='w-4/5 h-4/5 flex flex-col justify-center items-center'>
      <ProductText
        title='TITLE' textheight = {titletext}
        inputchange={(value) => handleInputChange('reviewTitle', value)}
      />
      <ProductText
        title='CONTENT' textheight ={contenttext}
        inputchange={(value) => handleInputChange('reviewContent', value)}
      />
      </div>
      <div className='w-4/5 mb-4 flex justify-end h-1/5'>
        <ProductUploadButton value ='글등록' onClick = {handleSubmit} />
      </div>
    </div>
  );
};

export default ProductWritingHome;
