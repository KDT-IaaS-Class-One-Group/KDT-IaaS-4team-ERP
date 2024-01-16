'use client'
// ? 제품상품 상세보기 페이지 작성
// ? 상태관리 및 데이터 전달가능확인
// ? 추후 MariaDB와 EXPRESS로 수정 예정

import { useSearchParams } from 'next/navigation';
import ProductCommentdetails from '@/components/ProductCommentListfull/ProductCommentdetails';


interface Productcommentdetails {
    reviewTitle: string; //제목
    reviewContent: string; //내용
    // reviewUpdatedAt: Date; //날짜
    reviewRating: string; //평점
    // userId: string; //아이디
}

const CommentFullHome = () => {
    const searchparams = useSearchParams();
    const title = searchparams.get('title');
    const rating = searchparams.get('rating');
    const content = searchparams.get('content');


    const productDetailsProps: Productcommentdetails = {
        reviewTitle: title || '', // title이 null이나 undefined일 경우를 대비하여 빈 문자열로 처리
        reviewContent: content || '',
        reviewRating: rating || '',
        // 다른 프로퍼티들도 필요에 따라 추가
      };



    return (
        <>
            <div className='w-screen h-screen flex justify-start items-center flex-col gap-6'>
                <ProductCommentdetails
                    reviewTitle={title}
                    reviewContent={content}
                    // reviewImgUrl={commentsfull.reviewImgUrl}
                    // reviewUpdatedAt={commentsfull.reviewUpdatedAt}
                    reviewRating={rating}
                    // userId={commentsfull.userId}
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
