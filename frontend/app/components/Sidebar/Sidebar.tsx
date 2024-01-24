import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { MenuItem } from './MenuItem';
import MenuLink from './MenuLink';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      // 서버의 로그아웃 엔드포인트로 POST 요청을 보냅니다.
      const response = await fetch('http://localhost:3560/api/adminlogout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // 요청이 성공적으로 처리되면 로그인 페이지로 이동합니다.
      if (response.ok) {
        router.push('/admin/login');
      } else {
        throw new Error('로그아웃 실패');
      }
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };
  return (
    <div className='flex flex-col h-full w-64 border-r-2 border-wine'>
      <nav className='p-4 flex-grow'>
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
            <MenuLink href='/admin/product-list'>상품 관리</MenuLink>
          </MenuItem>
          <MenuItem title='판매 관리'>
            <MenuLink href='/admin/order-manage'>주문 관리</MenuLink>
          </MenuItem>
          <MenuItem title='매출 관리'>
            <MenuLink href='/admin/revenue-view'>매출 통계 </MenuLink>
          </MenuItem>
          <MenuItem title='상품평 관리'>
            <MenuLink href='/admin/review-manage'>상품평 관리</MenuLink>
          </MenuItem>
        </ul>
      </nav>
      <div className='p-4 border-t border-gray-600'>
        <ul>
          <li>
            <button
              onClick={handleLogout}
              className='block p-2 hover:bg-gray-700 rounded'
            >
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
