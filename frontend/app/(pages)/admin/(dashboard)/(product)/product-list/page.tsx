'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ProductIndexProp } from '@/types/Product/ProductIndexProp';
import { ProductNameProp } from '@/types/Product/ProductNameProp';
import { ProductPriceProp } from '@/types/Product/ProductPriceProp';
import { ProductCategoryProp } from '@/types/Product/ProductCategoryProp';
import { ProductStockProp } from '@/types/Product/ProductStockProp';
import { ProductDescriptionProp } from '@/types/Product/ProductDescriptionProp';
import { ProductImgUrlProp } from '@/types/Product/ProductImgUrlProp';

interface ProductListProps
  extends ProductIndexProp,
    ProductNameProp,
    ProductDescriptionProp,
    ProductPriceProp,
    ProductCategoryProp,
    ProductImgUrlProp,
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
  const router = useRouter(); // Next.js의 라우터 사용

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchAndSetProducts();
  }, []);

  const deleteProduct = async (prodIndex: number) => {
    if (window.confirm('해당 상품을 삭제하시겠습니까?')) {
      try {
        const response = await fetch(
          `http://localhost:3560/api/deleteproduct/${prodIndex}`,
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
        alert('상품이 성공적으로 삭제되었습니다.');
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('상품 삭제에 실패했습니다.');
      }
    }
  };

  const editProduct = (prodIndex: number) => {
    router.push(`/admin/product-edit/${prodIndex}`); // 상품 수정 페이지로 라우팅
  };

  const navigateToAddProductPage = () => {
    router.push('/admin/product-add');
  };

  return (
    <div className='flex container mx-auto p-4 items-center flex-col'>
      <div className='overflow-x-auto w-full'>
        <div className='max-h-[800px] overflow-y-auto'>
          <table className='min-w-full leading-normal'>
            <thead className='sticky top-0 bg-gray-100'>
              <tr>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  상품 번호
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  상품 이미지
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  상품명
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  설명
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  가격
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  재고
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  카테고리
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  작업
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.prodIndex}>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {product.prodIndex}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='flex-shrink-0 w-10 h-10'>
                      <img
                        className='w-full h-full rounded-full'
                        src={product.prodImgUrl}
                        alt={product.prodName}
                      />
                    </div>
                  </td>

                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {product.prodName}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {product.prodDescription}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {product.prodPrice}원
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {product.prodStock}개
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {product.prodCategory}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <button
                      onClick={() => editProduct(product.prodIndex)}
                      className='text-blue-500 hover:text-blue-800'
                    >
                      수정
                    </button>
                    <button
                      onClick={() => deleteProduct(product.prodIndex)}
                      className='text-red-500 hover:text-red-800 ml-4'
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={navigateToAddProductPage}
        className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end'
      >
        상품 등록
      </button>
    </div>
  );
}
