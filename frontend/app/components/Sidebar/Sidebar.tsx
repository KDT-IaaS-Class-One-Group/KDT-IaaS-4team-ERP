import Link from "next/link";
import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MenuItem } from "./MenuItem";
import MenuLink from "./MenuLink";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    alert("로그아웃 완료");
    localStorage.removeItem("token");
    router.push("/admin/login");
  };
  return (
    <div className="flex flex-col h-full w-64 border-r-2 border-wine">
      <nav className="p-4 flex-grow">
        <ul>
          <li className="flex pb-10 items-center">
            <Link
              href="/admin"
              className="flex p-2 hover:bg-gray-700 rounded border-2 text-3xl items-center cursor-pointer"
            >
              <IoMdHome />
            </Link>
          </li>
          <MenuItem title="상품 관리">
            <MenuLink href="/admin/product-list">상품 관리</MenuLink>
          </MenuItem>
          <MenuItem title="판매 관리">
            <MenuLink href="/admin/order-manage">주문 관리</MenuLink>
          </MenuItem>
          <MenuItem title="매출 관리">
            <MenuLink href="/admin/revenue-view">매출 통계 </MenuLink>
          </MenuItem>
          <MenuItem title="상품평 관리">
            <MenuLink href="/admin/review-manage">상품평 관리</MenuLink>
          </MenuItem>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-600">
        <ul>
          <li>
            <button
              onClick={handleLogout}
              className="block p-2 hover:bg-gray-700 rounded cursor-pointer w-full text-left h-16"
            >
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
