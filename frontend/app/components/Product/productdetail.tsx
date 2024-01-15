import ProductPriceCalculator from './pricecalculator'

import React from "react";
import styles from "./style/productdetail.module.css";
import { ProductDetail } from "./types";
import Link from 'next/link';
import Image from 'next/image';
import { ProductDescriptionProps } from '../../interfaces/Product/ProductDescriptionProps';
import { useState } from 'react';
import { useParams } from 'next/navigation';


type ProductDetailProps = {
  productdetails: ProductDetail;
};



const ProductDetail: React.FC<ProductDetailProps> = ({ productdetails }) => {
  console.log(productdetails)
  const productdetailsprodIndex = productdetails.prodIndex
  const [paymentInfo, setPaymentInfo] = useState({
    quantity: 1,
    totalPrice: 0,
    // 다른 필요한 결제 정보들을 추가할 수 있습니다.
  });




  return (
    <div className="product-detail w-full h-screen flex flex-col items-center">
      <div className="w-4/5 h-2/5 flex justify-around">
        <div>

          <Image src={`/images${productdetails.prodImgUrl}`}
            width={500}
            height={500} alt={productdetails.ImgUrl} />
        </div>

        <div className="mr-40 mb-20">
          <p>상품 제목: </p>
          {productdetails.prodName}
          <p>가격: </p>
          {productdetails.prodPrice}
          <p>상품 간략설명: </p>
          {productdetails.prodDescription}
          <ProductPriceCalculator productdetails={productdetails} setPaymentInfo={setPaymentInfo} />
          <div className="flex justify-around">
            {/* 링크로 바꿔야되나? */}

            <Link href={{
              pathname: `/product/${productdetailsprodIndex}/payment`, query: {
                quantity: paymentInfo.quantity,
                totalPrice: paymentInfo.totalPrice,
                prodIndex: productdetails.prodIndex,
              }
            }}>

              <button className="bg-red-300">구매</button>
            </Link>

            <Link href="/cart">
              <button className="bg-red-300">장바구니</button>
            </Link>

            <Link href={{
              pathname: `/product/${productdetailsprodIndex}/reviews`, query: {
                prodIndex: productdetails.prodIndex,
              }
            }}>
              <button className="bg-red-300">상품평</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-4/5 h-1/3 mt-10 flex justify-center items-center overflow-y-scroll">
        {productdetails.prodDescription}
        {productdetails.prodDescription}
        {productdetails.prodDescription}
        {productdetails.prodDescription}
        {productdetails.prodDescription}
        {productdetails.prodDescription}
        {productdetails.prodDescription}
        {productdetails.prodDescription}
      </div>
    </div>
  );
};

export default ProductDetail;
