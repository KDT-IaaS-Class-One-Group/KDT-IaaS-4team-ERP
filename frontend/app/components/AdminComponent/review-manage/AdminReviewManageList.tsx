// 해당 리뷰에 대한 답변을 작성하는 컴포넌트
// reivew-manage/AdminReviewManage.tsx 에서 사용
// 경로 : /admin/review-manage

import { Review } from "@/app/interfaces/Review/Review";
import Image from "next/image";

interface AdminReviewManageListProps {
  review: Review;
  handleReplyChange: (reviewIndex: number, reply: string) => void;
  handleReplySubmit: (reviewIndex: number) => void;
  className?: string;
}

export default function AdminReviewManageList({
  review,
  handleReplyChange,
  handleReplySubmit,
  className = "",
}: AdminReviewManageListProps) {
  const { reviewIndex, userId, reviewImgUrl, reviewContent } = review;
  const defaultClassName = `AdminReviewManageList bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${className}`;

  return (
    <div key={reviewIndex} className={defaultClassName}>
      <div className="reviewArea mb-4 flex justify-between items-center">
        <div className="reviewLeft">
          <h2 className="text-lg font-bold">사용자 : {userId}</h2>
          <p>{reviewContent}</p>
        </div>
        <div className="reviewRight flex justify-center items-center">
          {reviewImgUrl && (
            <Image
              src={reviewImgUrl}
              alt={`리뷰 이미지 ${reviewIndex}`}
              className="w-full max-w-xs mt-3"
            />
          )}
        </div>
      </div>
      <div className="adminTextArea">
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
          rows={3}
          placeholder="답변을 입력하세요..."
          onChange={(e) => handleReplyChange(reviewIndex, e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleReplySubmit(reviewIndex)}
        >
          답변 등록
        </button>
      </div>
    </div>
  );
}
