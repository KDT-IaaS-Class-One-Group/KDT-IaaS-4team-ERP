'use client'
import ProductDetail from "@/components/Product/productdetail";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";

export default function ProductPage() {
  const [productdata, setproductdata] =useState([])
  const {productdetail} = useParams();

  useEffect(()=> {
    const fetchCommentsfull = async () => {
    try {
      const response = await fetch(`lo/product/${productdetail}`);
      const data = await response.json();
      console.log(data); // 확인용
      setproductdata(data)

  } catch (error) {
      console.error("에러 발생 :", error);
  }
}})

  return (
    <>
      <ProductDetail productdetail={productdata} />
    </>
  );
};


