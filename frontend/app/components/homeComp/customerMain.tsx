// customerMain.tsx 는 홈페이지의 메인 컴포넌트 입니다.
// 주의사항 : 이 컴포넌트는 DB에 따라 자동으로 카드가 생성되어야 합니다. 컴포넌트 생성 로직을 작성해야 합니다. 그리고 root 컴포넌트 혹은 부모에 절대 값이 포함된 스타일링이 필요합니다. 
// 예시) root div에 w-screen, h-screen 등이 필요합니다.

import React, { useEffect } from "react"; 
import Card from "./HomeCard/Card"; //상품 정보
import HomeCategoryNav from './HomeCategoryNav/HomeCategoryNav'; //상품 카테고리
import { useState } from "react";

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
  const [categorylist, setcategorylist] = useState([])
  const [productwhole, setProductWhole] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/');  // 서버 주소에 맞게 변경해주세요
        const data = await response.json();
        const prodCategory = data.prodCategory

        const extractedData = data.map(list => ({
          prodImgUrl: list.prodImgUrl,
          prodName: list.prodName,
          prodDescription: list.prodDescription,
          prodPrice: list.prodPrice,
        }));

        setcategorylist(prodCategory);
        setProductWhole(extractedData)
      } catch (error) {
        console.error('데이터를 불러오는 동안 에러 발생:', error);
      }
    };

    fetchReviews();
  }, []);


  return (
    // 병합 후 크기에 대한 스타일링 필요.
    <main className="flex overflow-hidden outline flex-wrap justify-center max-w-5xl h-3/5 gap-6">
      <HomeCategoryNav categories={categorylist} />
      {productwhole.map((list, index) => (
        <Card
          key={index}
          prodImgUrl={list.prodImgUrl}
          pTitle={list.prodName}
          pSub={list.prodDescription}
          pPrice={list.prodPrice}
        />
      ))}
    </main>
  );
};

export default Home;