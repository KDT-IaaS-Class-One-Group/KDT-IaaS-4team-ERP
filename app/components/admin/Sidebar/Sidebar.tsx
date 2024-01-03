import React from 'react';

interface SidebarProps {
  onMenuSelect: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuSelect }) => {
  return (
    <div className='h-full min-h-screen w-64 bg-gray-800 text-white'>
      <nav className='p-4'>
        <h1 className='text-xl font-bold mb-4'>My Dashboard</h1>
        <ul>
          <li className='mb-2'>
            <button
              onClick={() => onMenuSelect('home')}
              className='w-full text-left p-2 hover:bg-gray-700 rounded'
            >
              홈
            </button>
          </li>
          <li className='mb-2'>
            <p className='text-2xl block p-2 font-bold'>상품</p>
            <ul className='pl-4'>
              <li>
                <Link
                  href='/admin/products'
                  className='block p-2 hover:bg-gray-700 rounded'
                >
                  조회
                </Link>
              </li>
              <li>
                <Link
                  href='/products/register'
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
};
