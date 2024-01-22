"use client";
// ? 제품상품 상세보기 페이지 작성
// ? 상태관리 및 데이터 전달가능확인
// ? 추후 MariaDB와 EXPRESS로 수정 예정

import { useSearchParams } from "next/navigation";
import ProductCommentdetails from "@/app/components/ProductCommentListfull/ProductCommentdetails";
import { urlLastIndexPop } from "@/app/utils/urlLastIndexPop";
import { useEffect } from "react";
import AdminCommentList from "../../../../../../components/reviewsAdminComment/AdminCommentList";

interface Productcommentdetails {
  reviewTitle: string; //제목
  reviewContent: string; //내용
  // reviewUpdatedAt: Date; //날짜
  reviewRating: string; //평점
  // userId: string; //아이디
}

// todo 1. 마운트가 될 때, reviews/:producutreviewdetails로 부터 데이터를 가져온다.
// todo 2. reviewsIndex를 조사하였을 때, 해당 인덱스에 reviewAdminContent를 체크한다.
// todo 3. 있다면, 컴포넌트를 생성하며 마운트하고, 없다면 컴포넌트를 생성하지 않는다.

const CommentFullHome = () => {
  // useSearchParams()를 이용하여 쿼리스트링을 가져온다.
  // 그러나 reviewIndex를 가져오지 못하므로, window.location.pathname를 활용하는 방안을 채택한다.

  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const rating = searchParams.get("rating");
  const content = searchParams.get("content");

  const productDetailsProps: Productcommentdetails = {
    reviewTitle: title || "", // title이 null이나 undefined일 경우를 대비하여 빈 문자열로 처리
    reviewContent: content || "",
    reviewRating: rating || "",
    // 다른 프로퍼티들도 필요에 따라 추가
  };
  // 디버깅용 콘솔로그
  console.log(productDetailsProps);
  useEffect(() => {
    const reviewIndex = urlLastIndexPop();
    console.log("reviewIndex : ", reviewIndex);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-start items-center flex-col pt-4 pb-4 bg-blue-200 text-white ">
      <ProductCommentdetails
        reviewTitle={title}
        reviewContent={content}
        // reviewImgUrl={commentsfull.reviewImgUrl}
        // reviewUpdatedAt={commentsfull.reviewUpdatedAt}
        reviewRating={rating}
        // userId={commentsfull.userId}
      />
      {/* <Link href="/productcommentwriting">
        <div className='mr-40 mb-20'>
        <ProductUploadFullButton value='상품평 등록' />
        </div>
      </Link> */}

      {/* 댓글 컴포넌트 들어갈 자리 */}
      <ul className="AdminArea w-4/5 h-1/4 outline-1 outline flex flex-col items-start justify-center">
        <AdminCommentList
          author="관리자"
          className="border border-slate-50 w-full h-full bg-black"
          adminContent="
        안녕하세요. 관리자입니다."
        />
      </ul>
    </div>
  );
};

export default CommentFullHome;
