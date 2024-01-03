// customerMain.tsx 는 홈페이지의 메인 컴포넌트 입니다.
// 주의사항 : 이 컴포넌트는 DB에 따라 자동으로 카드가 생성되어야 합니다. 컴포넌트 생성 로직을 작성해야 합니다. 그리고 root 컴포넌트 혹은 부모에 절대 값이 포함된 스타일링이 필요합니다. 
// 예시) root div에 w-screen, h-screen 등이 필요합니다.

import React from "react"; 
import Card from "./HomeCard/Card";
import HomeCategoryNav from './HomeCategoryNav/HomeCategoryNav';

export default function CustomerMain(){
  return (
    // 병합 후 크기에 대한 스타일링 필요.
    <main className="flex overflow-hidden outline flex-wrap justify-center max-w-5xl h-3/5 gap-6">
      <HomeCategoryNav />
      {/* 이곳에 DB에 따라 관련 카드가 자동으로 생성되는 로직이 들어갑니다. 조건 : 최대 6개, db를 조회할 예정*/}
      <Card pUrl='' pTitle='상품명' pSub='상품설명' pPrice={1000}/>
      <Card pUrl='' pTitle='상품명' pSub='상품설명' pPrice={1000}/>
      <Card pUrl='' pTitle='상품명' pSub='상품설명' pPrice={1000}/>
      <Card pUrl='' pTitle='상품명' pSub='상품설명' pPrice={1000}/>
      <Card pUrl='' pTitle='상품명' pSub='상품설명' pPrice={1000}/>
      <Card pUrl='' pTitle='상품명' pSub='상품설명' pPrice={1000}/>
    </main>
  );
} 
