'use client';
import React, { useState, useEffect } from 'react';
import { ProductIndexProp } from '@/app/types/Product/ProductIndexProp';
import { ProductNameProp } from '@/app/types/Product/ProductNameProp';
import { ProductPriceProp } from '@/app/types/Product/ProductPriceProp';
import { ProductCategoryProp } from '@/app/types/Product/ProductCategoryProp';
import { ProductStockProp } from '@/app/types/Product/ProductStockProp';
import { ProductDescriptionProp } from '@/app/types/Product/ProductDescriptionProp';
import { ProductImageUrlProp } from '@/app/types/Product/ProductImageUrlProp';

interface ProductListProps
  extends ProductIndexProp,
    ProductNameProp,
    ProductDescriptionProp,
    ProductPriceProp,
    ProductCategoryProp,
    ProductImageUrlProp,
    ProductStockProp {}

// 상품 목록을 가져오는 함수 (API 호출)
const fetchProducts = async (): Promise<ProductListProps[]> => {
  try {
    const response = await fetch('http://localhost:3560/api/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default function ProductListPage() {
  const [products, setProducts] = useState<ProductListProps[]>([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchAndSetProducts();
  }, []);

  const deleteProduct = async (prodIndex: number) => {
    try {
      const response = await fetch(
        `http://localhost:3560/api/products/${prodIndex}`,
        {
          method: 'DELETE',
        },
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // 상품 목록에서 삭제된 상품 제거
      setProducts(
        products.filter((product) => product.prodIndex !== prodIndex),
      );
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='container min-h-full mx-auto p-4 overflow-auto'>
      {products.map((product) => (
        <div
          key={product.prodIndex}
          className='flex items-center justify-between bg-white p-4 mb-2 rounded shadow'
        >
          <div className='flex items-center'>
            <img
              src={product.prodImgUrl}
              alt={product.prodName}
              className='w-20 h-20 object-cover mr-4'
            />
            <div>
              <h3 className='text-lg font-bold'>{product.prodName}</h3>
              <p>{product.prodDescription}</p>
              <p>가격: {product.prodPrice}원</p>
              <p>재고: {product.prodStock}</p>
              <p>카테고리: {product.prodCategory}</p> {/* 카테고리 표시 */}
            </div>
          </div>
          <div>
            <button className='bg-blue-500 text-white px-3 py-1 rounded mr-2'>
              수정
            </button>
            <button
              className='bg-red-500 text-white px-3 py-1 rounded'
              onClick={() => deleteProduct(product.prodIndex)}
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
