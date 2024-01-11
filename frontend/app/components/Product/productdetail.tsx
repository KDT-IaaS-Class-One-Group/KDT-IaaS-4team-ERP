import ProductPriceCalculator from './pricecalculator'

import React from "react";
import styles from "./style/productdetail.module.css";
import { ProductDetailProps } from "../../interfaces/Product/ProductDetailProps";
import Link from 'next/link';

// 윤준현 : interface 정렬


const ProductDetail: React.FC<ProductDetailProps> = ({ productdetail }) => {
  return (
    <div className="product-detail w-full h-screen flex flex-col items-center">
      <div className="w-4/5 h-2/5 flex justify-around">
        <div className="w-1/2 h-full bg-slate-300 flex items-center justify-center ">
          이미지 자리
        </div>
        {/* <img src={productdetail.Img} alt={productdetail.Img} /> */}

        <div className="mr-40">
          <p>상품 제목: </p>
          {/* {productdetail.Title} */}
          <p>가격: </p>
          {/* {productdetail.Price} */}
          <p>상품 간략설명: </p>
          {/* {productdetail.Summary} */}
          <ProductPriceCalculator/>
          <div className="flex justify-around">
            {/* 링크로 바꿔야되나? */}1

            <Link href="/orderlist">
            <button className="bg-red-300">구매</button>
            </Link>

            <Link href="/cart"> 
            <button className="bg-red-300">장바구니</button>
            </Link>

            <Link href="/csitem"> 
            <button className="bg-red-300">상품평</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-4/5 h-1/3 mt-10 flex justify-center items-center overflow-y-scroll">
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        상품 설명란 (오버되는 내용 스크롤)<br></br>
        {/* {productdetail.Detail} */}
      </div>
    </div>
  );
};

export default ProductDetail;
