'use client'
// ? 제품상품 상세보기 페이지 작성
// ? 상태관리 및 데이터 전달가능확인
// ? 추후 MariaDB와 EXPRESS로 수정 예정
import { useState, useEffect } from 'react';
import ProductCommentFull from '@/components/ProductCommentListfull/ProductCommentList';
import Write from 'public/writingcustomerComp/writ';
import ProductUploadFullButton from '@/components/ProductCommentListfull/ProductUploadButton';
import Link from 'next/link';
import { comment } from 'postcss';

interface productcommentfull {
    reviewTitle: string; //제목
    reviewContent: string; //내용
    reviewImgUrl: string; //이미지
    reviewUpdatedAt: Date; //날짜
    reviewRating : string; //평점
    userId: string; //아이디
}

const CommentFullHome = () => {
    const [commentsfull, setCommentsfull] = useState([]);

    useEffect(() => {
        const fetchCommentsfull = async () => {
            try {
                const response = await fetch('http://localhost:3560/productcomment');
                const data = await response.json();
                console.log(data); // 확인용
                const commentData = data.map(list => ({
                    reviewTitle: list.reviewTitle,
                    reviewContent: list.reviewContent,
                    reviewImgUrl: list.reviewImgUrl,
                    reviewUpdatedAt: list.reviewUpdatedAt,
                    reviewRating : list.reviewRating,
                    userId: list.userId,
                }));
                setCommentsfull(data); //가져온 데이터를 상태에 저장
            } catch (error) {
                console.error("에러 발생 :", error);
            }
        };
        //데이터 조회 함수 호출
        fetchCommentsfull();
    }, []);

    return (
        <>
                <div className='w-screen h-screen flex justify-start items-center flex-col gap-6'>
                    <ProductCommentFull
                        key={index}
                        reviewTitle={commentsfull.reviewTitle}
                        reviewContent={commentsfull.reviewContent}
                        reviewImgUrl={commentsfull.reviewImgUrl}
                        reviewUpdatedAt={commentsfull.reviewUpdatedAt}
                        reviewRating={commentsfull.reviewRating}
                        userId={commentsfull.userId}
                    />
                </div>
            {/* <Link href="/productcommentwriting">
                <div className='mr-40 mb-20'>
                    <ProductUploadFullButton value='상품평 등록' />
                </div>
            </Link> */}
        </>
    );
};

export default CommentFullHome;
