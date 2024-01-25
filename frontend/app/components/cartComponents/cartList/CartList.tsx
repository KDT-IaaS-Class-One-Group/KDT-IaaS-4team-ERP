// 현재 폴더 : components/cartComponents/CartList
// CartList.tsx는 장바구니 목록 컴포넌트입니다.
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Btn from "@/app/components/Btn/Btn";
import Image from "next/image";
// import { PList } from "@/app/interfaces/interfaces";
import handleDelete from "app/utils/custom/handleDelete";
import { PList } from "@/app/types/interfaces";

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
const CartList: React.FC<
  PList & { onQuantityChange: (quantity: number) => void }
> = ({
  prodIndex,
  prodImgUrl,
  prodDescription,
  prodPrice,
  cartIndex,
  cartProductCount,
  className,
  onQuantityChange,
}) => {
  const combinedClassName = `w-full flex justify-between items-center border-2 border-slate-800 p-4 ${className}`;
  const linkHref = `/product/${prodIndex}`;
  const idToString = cartIndex.toString(); // cartIndex를 문자열로 변환
  // console.log("idToString", idToString);

  const [quantity, setQuantity] = useState(cartProductCount);

  const handleIncrease = () => {
    if (quantity < 50) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  // 모듈화 할 때, handleDelete 함수를 불러와야 함.
  const handleDeleteCart = (cartIndex: number): void => {
    // Create dynamic endpoint using cartIndex
    const endpoint = `http://localhost:3560/api/cartTable/${cartIndex}`;

    // 엔드포인트를 사용하여 삭제 작업 수행
    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("데이터: ", data);
        console.log("장바구니가 성공적으로 삭제되었습니다.");
        // 성공하면 cartIndex를 인계받아
        handleDelete(cartIndex);
      })
      .catch((error) => {
        console.error("장바구니 삭제 오류:", error);
      });
  };

  return (
    <li className={combinedClassName} id={idToString}>
      <Link
        href={linkHref}
        className="flex justify-between items-center gap-4 cursor-pointer"
      >
        <Image
          src={`/images${prodImgUrl}`}
          alt="이미지가 들어갈 자리입니다."
          width={70}
          height={70}
        />
      </Link>
      <p className="text-xs ml-5 mr-5 w-5/12">{prodDescription}</p>
      <div className="flex justify-between gap-3 w-6/12">
        <div className="flex justify-center items-center w-24 ml-24">
          {prodPrice * quantity}원
        </div>
        <div className="ctpButton flex justify-center items-center gap-2 ml-5">
          <span className="cartProductCount text-xl font-medium block">
            {prodPrice}원({quantity}개)
          </span>
          <div className="flex flex-col justify-center items-center gap-0 w-7">
            <button
              type="button"
              className="w-full flex justify-center items-center text-center"
              onClick={handleIncrease}
            >
              +
            </button>
            <button
              type="button"
              className="w-full flex justify-center items-center text-center"
              onClick={handleDecrease}
            >
              -
            </button>
          </div>
          {/* 버튼 세로 묶음 */}
        </div>
        
        {/* 버튼 컴포넌트 */}
        <Btn
          textContent="리스트 삭제"
          className="h-10 w-28 border border-slate-950 flex justify-center items-center marker:text-smr mr-20"
          onClick={() => {
            // * 코드가 순차적으로 실행되어야 함.
            handleDeleteCart(cartIndex);
          }}
        />
      </div>
    </li>
  );
};

export default CartList;
