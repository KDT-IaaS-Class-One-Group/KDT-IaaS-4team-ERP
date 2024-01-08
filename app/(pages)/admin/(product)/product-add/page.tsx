// 상품 등록 페이지

'use client';
import React, { useState } from 'react';

// 상품 등록을 위한 인터페이스
interface IProductForm {
  name: string;
  description: string;
  price: string;
  stock: string;
  image: File | null;
}

export default function ProductAdd() {
  const [productForm, setProductForm] = useState<IProductForm>({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: null,
  });

  // 입력 필드의 변경을 처리하는 함수
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, files } = event.target;
    setProductForm((prevForm) => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };

  // 폼 제출을 처리하는 함수
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 여기에 상품 추가를 위한 API 호출 등의 로직을 구현할 수 있습니다.
    console.log('Product form data:', productForm);
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-xl font-semibold mb-6'>상품 등록</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              상품명
            </label>
            <input
              type='text'
              name='name'
              required
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              상품설명
            </label>
            <textarea
              name='description'
              required
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
            ></textarea>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              가격
            </label>
            <input
              type='text'
              name='price'
              required
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              재고
            </label>
            <input
              type='text'
              name='stock'
              required
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              이미지 업로드
            </label>
            <input
              type='file'
              name='image'
              onChange={handleChange}
              className='shadow appearance-none border rounded py-2 px-3 text-gray-700'
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              상품 등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
