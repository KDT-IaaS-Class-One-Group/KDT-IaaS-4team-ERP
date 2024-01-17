// 현재 폴더 : components/cartComponents/CartList
// CartList.tsx는 장바구니 목록 컴포넌트입니다.

import Link from "next/link";
import React from "react";
import Btn from "@/components/Btn/Btn";
import Image from "next/image";
import { PList } from "@/interfaces/interfaces";

/**
 * 장바구니 목록 컴포넌트입니다.
 * @param pIndex - 상품 인덱스 : number
 * @param pUrl - 상품 이미지 URL : string
 * @param pSub - 상품 제목 : string
 * @param pPrice - 상품 가격 : number
 * @param pCount - 상품 수량 : number
 * @param className - 추가적인 CSS 클래스 이름 : string
 * @returns 장바구니 목록 리스트 컴포넌트를 생성하는 생성 컴포넌트입니다.
 */
const CartList: React.FC<PList> = ({
  pIndex,
  pUrl,
  pSub,
  pPrice,
  pCount,
  className,
}) => {
  const combinedClassName = `w-full flex justify-between items-center border-2 border-slate-800 p-4 ${className}`;
  const linkHref = `/product/${pIndex}`;
  return (
    <li className={combinedClassName}>
      <Link href={linkHref} className="flex justify-between items-center gap-4">
        <Image
          src={`${pUrl}`}
          alt="이미지가 들어갈 자리입니다."
          width={70}
          height={70}
        />
        <p className="text-xs">{pSub}</p>
      </Link>
      <div className="flex gap-3 w-2/3">
        <div className="flex-1 flex justify-center items-center">
          {pPrice}원
        </div>
        <div className="flex-1 flex justify-center items-center">{pCount}</div>
        <Btn
          textContent="리스트 삭제"
          className="h-10 w-28 border border-slate-950 flex justify-center items-center flex-1 text-sm"
        />
      </div>
    </li>
  );
};

export default CartList;
