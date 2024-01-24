import React from "react";
import Link from "next/link";
import { ReactNode } from "react";

interface HeaderItemProps {
  href: string;
  children: ReactNode;
}

export default function HeaderItem({ href, children }: HeaderItemProps) {
  return (
    <li className="mr-4 ">
      <Link className="cursor-pointer" href={href}>
        {children}
      </Link>
    </li>
  );
}
