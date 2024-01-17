'use client'
import styles from "./style/productInformation.module.css";
import { productType } from "./types";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Productpaymentprops } from "@/interfaces/Product/ProductpaymentProps";


const ProductInformation: React.FC<Productpaymentprops> = ({ setpaymentcompleteinfo }) => {
  const [productinfo, setproductinfo] = useState([])
  const searchparams = useSearchParams()
  const quantity = searchparams.get('quantity')
  const totalPrice = searchparams.get('totalPrice')
  const prodIndex = searchparams.get('prodIndex')



  useEffect(() => {

    const prodinfo = async () => {
      try {
        const response = await fetch(`http://localhost:3560/product/${prodIndex}/payment`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setproductinfo(data[0]);

      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    prodinfo()
  }, [])


  return (
    <div className="flex justify-center items-center mt-5">
      <div className={`${styles.productInformation}`}>
        <div>
          <div className="bg-slate-300">상품 정보</div>
          <div className="bg-slate-300">주문 일자</div>
          <div className="bg-slate-300">주문갯수</div>
          <div className="bg-slate-300">결제금액</div>
        </div>
        <div>
          <div>
            <div className="bg-slate-500">사진임</div>
            {/* {productInfo.productImg} */}
            <div>{productinfo.prodName}</div>
            {/* {productInfo.productContent} */}
          </div>
          <div className="bg-red-400">오늘날짜</div>
          {/* {productInfo.orderDate} */}
          <div className="bg-red-400">{`${quantity}개`}</div>
          {/* {productInfo.orderPrice} */}
          <div className="bg-red-400">{`${totalPrice}원`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
