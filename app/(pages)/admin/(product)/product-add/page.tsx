// 상품 등록 페이지

import React from 'react';

export default function ProductAddPage() {
  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='flex mb-6'>
          {/* 상품 이미지 입력 부분 */}
          <div className='px-3 mb-6'>
            <label className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'>
              상품 이미지
            </label>
            <input
              className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
              type='file'
            />
          </div>
          {/* 상품 이름 입력 필드 */}
          <div className='px-3'>
            <label className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'>
              상품 이름
            </label>
            <input
              className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
              type='text'
              placeholder='예: 고급스러운 한정판 스니커즈'
            />
          </div>
          {/* 상품 가격 입력 필드 */}
          <div className='px-3'>
            <label className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'>
              가격
            </label>
            <input
              className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
              type='number'
              placeholder='5000'
            />
          </div>
        </div>
        {/* 상품 설명 입력 부분 */}
        <div className='flex mb-6'>
          <div className='px-3'>
            <label className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'>
              상품 설명
            </label>
            <textarea
              className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3'
              placeholder='상품에 대한 설명을 자세히 입력해주세요.'
            ></textarea>
          </div>
        </div>
        {/* 상품 등록 버튼 */}
        <div className='flex justify-end mt-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            상품 등록
          </button>
        </div>
      </div>
    </div>
  );
}
