// 상품 등록 페이지

'use client';
import React, { useState } from 'react';
import { ProductNameProps } from '@/interfaces/Product/ProductNameProps';
import { ProductDescriptionProps } from '@/interfaces/Product/ProductDescriptionProps';
import { ProductPriceProps } from '../../../../interfaces/Product/ProductPriceProps';
import { ProductStockProps } from '@/interfaces/Product/ProductStockProps';
import { ProductImageFileProps } from '@/interfaces/Product/ProductImageFileProps';

interface ProductProps
  extends ProductNameProps,
    ProductDescriptionProps,
    ProductPriceProps,
    ProductStockProps,
    ProductImageFileProps {}

export default function ProductAdd() {
  const [productForm, setProductForm] = useState<ProductProps>({
    name: '',
    description: '',
    price: '',
    stock: 0,
    imageFile: null,
  });

  // 입력 필드의 변경을 처리하는 함수
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement; // 타입 단언을 사용하여 HTMLInputElement로 처리
    const { name, value } = target;
    const files = target.files; // 이제 안전하게 접근 가능
  
    setProductForm((prevForm) => ({
      ...prevForm,
      [name]: files && files.length > 0 ? files[0] : value,
    }));
  };

  // 폼 제출을 처리하는 함수
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('name', productForm.name);
    formData.append('description', productForm.description);
    formData.append('price', productForm.price);
    formData.append('stock', productForm.stock.toString());
    if (productForm.imageFile) {
      formData.append('image', productForm.imageFile);
    }

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Product registered successfully');
        // 여기에 성공 시의 로직을 추가하세요
      } else {
        console.error('Failed to register the product');
        // 여기에 실패 시의 로직을 추가하세요
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
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
              rows={18}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 resize-none'
            ></textarea>
          </div>

          <div className='mb-4 flex justify-between items-center'>
            <div className='flex-grow mr-2'>
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

            <div className='flex-grow mr-2'>
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

            <div className='flex-grow'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                이미지 업로드
              </label>
              <input
                type='file'
                name='image'
                onChange={handleChange}
                className='shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full'
              />
            </div>
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
