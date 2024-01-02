import React from 'react';
// import { Link } from 'react-router-dom'; // React Router 사용을 위한 import
import List from '@/app/componunt/clientComp/list';

export default function CustomerService() {
    // 예시 데이터
    const dataForArea2 = [
        { 작성자: '사용자1', 날짜: '2024-01-02', 제목: '질문 제목1' },
        { 작성자: '사용자2', 날짜: '2024-01-03', 제목: '질문 제목2' },
        // ... 기타 데이터
    ];

    return (
        <div className='w-screen h-screen bg-red-800 flex flex-col items-center'>
            {/* Header */}
            <div className="text-4xl font-bold text-white mt-4">폼 미쳤다</div>
            
            {/* Navigation */}
            <nav className="mt-2 mb-4 flex space-x-4">
                {/* <Link to="/temp-menu-1" className="text-white">임시메뉴 1</Link>
                <Link to="/temp-menu-2" className="text-white">임시메뉴 2</Link>
                <Link to="/temp-menu-3" className="text-white">임시메뉴 3</Link> */}
            </nav>

            {/* Customer Service Body */}
            <List list1={"작성자"} list2={"날짜"} list3={"질문 제목"} list4={"질문 등록하기"} />

            <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-2xl">
                {dataForArea2.map((item, index) => (
                    <div key={index} className="flex items-center cursor-pointer hover:bg-gray-100 p-2">
                        <div className="flex-1">{item.작성자}</div>
                        <div className="flex-1">{item.날짜}</div>
                        <div className="flex-3">{item.제목}</div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <Link to="/write" className="mt-4 flex justify-end">
                <button className="bg-pink-300 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full">
                    글 쓰기
                </button>
            </Link>
        </div>
    );
}
