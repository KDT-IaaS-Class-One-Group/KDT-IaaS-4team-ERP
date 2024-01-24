'use client';

import ProductDetail from '@/app/components/Product/productdetail';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { productdetail } = useParams();
  const [productdata, setproductdata] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3560/product/${productdetail}`,
        );
        const data = await response.json();
        // console.log("Received product data:", data); // Add console log to check received data
        setproductdata(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [productdetail]);

  return (
    <>
      <ProductDetail productdetails={productdata} />
    </>
  );
}
