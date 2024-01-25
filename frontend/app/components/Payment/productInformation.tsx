"use client";

import Image from "next/image";
import styles from "./style/productInformation.module.css";
import { productType } from "./types";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Productpaymentprops } from "@/app/interfaces/Product/ProductpaymentProps";

const ProductInformation: React.FC<Productpaymentprops> = ({
  setpaymentcompleteinfo,
}) => {
  const [productinfo, setproductinfo] = useState([]);
  const searchparams = useSearchParams();
  const quantity = searchparams.get("quantity");
  const totalPrice = searchparams.get("totalPrice");
  const prodIndex = searchparams.get("prodIndex");

  useEffect(() => {
    const prodinfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:3560/product/${prodIndex}/payment`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setproductinfo(data[0]);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    prodinfo();
  }, []);

  const currentDate = new Date();

  return (
    <div className="flex justify-center items-center mt-5 bg-gray-200 p-4 border-box">
      <div className="flex space-x-4">
        <div className="flex flex-col items-center bg-gray-400 p-4 rounded-lg">
          <Image
            alt=""
            src={`/images${productinfo.prodImgUrl}`}
            width={85}
            height={85}
          />
          <div className="mt-2 text-center">{productinfo.prodName}</div>
        </div>
        <div className="flex flex-col items-center bg-gray-400 p-4 rounded-lg">
          <div className="font-bold">주문 일자</div>
          <div className="text-center">{currentDate.toLocaleDateString()}</div>
        </div>
        <div className="flex flex-col items-center bg-gray-400 p-4 rounded-lg">
          <div className="font-bold">주문 갯수</div>
          <div className="text-center">{`${quantity}개`}</div>
        </div>
        <div className="flex flex-col items-center bg-gray-400 p-4 rounded-lg">
          <div className="font-bold">결제 금액</div>
          <div className="text-center">{`${totalPrice}원`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
