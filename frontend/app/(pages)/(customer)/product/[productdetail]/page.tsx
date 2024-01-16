'use client'
import ProductDetail from "@/components/Product/productdetail";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";

export default function ProductPage() {
  const {productdetail} = useParams();
  // console.log(useParams())
  const [productdata, setproductdata] =useState([])


  useEffect(()=> {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3560/product/${productdetail}`);
        console.log("productdetail",productdetail);
        const data = await response.json();
        console.log("data : ",data);
        setproductdata(data)
      } catch (error) {
        console.error("에러 발생 :", error);
      }
    }
  fetchProduct();
  },[productdetail])
    return (
      <>
        <ProductDetail productdetails={productdata} />
      </>
    );
  };


