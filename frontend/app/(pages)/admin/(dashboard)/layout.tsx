"use client";

import React from "react";
import { ChildrenProp } from "@/app/types/ChildrenProp";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: ChildrenProp) {
  const router = useRouter();

  useEffect(() => {
    // JWT 토큰 확인
    const token = localStorage.getItem("token");

    // 토큰이 없으면 로그인 페이지로 리디렉션
    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);
  return (
    <div className="flex h-full">
      <Sidebar></Sidebar>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
