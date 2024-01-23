import React, { ClipboardEventHandler } from "react";
import { ReactNode } from "react";

interface LogoutProps {
  onClick: () => void;
}

export default function Logout({ onClick }: LogoutProps) {
  return (
    <li className="mr-4 cursor-pointer" onClick={onClick}>
      로그아웃
    </li>
  );
}
