
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';

export default function Sidebar() {
  return (
    <div className='h-full w-64 bg-gray-800 text-white'>
      <nav className='p-4'>
        <ul>
          <li>
            <Link
              href='/admin'
              className='block p-2 hover:bg-gray-700 rounded border-2 text-3xl'
            >
              <IoMdHome />
            </Link>
          </li>
          <li className='mb-2'>
            <p className='text-2xl block p-2 font-bold'>상품</p>
            <ul className='pl-4'>
              <li>
                <Link
                  href='/admin/product-list'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  조회
                </Link>
              </li>
              <li>
                <Link
                  href='/admin/products/register'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  등록
                </Link>
              </li>
            </ul>
          </li>
          <li className='mb-2'>
            <p className='text-2xl block p-2 font-bold'>판매</p>
            <ul className='pl-4'>
              <li>
                <Link
                  href='/sales/order'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  주문
                </Link>
              </li>
              <li>
                <Link
                  href='/sales/shipping'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  배송
                </Link>
              </li>
            </ul>
          </li>
          <li className='mb-2'>
            <p className='text-2xl block p-2 font-bold'>매출</p>
            <ul className='pl-4'>
              <li>
                <Link
                  href='/revenue/statistics'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  통계
                </Link>
              </li>
            </ul>
          </li>
          <li className='mb-2'>
            <p className='text-2xl block p-2 font-bold'>고객</p>
            <ul className='pl-4'>
              <li>
                <Link
                  href='/customers/reviews'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  상품평 목록
                </Link>
              </li>
              <li>
                <Link
                  href='/customers/review-details'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  상품평 상세
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
