import { ReactNode } from 'react';
interface HeaderMenuProps {
  children: ReactNode;
}

export default function HeaderMenu({ children }: HeaderMenuProps) {
  return <li className='mr-4'>{children}</li>;
}
