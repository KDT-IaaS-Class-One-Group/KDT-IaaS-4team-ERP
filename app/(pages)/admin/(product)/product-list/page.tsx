'use client';
import React, { useState, useEffect } from 'react';
import { ProductIdProps } from '@/interfaces/Product/ProductIdProps';
import { ProductNameProps } from '@/interfaces/Product/ProductNameProps';
import { ProductPriceProps } from '@/interfaces/Product/ProductPriceProps';
import { ProductImageLinkProps } from '@/interfaces/Product/ProductImageLinkProps';
import { ProductStockProps } from '@/interfaces/Product/ProductStockProps';
import products from '@/databases/products.json';

export interface ProductListProps
  extends ProductIdProps,
    ProductNameProps,
    ProductPriceProps,
    ProductImageLinkProps,
    ProductStockProps {}

export default function ProductListPage() {
  // 상품 데이터 상태를 선언합니다.
  const [products, setProducts] = useState<ProductListProps[]>([]);

  // 컴포넌트가 마운트될 때 상품 데이터를 불러오는 효과를 사용합니다.
  useEffect(() => {
    // product.json 파일을 불러오는 함수
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); // 'public' 폴더 내의 파일 경로
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data); // 상품 데이터를 상태에 설정합니다.
      } catch (error) {
        console.error('There was a problem fetching the product data:', error);
      }
    };

    fetchProducts();
  }, []);

  // 상품 삭제 함수
  const handleDelete = (productId: number): void => {
    console.log('Deleting product with id:', productId);
    // 삭제 로직 구현
  };

  // 상품 수정 함수
  const handleEdit = (productId: number): void => {
    console.log('Editing product with id:', productId);
    // 수정 로직 구현
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-xl font-semibold mb-6'>상품 목록</h1>
        <div className='max-h-[500px] overflow-y-auto'>
          {products.length > 0 ? (
            products.map((product) => (
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
                  <span className='text-gray-700 font-medium'>
                    {product.name}
                  </span>
                  <span className='text-gray-500 ml-2'>{product.price}</span>
                  <span className='text-gray-500 ml-2'>
                    재고: {product.stock}
                  </span>
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
            ))
          ) : (
            <p>상품 데이터를 불러오는 중입니다...</p>
          )}
        </div>
      </div>
    </div>
  );
}
