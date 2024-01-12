// customerMain.tsx 는 홈페이지의 메인 컴포넌트 입니다.
// 주의사항 : 이 컴포넌트는 DB에 따라 자동으로 카드가 생성되어야 합니다. 컴포넌트 생성 로직을 작성해야 합니다. 그리고 root 컴포넌트 혹은 부모에 절대 값이 포함된 스타일링이 필요합니다. 
// 예시) root div에 w-screen, h-screen 등이 필요합니다.
'use client'
import React, { useEffect } from "react"; 
import Card from "./HomeCard/Card"; //상품 정보
import HomeCategoryNav from './HomeCategoryNav/HomeCategoryNav'; //상품 카테고리
import { useState } from "react";
import Link from "next/link";

interface Product {
  prodImgUrl: string;
  prodName: string;
  prodDescription: string;
  prodPrice: number;
}

interface HomeProps {
  categorylist: string[];
  productwhole: Product[];
}

export default function CustomerMain(){
  const [productwhole, setProductWhole] = useState([])
  const [categorylist, setCategoryList] = useState<string[]>([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:3560/');  // 서버 주소에 맞게 변경해주세요
        const data = await response.json();
        console.log(data)
        const extractedData = data.map(list => ({
          prodCategory : list.prodCategory,
          prodImgUrl: list.prodImgUrl,
          prodName: list.prodName,
          prodDescription: list.prodDescription,
          prodPrice: list.prodPrice,
          prodIndex : list.prodIndex
        }));
        const uniqueCategories: string[] = Array.from(new Set(extractedData.map(item => item.prodCategory)));
        setCategoryList(uniqueCategories);

        setProductWhole(extractedData)
      } catch (error) {
        console.error('데이터를 불러오는 동안 에러 발생:', error);
      }
    };

    fetchProduct();
  }, []);


  return (
    // 병합 후 크기에 대한 스타일링 필요.
    <main className="flex overflow-hidden outline flex-wrap justify-center w-4/5 h-4/5 gap-6">
      <HomeCategoryNav categories={categorylist} />
      {productwhole.map((list, index) => (
      <Link href={`/product/${list.prodIndex}`} key={index}>
        <Card
        // prodImgUrl={list.prodImgUrl}
        prodName={list.prodName}
        prodDescription={list.prodDescription}
        prodPrice={list.prodPrice}
        />
        </Link>
      ))}
    </main>
  );
};
