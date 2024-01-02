import React from 'react';
import List from '@/app/componunt/clientComp/list';



export default function Home() {
    // 예시 데이터
    const dataForArea2 = [
        { 작성자: '사용자1', 날짜: '2024-01-02', 제목: '질문 제목1' },
        { 작성자: '사용자2', 날짜: '2024-01-03', 제목: '질문 제목2' },
        // ... 기타 데이터
    ];

    return (
        
        <div id='root' className='w-screen h-screen bg-red-800 flex justify-center items-center'>
         <List list1={"작성자"} list2={"날짜"} list3={"제목"} list4={"ㅋㅋㅋ"}/>
         
            
            <div id="area1">
                <div>
                    <div style={{ flex: 1 }}>작성자</div>
                    <div style={{ flex: 1 }}>날짜</div>
                    <div style={{ flex: 3 }}>질문 제목</div>
                </div>
            </div>

            <div id="Area2">
                {dataForArea2.map((item, index) => (
                    <div key={index}>
                        <div> {} </div>
                        <div style={{ flex: 1 }}>{item.날짜}</div>
                        <div style={{ flex: 3 }}>{item.제목}</div>
                    </div>
                ))}
            </div>

            <button id="Area3">
                질문 등록하기
            </button>

        </div>
    );
}
