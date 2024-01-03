'use client';
import React from 'react';
import Image from 'next/link';

export default function ProductList() {
  // 임시 데이터
  const products = [
    {
      id: 1,
      name: '상품 A',
      price: '10,000원',
      imageUrl: '/path/to/image-a.jpg',
    },
    {
      id: 2,
      name: '상품 B',
      price: '20,000원',
      imageUrl: '/path/to/image-b.jpg',
    },
    // ... 추가 상품 데이터
  ];

  // 상품 삭제 함수
  const handleDelete = (productId) => {
    // 여기에 삭제 로직을 구현합니다.
    console.log('Deleting product with id:', productId);
  };

  // 상품 수정 페이지로 이동
  const handleEdit = (productId) => {
    // 여기에 수정 페이지로 라우팅하는 로직을 구현합니다.
    console.log('Editing product with id:', productId);
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-6'>
          <h1 className='text-xl font-semibold'>상품 목록</h1>
        </div>
        <div className='mb-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='border-b border-gray-200 py-4 flex items-center'
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className='h-16 w-16 object-cover mr-4'
              />
              <span className='text-gray-700'>{product.name}</span>
              <span className='text-gray-500 ml-auto'>{product.price}</span>
              <button
                onClick={() => handleEdit(product.id)}
                className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 mx-1 rounded'
              >
                수정
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 mx-1 rounded'
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
