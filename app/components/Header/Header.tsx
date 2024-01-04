import React from 'react';
import Link from 'next/link';
import ChildrenProps from '@interfaces/ChildrenProps';

export default function Header({ children }: ChildrenProps) {
  return (
    <header className='flex bg-blue-500 text-white p-4 justify-between'>
      <Link href='/'>
        <h1 className='text-xl'>form 미쳤다.</h1>
      </Link>
      <ul className='flex ml-auto'>{children}</ul>
    </header>
  );
}
