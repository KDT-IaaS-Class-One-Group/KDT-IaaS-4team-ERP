import React from "react"; 
import Card from "../Card/Card";
import HomeCategoryNav from './HomeCategoryNav/HomeCategoryNav';

export default function CustomerMain(){
  return (
    // 병합 후 크기에 대한 스타일링 필요.
    <main className="flex overflow-hidden outline flex-wrap justify-center w-full h-3/5 gap-6">
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
