// 해당 리뷰에 대한 답변을 작성하는 컴포넌트
// reivew-manage/AdminReviewManage.tsx 에서 사용
// 경로 : /admin/review-manage

import { useState } from "react";
import { Review } from "@/app/interfaces/Review/Review";
import Image from "next/image";

interface AdminReviewManageListProps {
  review: Review;
  className?: string;
}

export default function AdminReviewManageList({
  review,
  className = "",
}: AdminReviewManageListProps) {
  const {
    reviewIndex,
    userId,
    reviewImgUrl,
    reviewContent,
    reviewAdminContent,
    reviewRating,
  }: Review = review;
  const defaultClassName = `AdminReviewManageList shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-slate-500 ${className}`;

  const [reply, setReply] = useState("");

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = () => {
    console.log("handleReplySubmit 시작 reply : ", reply);
    fetch(`http://localhost:3560/api/reviewReplySubmit/${reviewIndex}`, {
      method: "PATCH",
      body: JSON.stringify({ reply }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Reply submitted successfully");
        setReply(''); 
        // console.log("Reply submitted successfully", data);
        // 등록 성공 모달 띄우기
      })
      .catch((error) => {
        alert("Error submitting reply");
        // console.error("Error submitting reply", error);
        // 등록 실패 모달 띄우기
      });
  };

  return (
    <div key={reviewIndex} className={defaultClassName}>
      <div className="reviewArea mb-4 flex justify-between items-center">
        <div className="reviewLeft">
          <h2 className="text-lg font-bold">사용자 : {userId}</h2>
          <h2 className="text-sm font-bold  text-yellow-500 mb-4 flex items-center gap-1">
            별점 : <div>{"★".repeat(reviewRating)}</div>
          </h2>
          <p className="reviewContent">내용 : {reviewContent}</p>
        </div>
        <div className="reviewRight flex justify-center items-center">
          {reviewImgUrl !== null ? (
            <img
              src={`/images/${reviewImgUrl}`}
              alt={`리뷰 이미지 ${reviewIndex}`}
              className="w-full max-w-xs mt-3"
            />
          ) : (
            <p className="text-xs">리뷰 사진 없음</p>
          )}
        </div>
      </div>
      <div className="adminTextArea">
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 text-slate-800 bg-slate-200"
          rows={2}
          placeholder={
            reviewAdminContent ? reviewAdminContent : "답변을 작성해주세요"
          }
          value={reply}
          onChange={handleReplyChange}
        />
        <button
          className="adminBtnStyle border border-slate-800 px-4 transition-all font-bold rounded"
          onClick={handleReplySubmit}
        >
          {reviewAdminContent === null || reviewAdminContent === ""
            ? "답변 등록"
            : "답변 수정"}
        </button>
      </div>
    </div>
  );
}
