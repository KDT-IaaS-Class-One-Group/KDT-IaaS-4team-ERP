import Link from 'next/link';
import React from 'react';

export function MenuLink({ href, children }) {
  return (
    <li>
      <Link href={href} className='block p-2 hover:bg-gray-700 rounded'>
        {children}
      </Link>
    </li>
  );
}
