'use client';
import { useState } from 'react';
import Sidebar from '../components/admin/Sidebar/Sidebar';

export default function Admin() {
  const [selectedMenu, setSelectedMenu] = useState<string>('home');

  const handleMenuSelect = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className='flex'>
      <Sidebar onMenuSelect={handleMenuSelect} />
      <main className='flex-1 p-4'>
        {selectedMenu === 'home' && <div>홈 컨텐츠</div>}
        {/* 다른 메뉴에 해당하는 컨텐츠도 조건부 렌더링 */}
      </main>
    </div>
  );
}
