// [고객센터] 컴포넌트 구성
// 현재 예시 데이터로 임의의 데이터가 들어있습니다.
// 현재 고객센터 페이지에서는 고객이 등록한 글을 볼 수 있습니다.

import React from 'react';
import Link from 'next/link';
// import List from '@/components/writingcustomerComp/list';

export default function CustomerService() {
    // DB 테이블
    const dataForArea2 = [
        { 작성자: '피카츄', 날짜: '24년 01월 04일', 제목: '작동이 안되요' },
        { 작성자: '라이츄', 날짜: '2024-01-03', 제목: '다신 안산다 ㄹㅇ' },
        { 작성자: '파이리', 날짜: '2024-01-03', 제목: '다신 안산다 ' },
        { 작성자: '꼬부기', 날짜: '2024-01-03', 제목: '다신 안산다 ㄹㅇ' },
        { 작성자: '버터플', 날짜: '2024-01-03', 제목: '다신 안산다 ' },
        { 작성자: '야도란', 날짜: '2024-01-03', 제목: '다신 안산다 ㄹㅇ' },
        { 작성자: '피존투', 날짜: '2024-01-03', 제목: '다신 안산다 ' },
        { 작성자: '또가서', 날짜: '2024-01-03', 제목: '다신 안산다 ㄹㅇ' },



        // ... 기타 데이터
    ];

    Date.now()

    return (
        <div className='w-screen h-screen bg-black flex flex-col items-center relative'>
            <List list1={"작성자"} list2={"날짜"} list3={"질문 제목"} list4={"질문 등록하기"} />


            {/* 최 상단 목록 분류 */}
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-2xl">
                <div className="flex">
                    <div className="flex-1">작성자</div>
                    <div className="flex-1">날짜</div>
                    <div className="flex-3">질문 제목</div>
                </div>
            </div>


            {/* 목록이 표시 */}
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-2xl">
                <Link href='/csfull'>
                {dataForArea2.map((item, index) => (
                    <div key={index} className="flex items-center cursor-pointer hover:bg-gray-100 p-2">
                            <div className="flex-1">{item.작성자}</div>
                            <div className="flex-1">{item.날짜}</div>
                            <div className="flex-3">{item.제목}</div>
                    </div>
                ))}
                </Link>
            </div>
            <button
                className="absolute bottom-4 right-4 bg-pink-300 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full"
            >
                <Link href='/writing'>
                    등록
                </Link>
            </button>
        </div>
    );
}
