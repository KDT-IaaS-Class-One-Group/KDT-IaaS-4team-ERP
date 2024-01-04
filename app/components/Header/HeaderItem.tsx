import React from 'react';
import { ReactNode } from 'react';
interface HeaderMenuProps {
  children: ReactNode;
}

export default function HeaderItems({ children }: HeaderMenuProps) {
  return <li className='mr-4'>{children}</li>;
}
