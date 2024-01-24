// 상품평 관리 페이지

"use client";
// import { ReviewContext } from "@/app/components/AdminComponent/ReviewProvier";
import AdminReviewManageList from "@/app/components/AdminComponent/review-manage/AdminReviewManageList";
import { Review } from "@/app/interfaces/Review/Review";
import { formatDate } from "@/app/utils/formatDate";
import React, { useEffect, useState } from "react";

// 전역 변수를 저장할 Context 생성

export default function ReviewManagePage() {
  // const { reviews } = useContext(ReviewContext);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Logic for loading data (e.g., Fetch API)
  useEffect(() => {
    fetch("http://localhost:3560/api/reviewTable")
      .then((response) => response.json())
      // * data가공하는 파트
      .then((data) => {
        const reviews = data.map((review) => ({
          ...review,
          // 형변환
          reviewCreatedAt: formatDate(review.reviewCreatedAt),
          reviewUpdateAt: formatDate(review.reviewUpdateAt),
        }));
        setReviews(reviews);
        console.log("Fetched and processed review data: ", reviews); // 추가된 로그
      })
      .catch((error) => console.error(error));
  }, []);

  // todo 함수 선언 필요
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">리뷰 관리</h1>

      {reviews.map((review, index) => (
        <AdminReviewManageList key={index} review={review} />
      ))}
    </div>
  );
}
