'use client';
import React from 'react';
import { ProductIdProps } from '@interfaces/Product/ProductIdProps';
import { ProductNameProps } from '@interfaces/Product/ProductNameProps';
import { ProductPriceProps } from '@interfaces/Product/ProductPriceProps';
import { ProductImageLinkProps } from '@interfaces/Product/ProductImageLinkProps';
import { ProductStockProps } from '@interfaces/Product/ProductStockProps';

export interface ProductListProps
  extends ProductIdProps,
    ProductNameProps,
    ProductPriceProps,
    ProductImageLinkProps,
    ProductStockProps {}

export default function ProductLisPage() {
  // 상품 데이터 배열
  const products: ProductListProps[] = [
    // 예시 데이터
    {
      id: 1,
      name: '상품 A',
      price: '10,000원',
      imageLink: '/path/to/image-a.jpg',
      stock: 20, // 재고 수량 예시
    },
    {
      id: 2,
      name: '상품 B',
      price: '20,000원',
      imageLink: '/path/to/image-b.jpg',
      stock: 15, // 재고 수량 예시
    },
    // ... 추가 상품 데이터
  ];

  // 상품 삭제 함수
  const handleDelete = (productId: number): void => {
    console.log('Deleting product with id:', productId);
    // 여기에 삭제 로직 구현
  };

  // 상품 수정 함수
  const handleEdit = (productId: number): void => {
    console.log('Editing product with id:', productId);
    // 여기에 수정 페이지로 라우팅하는 로직 구현
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-xl font-semibold mb-6'>상품 목록</h1>
        <div className='max-h-[500px] overflow-y-auto'>
          {products.map((product) => (
            <div
              key={product.id}
              className='border-b border-gray-200 py-4 flex items-center justify-between'
            >
              <img
                src={product.imageLink}
                alt={product.name}
                className='h-16 w-16 object-cover mr-4'
              />
              <div>
                <span className='text-gray-500 ml-2'>{product.price}</span>
                <span className='text-gray-500 ml-2'>
                  재고: {product.stock}
                </span>{' '}
                {/* 재고 수량 표시 */}
              </div>
              <div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
