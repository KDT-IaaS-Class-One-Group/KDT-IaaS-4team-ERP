import React from "react";
import { ProductDetail } from "./types";

type ProductDetailProps = {
  productdetail: ProductDetail;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ productdetail }) => {
  return (
    <div className="product-detail">
      <div>이미지 자리</div>
      {/* <img src={productdetail.Img} alt={productdetail.Img} /> */}

      <div>
        <p>상품 제목: </p>
        {/* {productdetail.Title} */}
        <p>가격: </p>
        {/* {productdetail.Price} */}
        <p>상품 간략설명: </p>
        {/* {productdetail.Summary} */}   
        <div>수량 올라가는 기능넣는 컴포넌트 자리</div>
        <button>구매</button>     
        <button>장바구니</button>     
        <button>상품평</button>     
      </div>

      <div>
        상품 설명란
        (오버되는 내용 스크롤)
        {/* {productdetail.Detail} */}
      </div>

    </div>
  );
};

export default ProductDetail;
