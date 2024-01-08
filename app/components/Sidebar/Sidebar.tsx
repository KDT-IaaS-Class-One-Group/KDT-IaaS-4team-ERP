import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { MenuItem } from './MenuItem';
import MenuLink from './MenuLink';

export default function Sidebar() {
  return (
    <div className='h-full w-64 bg-blue-700 text-white'>
      <nav className='p-4'>
        <ul>
          <li className='flex pb-10 items-center'>
            <Link
              href='/admin'
              className='flex p-2 hover:bg-gray-700 rounded border-2 text-3xl items-center '
            >
              <IoMdHome />
            </Link>
          </li>
          <MenuItem title='상품 관리'>
            <MenuLink href='/admin/product-list'>상품 조회</MenuLink>
            <MenuLink href='/admin/product-add'>상품 등록</MenuLink>
          </MenuItem>
          <MenuItem title='판매 관리'>
            <MenuLink href='/admin/order-manage'>주문 관리</MenuLink>
            <MenuLink href='/admin/delivery-manage'>배송 관리</MenuLink>
          </MenuItem>
          <MenuItem title='매출 관리'>
            <MenuLink href='/admin/revenue-view'>매출 통계 </MenuLink>
          </MenuItem>
          <MenuItem title='상품평 관리'>
            <MenuLink href='/admin/review-manage'>상품평 관리</MenuLink>
          </MenuItem>
        </ul>
      </nav>
    </div>
  );
}
