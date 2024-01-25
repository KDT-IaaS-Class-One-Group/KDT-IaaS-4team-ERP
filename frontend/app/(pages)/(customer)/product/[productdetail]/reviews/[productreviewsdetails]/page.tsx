"use client";
// // ? 제품상품 상세보기 페이지 작성
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

// // todo 1. 마운트가 될 때, reviews/:producutreviewdetails로 부터 데이터를 가져온다.
// todo 2. 가져온 데이터를 ProductCommentdetails 컴포넌트에 전달한다.
const CommentFullHome = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const rating = searchParams.get("rating");
  const content = searchParams.get("content");
  const adminContent = searchParams.get("adminContent");

  const productDetailsProps: Productcommentdetails = {
    reviewTitle: title || "", // title이 null이나 undefined일 경우를 대비하여 빈 문자열로 처리
    reviewContent: content || "",
    reviewRating: rating || "",
    // 다른 프로퍼티들도 필요에 따라 추가
  };

  // useSearchParams()를 이용하여 쿼리스트링을 가져온다.
  // 그러나 reviewIndex를 가져오지 못하므로, window.location.pathname를 활용하는 방안을 채택한다.

  // 디버깅용 콘솔로그
  // console.log(productDetailsProps);
  // console.log("adminContent : ", adminContent);
  // console.log("adminContent type : ", typeof adminContent);
  // useEffect(() => {
  //   const reviewIndex = urlLastIndexPop();
  //   console.log("reviewIndex : ", reviewIndex);
  // }, []);

  return (
    <div className="w-screen h-screen flex justify-start items-center flex-col pt-4 pb-4 ">
      <ProductCommentdetails
        reviewTitle={productDetailsProps.reviewTitle}
        reviewContent={productDetailsProps.reviewContent}

        reviewRating={productDetailsProps.reviewRating}
      />
      {adminContent !== "" && (
        <ul className="AdminArea w-4/5 h-1/4 outline-1 outline flex flex-col items-start justify-center">
          <AdminCommentList
            author="관리자"
            className="border border-slate-50 w-full h-full bg-black"
            adminContent={adminContent}
          />
        </ul>
      )}
    </div>
  );
};

export default CommentFullHome;
