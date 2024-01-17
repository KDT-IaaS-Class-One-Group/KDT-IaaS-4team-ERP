// 현재 폴더 : components/cartComponents/CartList
// CartList.tsx는 장바구니 목록 컴포넌트입니다.
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Btn from "@/components/Btn/Btn";
import Image from "next/image";
import { PList } from "@/interfaces/interfaces";
import handleDelete from "app/utils/custom/handleDelete";

/**
 * 장바구니 목록 컴포넌트
 * @param prodIndex - 상품 인덱스
 * @param prodImgUrl - 상품 이미지 URL
 * @param prodDescription - 상품 설명
 * @param prodPrice - 상품 가격
 * @param cartIndex - 장바구니 인덱스
 * @param cartProductCount - 장바구니 상품 수량
 * @param className - 컴포넌트 클래스 이름
 */
const CartList: React.FC<PList> = ({
  prodIndex,
  prodImgUrl,
  prodDescription,
  prodPrice,
  cartIndex,
  cartProductCount,
  className,
}) => {
  const combinedClassName = `w-full flex justify-between items-center border-2 border-slate-800 p-4 ${className}`;
  const linkHref = `/product/${prodIndex}`;
  const idToString = cartIndex.toString();

  const [quantity, setQuantity] = useState(cartProductCount);

  const handleIncrease = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li className={combinedClassName}>
      <Link
        href={linkHref}
        className="flex justify-between items-center gap-4 cursor-pointer"
      >
        <Image
          src={`${prodImgUrl}`}
          alt="이미지가 들어갈 자리입니다."
          width={70}
          height={70}
        />
        <p className="text-xs">{prodDescription}</p>
      </Link>
      <div className="flex gap-3 w-2/3">
        <div className="flex-1 flex justify-center items-center">
          {prodPrice}원
        </div>
        <div className="ctpButton flex justify-center items-center gap-2">
          <span className="cartProductCount text-xl font-medium">
            {quantity}
          </span>
          <div className="flex flex-col justify-center items-center gap-0 w-7">
            <button
              type="button"
              className="w-full flex justify-center items-center text-center"
              onClick={handleDecrease}
            >
              -
            </button>
            <button
              type="button"
              className="w-full flex justify-center items-center text-center"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          {/* 버튼 세로 묶음 */}
        </div>
        {/* 버튼 컴포넌트 */}
        <Btn
          textContent="리스트 삭제"
          className="h-10 w-28 border border-slate-950 flex justify-center items-center flex-1 text-sm"
          onClick={() => handleDelete(idToString)}
        />
      </div>
    </li>
  );
};

export default CartList;
