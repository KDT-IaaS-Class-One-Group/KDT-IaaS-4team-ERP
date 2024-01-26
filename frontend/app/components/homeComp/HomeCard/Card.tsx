// card.tsx 는 홈페이지의 카드 컴포넌트 입니다.
// card.tsx 는 Image태그를 사용하였기 때문에 Image태그의 속성에 width={}과 height={}를 활용하여 이미지의 크기를 조절해야 합니다.

import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps {
  prodImgUrl: any;
  prodName: string;
  prodDescription: string;
  prodPrice: number;
}

/**
 *
 * @param prodImgUrl 상품 이미지 url : string
 * @param prodName 상품명 : string
 * @param prodDescription 상품 설명 : string
 * @param prodPrice 상품 가격 : number
 * @returns
 */
const Card: React.FC<CardProps> = ({
  prodImgUrl,
  prodName,
  prodDescription,
  prodPrice,
}) => {
  // console.log(prodImgUrl)
  return (
    <div className="flex flex-col justify-between items-center w-80 h-full border border-black p-4 gap-6 cursor-pointer">
      <Image
        src={`/images${prodImgUrl}`}
        alt="homepageCardImage"
        width={250}
        height={250}
        className=" outline-1 outline cursor-pointer h-2/3 w-2/3"
        priority
      />
      <div className="card-subArea w-full h-1/3 flex justify-between flex-col cursor-pointer">
        <div>
          <div className="w-1/3 border-b-2 border-slate-800 mb-1"></div>
          <h3 className="text-base font-bold mb-1 cursor-pointer">
            {prodName}
          </h3>
          <p className="text-xs cursor-pointer">{prodDescription}</p>
        </div>
        <p className="text-xs cursor-pointer mt-1">{prodPrice}원</p>
      </div>
    </div>
  );
};

export default Card;
