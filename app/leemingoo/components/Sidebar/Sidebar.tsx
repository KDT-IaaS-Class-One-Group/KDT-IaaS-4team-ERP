// 사이드바

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
              href='/leemingoo'
              className='block p-2 hover:bg-gray-700 rounded border-2 text-3xl'
            >
              <IoMdHome />
            </Link>
          </li>
          <MenuItem title='상품 관리'>
            <MenuLink href='/leemingoo/product-list'>상품 조회</MenuLink>
            <MenuLink href='/leemingoo/product-add'>상품 등록</MenuLink>
          </MenuItem>
          <MenuItem title='판매 관리'>
            <MenuLink href='/leemingoo/order-manage'>주문 관리</MenuLink>
            <MenuLink href='/leemingoo/delivery-manage'>배송 관리</MenuLink>
          </MenuItem>
          <MenuItem title='매출 관리'>
            <MenuLink href='/leemingoo/revenue-view'>매출 통계 </MenuLink>
          </MenuItem>
          <MenuItem title='상품평 관리'>
            <MenuLink href='/leemingoo/review-manage'>상품평 관리</MenuLink>
          </MenuItem>
        </ul>
      </nav>
    </div>
  );
}
