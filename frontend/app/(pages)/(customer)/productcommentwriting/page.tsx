// [고객센터 질문 등록](글 쓰기) 컴포넌트
// 여기서 작성한 글은 이전 페이지(고객센터 페이지)에서 확인 할 수 있습니다.
'use client'

import { useState, useEffect } from 'react';
import ProductCommentList from '@/components/ProductCommentListWriting/ProductCommentList';
import ProductUploadButton from '@/components/ProductCommentListWriting/ProductUploadButton';
import Link from 'next/link';
import { useRouter } from 'next/router'; // useRouter 추가

const Productcomment = () => {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState({
    userId: '',
    reviewTitle: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginUser({
      ...loginUser,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3560/productcomment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: loginUser.userId,
          reviewTitle: loginUser.reviewTitle,
        }),
      });

      if (!response.ok) {
        throw new Error('글 쓰기 실패');
      }

      const data = await response.json();
      console.log(data);

      if (data.success) {
        router.push('/');
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
      <div className='bg-gray-400 w-4/5 h-50 mb-4'>
        <ProductCommentList
          title='ID'
          inputchange={(value: string) => handleInputChange('userId', value)}
        />
      </div>

      {/* Area2: 글 쓰기 내용 */}
      <div className='bg-gray-400 w-4/5 h-96 mb-4'>
        <ProductCommentList
          title='PASSWORD'
          inputchange={(value: string) => handleInputChange('reviewTitle', value)}
        />
      </div>

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
          <Link href='/cs' className='ml-auto'>
            <input
              type='button'
              className='bg-pink-300 w-32 h-10'
              value='등록'
              onClick={handleSubmit} // 등록 버튼 클릭 시 handleSubmit 호출
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productcomment;
