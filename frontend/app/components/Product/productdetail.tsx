import ProductPriceCalculator from './pricecalculator'

import React from "react";
import styles from "./style/productdetail.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useParams } from 'next/navigation';


interface ProductDetailProps {
  Img: string;
  Title: string;
  Price: number;
  Summary: string;
  Count: number;
  Detail: string
  productdetails: any;
};



const ProductDetail: React.FC<ProductDetailProps> = ({ productdetails }) => {
  const productdetailsprodIndex = productdetails.prodIndex;
  const [paymentInfo, setPaymentInfo] = useState({
    quantity: 1,
    totalPrice: 0
    // 다른 필요한 결제 정보들을 추가할 수 있습니다.
  });



  return (
    <div className="product-detail w-full h-screen flex flex-col items-center ">
      <div className="w-4/5 h-2/5 flex justify-center">
        <div className='mt-10'>
          <Image src={`/images${productdetails.prodImgUrl}`}
            width={300}
            height={300} alt='제품 사진 ' />
        </div>

        <div className="ml-20 mt-10 font-sans text-2xl">
          <p>{`상품제목 : ${productdetails.prodName}`}</p>
          <p>{`상품가격 : ${productdetails.prodPrice}`}</p>
          <p>{`상품설명 : ${productdetails.prodDescription}`}</p>
          <ProductPriceCalculator productdetails={productdetails} setPaymentInfo={setPaymentInfo} />

          <div className="flex justify-around mt-10">
            <Link href={{
              pathname: `/product/${productdetailsprodIndex}/payment`, query: {
                quantity: paymentInfo.quantity,
                totalPrice: paymentInfo.totalPrice,
                prodIndex: productdetails.prodIndex,
              }
            }}>
              <button className="bg-blue-400 w-28 h-16">구매</button>
            </Link>

            <Link href="/cart">
              <button className="bg-blue-400 w-28 h-16">장바구니</button>
            </Link>

            <Link href={{
              pathname: `/product/${productdetailsprodIndex}/reviews`, query: {
                prodIndex: productdetails.prodIndex,
              }
            }}>
              <button className="bg-blue-400 w-28 h-16">상품평</button>
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
