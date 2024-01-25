import React, { createContext, useState, useEffect } from "react";
import { formatDate } from "@/app/utils/formatDate";
import { Review } from "@/app/interfaces/Review/Review";

interface ReviewProviderProps {
  children: React.ReactNode;
}

interface ReviewContextType {
  reviews: Review[];
}
export const ReviewContext = createContext<ReviewContextType>({ reviews: [] });

export const ReviewProvider: React.FC<ReviewProviderProps> = ({ children }) => {
  console.log("ReviewProvider 마운트 됨");
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

  return (
    <ReviewContext.Provider value={{ reviews }}>
      {children}
    </ReviewContext.Provider>
  );
};
