// 메뉴 링크 컴포넌트 분리 (소분류)

import Link from "next/link";
import React from "react";

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function MenuLink({ href, children }: MenuLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="block p-2 hover:bg-gray-700 rounded cursor-pointer"
      >
        {children}
      </Link>
    </li>
  );
}
