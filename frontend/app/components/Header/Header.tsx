import React from 'react';
import Link from 'next/link';
import { ChildrenProp } from '@/interfaces/ChildrenProp';

export default function Header({ children }: ChildrenProp) {
  return (
    <header className='flex bg-blue-500 text-white p-4 justify-between'>
      <Link href='/'>
        <h1 className='text-xl'>form 미쳤다.</h1>
      </Link>
      <ul className='flex ml-auto'>{children}</ul>
    </header>
  );
}
