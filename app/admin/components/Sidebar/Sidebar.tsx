import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { MenuItem } from './MenuItem';
import { MenuLink } from './MenuLink';

export default function Sidebar() {
  return (
    <div className='h-full w-64 bg-blue-700 text-white'>
      <nav className='p-4'>
        <ul>
          <li className='pb-10'>
            <Link
              href='/admin'
              className='block p-2 hover:bg-gray-700 rounded border-2 text-3xl'
            >
              <IoMdHome />
            </Link>
          </li>
          <MenuItem title='상품 관리'>
            <MenuLink href='/admin/product-list'>상품 조회</MenuLink>
            <MenuLink href='/admin/product-add'>상품 등록</MenuLink>
          </MenuItem>

          <MenuItem title='판매 관리'>
            <ul>
              <li>
                <Link
                  href='/admin/order-manage'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  주문 관리
                </Link>
              </li>
              <li>
                <Link
                  href='/admin/delivery-manage'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  배송 관리
                </Link>
              </li>
            </ul>
          </MenuItem>
          <MenuItem title='매출 관리'>
            <ul>
              <li>
                <Link
                  href='/admin/revenue-view'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  매출 통계
                </Link>
              </li>
            </ul>
          </MenuItem>
          <MenuItem title='상품평 관리'>
            <ul>
              <li>
                <Link
                  href='/admin/review-manage'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  상품평 관리
                </Link>
              </li>
            </ul>
          </MenuItem>
        </ul>
      </nav>
    </div>
  );
}
