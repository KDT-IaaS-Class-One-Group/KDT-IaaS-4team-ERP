"use client";
// ? 제품상품평 페이지 작성
// ? 상태관리 및 데이터 전달가능확인
// ? 추후 MariaDB와 EXPRESS로 수정 예정
import { useState, useEffect } from "react";
import ProductCommentList from "@/app/components/ProductComment/ProductCommentList";
import ProductUploadButton from "@/app/components/ProductComment/ProductUploadButton";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface ProductReview {
  reviewIndex: number; // 예시로 추가
  reviewRating: number;
  reviewTitle: string;
  reviewContent: string; // 예시로 추가
  reviewCreatedAt: string;
  reviewUpdatedAt: string;
  userId: string;
  prodIndex: number;
  reviewAdminContent: string | null; // 예시로 수정
}

export default function ProductReviews() {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const searchparams = useSearchParams();
  const prodIndex = searchparams.get("prodIndex") || "";
  // console.log(prodIndex)

  useEffect(() => {
    const fetchreviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3560/product/${prodIndex}/reviews`
        ); //로컬환경 테스트 실행 () http://192.168.100.83:3560/productcomment)
        const data: ProductReview[] = await response.json(); //DB에서 가져온

        // }));
        setReviews(data); // 데이터 업데이트
        console.log("data : ", data);
      } catch (error) {
        console.error("데이터를 불러오는 동안 에러 발생:", error);
      }
    };
    // 함수를 호출하여 데이터 가져오기
    fetchreviews(); // console.log("reviews : ", reviews);
    // console.log(typeof reviews[0].reviewUpdatedAt);
    // console.log(typeof reviews[0].reviewRating);
    // console.log(typeof reviews[0].reviewTitle);
    // console.log(typeof reviews[0].reviewIndex);
    // console.log(typeof reviews[0].reviewContent);
    // console.log(typeof reviews[0].reviewAdminContent);
  }, [prodIndex]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-y-scroll">
      <div className="w-full flex justify-end h-1/5">
        <Link
          className="w-full flex justify-end h-1/5"
          href={`/product/${prodIndex}/reviews/productwriting`}
        >
          <ProductUploadButton value="상품평 등록" />
        </Link>
      </div>
      <div className="w-full flex justify-start items-center flex-col gap-6 mt-10 ">
        {reviews.map((list, index) => (
          <div className="w-4/5 bg-slate-800" key={index}>
            <Link
              className="flex justify-center items-center h-full"
              href={{
                pathname: `/product/${prodIndex}/reviews/${list.reviewIndex}`, // 리뷰 인덱스를 동적으로 추가합니다.
                query: {
                  title: list.reviewTitle,
                  rating: list.reviewRating,
                  content: list.reviewContent,
                  adminContent: list.reviewAdminContent,
                  // 필요한 다른 데이터들도 여기에 추가합니다.
                },
              }}
              // as={`/product/${prodIndex}/reviews/${list.reviewIndex}`} // as 속성을 사용하여 링크 URL을 생성합니다.
            >
              <ProductCommentList
                writerId={list.userId}
                date={list.reviewUpdatedAt}
                starCount={list.reviewRating}
                commentTitle={list.reviewTitle}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
