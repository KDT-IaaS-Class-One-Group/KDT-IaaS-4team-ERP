// [상품평 상세보기] 컴포넌트
// 여기서 작성한 글은 이전 페이지(고객센터 페이지)에서 확인 할 수 있습니다.
'use client'
// ? 제품상품평페이지 상세보기 페이지 작성
// ? 상태관리 및 데이터 전달가능확인
// ? 추후 MariaDB와 EXPRESS로 수정 예정
import Write from '@/components/writingcustomerComp/writ';
import { useState, useEffect } from 'react';
import ProductCommentFull from '@/components/ProductComment/ProductCommentList';
import ProductUploadButton from '@/components/ProductComment/ProductUploadButton';
import Link from 'next/link';

const data = 
[
    { title: '오늘 배송 받았는데 꽝', contents: '이거 제품이 너무 에바세바꽁치넙치뭉치면살고 흩어지는죽는급 입니다.'},
]


const CommentFullHome = () => {
    const [commentsfull, setCommentsfull] = useState([]);

    useEffect(() => {
        // MariaDB와 통신해서 가져올 부분
        const fetchCommentsfull = async () => {
            try {
                // MariaDB에 있는 테이블에 접근하여 값 불러오기
                // const response = await fetch('http://192.168.100.76:3560/csitemfull');

                const response = await fetch("../productcommentfull/data.json")
                const data = await response.json();
                console.log(data); // 확인용
                setCommentsfull(data);
            } catch (error) {
                console.error("에러 발생 :", error);
            }
        };

        fetchCommentsfull();
    }, []);

    // useEffect의 두번째 매개변수로 빈 배열을 전달하여 컴포넌트 마운트될 때 한 번만 실행

    return (


        <div className="flex flex-col items-center bg-black text-white w-full h-full justify-center">
            {/* Area1: 글 쓰기 제목 */}
            <div className="bg-gray-400 w-4/5 h-50 mb-4">
                <div className="w-full h-full bg-white text-black text-left py-4 pl-2"> {} </div>
            </div>

            {/* Area2: 글 쓰기 내용 */}
            <div className="bg-gray-400 w-4/5 h-96 mb-4">
                <div className="w-full h-full  bg-white text-black text-left py-4 pl-2">여기에 내용 드감</div>
            </div>

            {/* Area3: 사진 업로드 영역 */}
            <div className="bg-gray-400 w-4/5 h-5000 mb-4 flex justify-between">
                {/* Area3-div 2: 불러온 사진 썸네일 */}
                <div className="bg-gray-400 h-450 mb-4">
                    {/* Area3-div 1: 이미지 썸네일 */}
                    <button className="bg-pink-300 w-32 h-10 mb-4">
                        <div className="text-center py-2">이미지 불러오기</div>
                    </button>
                    <div className="text-left py-2 pl-2 flex">
                        <div className="w-20 h-20 bg-black"> 사진 </div>
                        <div className="w-20 h-20 bg-black"> 사진 </div>
                        <div className="w-20 h-20 bg-black"> 사진 </div>
                        <div className="w-20 h-20 bg-black"> 사진 </div>
                    </div>
                </div>

                {/* Area4: 등록 버튼(input button) */}
                <div className='bg-gray-400 w-1/2 flex items-end justify-end'>
                    <input type="button" className="bg-pink-300 w-32 h-10" value="등록" />
                </div>
            </div>
        </div >
    );
};

export default CommentFullHome;