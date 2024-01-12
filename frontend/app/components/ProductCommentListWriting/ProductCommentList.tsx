'use client'
// 'use client' 대신 'use strict'으로 가정하고 수정했습니다.

import { useState, useEffect } from 'react';
import ProductText from '@/components/ProductCommentListWriting/ProductText';
import Link from 'next/link';

const ProductWritingHome = () => {
  const [ProductWrit, setLoginUser] = useState({
    reviewTitle: '',
    reviewContent: '',
    reviewRating: '',
    reviewCreatedAt: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginUser({
      ...ProductWrit,
      [field]: value,
    });
  };

  const handleSubmit = () => {}; // 등록 Btn

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
          reviewCreatedAt: ProductWrit.reviewCreatedAt,
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
    <div className='flex flex-col items-center bg-black text-white w-full h-full justify-center'>
      {/* Area1: 글 쓰기 제목 */}
      <ProductText
        title='TITLE'
        inputchange={(value) => handleInputChange('reviewTitle', value)}
      />

      {/* Area2: 글 쓰기 내용 */}
      <ProductText
        title='CONTENT'
        inputchange={(value) => handleInputChange('reviewContent', value)}
      />

      {/* Area3: 사진 업로드 영역 */}
      <div className='bg-gray-400 w-4/5 h-5000 mb-4 flex justify-between'>
        {/* Area3-div 2: 불러온 사진 썸네일 */}
        <div className='bg-gray-400 h-450 mb-4'>
          {/* Area3-div 1: 이미지 썸네일 */}
          <button className='bg-pink-300 w-32 h-10 mb-4'>
            <div className='text-center py-2'>이미지 불러오기</div>
          </button>
          <div className='text-left py-2 pl-2 flex'>
            <div className='w-20 h-20 bg-black'> 사진 </div>
            <div className='w-20 h-20 bg-black'> 사진 </div>
            <div className='w-20 h-20 bg-black'> 사진 </div>
            <div className='w-20 h-20 bg-black'> 사진 </div>
          </div>
        </div>

        {/* Area4: 등록 버튼(input button) */}
        <div className='bg-gray-400 w-1/2 flex items-end justify-end'>
          <input
            type='button'
            className='bg-pink-300 w-32 h-10'
            value='등록'
            onClick={handleSubmit} // 등록 버튼 클릭 시 handleSubmit 호출
          />
        </div>
      </div>
    </div>
  );
};

export default ProductWritingHome;
