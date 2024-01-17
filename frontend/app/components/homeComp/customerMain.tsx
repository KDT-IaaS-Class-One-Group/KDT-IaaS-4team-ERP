// customerMain.tsx 는 홈페이지의 메인 컴포넌트 입니다.
// 주의사항 : 이 컴포넌트는 DB에 따라 자동으로 카드가 생성되어야 합니다. 컴포넌트 생성 로직을 작성해야 합니다. 그리고 root 컴포넌트 혹은 부모에 절대 값이 포함된 스타일링이 필요합니다. 
// 예시) root div에 w-screen, h-screen 등이 필요합니다.
// CustomerMain 컴포넌트
'use client'
import React, { useEffect, useState } from "react";
import Card from "./HomeCard/Card";
import HomeCategoryNav from './HomeCategoryNav/HomeCategoryNav';
import Link from "next/link";

interface Product {
  prodImgUrl: string;
  prodName: string;
  prodDescription: string;
  prodPrice: number;
  prodCategory: string;
  prodIndex: number;
}

interface HomeProps {
  categorylist: string[];
  productwhole: Product[];
  value : string;
}

export default function CustomerMain() {
  const [productwhole, setProductWhole] = useState<Product[]>([]);
  const [categorylist, setCategoryList] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:3560/');
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('데이터 형식 오류: 배열이 아닙니다.');
        }

        const extractedData: Product[] = data.map((list: any) => ({
          prodCategory: list.prodCategory,
          prodImgUrl: list.prodImgUrl,
          prodName: list.prodName,
          prodDescription: list.prodDescription,
          prodPrice: list.prodPrice,
          prodIndex: list.prodIndex
        }));

        const uniqueCategories: string[] = Array.from(new Set(extractedData.map(item => item.prodCategory)));
        setCategoryList(uniqueCategories);
        setProductWhole(extractedData);
      } catch (error) {
        console.error('데이터를 불러오는 동안 에러 발생:', error);
      }
    };

    fetchProduct();
  }, []);

  const filteredProducts = selectedCategory
    ? productwhole.filter(product => product.prodCategory === selectedCategory)
    : productwhole;

  return (
    <>
    <div className="h-1/6 overflow-x-hidden">
      <HomeCategoryNav categories={categorylist} onSelectCategory={setSelectedCategory} />
    </div>
      <main className="flex overflow-y-scroll  flex-wrap justify-center w-4/5 h-5/6 gap-6 ">
        {filteredProducts.map((list, index) => (
          <Link href={`/product/${list.prodIndex}`} key={index}>
            <Card
              prodImgUrl={list.prodImgUrl}
              prodName={list.prodName}
              prodDescription={list.prodDescription}
              prodPrice={list.prodPrice}
            />
          </Link>
        ))}
      </main>
    </>
  );
}
