// 메인페이지에서 클릭한 상품의 데이터를 조회해 상품에 대한 정보를 띄워주는 컴포넌트 
// 추후 필요한 작업: 메인페에지에서 클릭한 상품의 데이터를 속성값으로 넣어주고
// 구매버튼에는 구매페이지로 페이지이동하면서 여기서 선택한 수량 및 주문일자와 같은 데이터를 데이터베이스로 보내주는 기능을 추가해야함?
// 장바구니, 상품평도 페이지이동 및 데이터 관련한 기능들이 추가로 필요함.

import ProductPriceCalculator from './pricecalculator'

import React from "react";
import styles from "./style/productdetail.module.css";
import { ProductDetail } from "./types";

type ProductDetailProps = {
  productdetail: ProductDetail;
};

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
            {/* 링크로 바꿔야되나? */}
            <button className="bg-red-300">구매</button>
            <button className="bg-red-300">장바구니</button>
            <button className="bg-red-300">상품평</button>
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
