import React from "react"; 
import Card from "../Card/Card";

export default function CustomerMain(){
  return (
    <main className="flex overflow-hidden outline flex-wrap w-full gap-6">
        {/* 이곳에 DB에 따라 관련 카드가 자동으로 생성되는 로직이 들어갑니다. 조건 : 최대 6개*/}
        <Card pUrl="" pTitle="프로덕트 타이틀" pSub="대충 설명입니당" pPrice={1000}/>
        <Card pUrl="" pTitle="" pSub="" pPrice={10000}/>
    </main>
  );
}
