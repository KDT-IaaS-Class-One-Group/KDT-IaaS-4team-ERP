// 상품 관련된 상품평 리스트 컴포넌트

import { formatDate } from "@/app/utils/formatDate";

interface ProductComment {
  writerId: string;
  date: string;
  starCount: number;
  commentTitle: string;
}

/**
 * @param {ProductComment} comment 상품평 정보
 * @returns 상품평 리스트 컴포넌트를 제출합니다.
 */
const ProductCommentList = ({
  writerId,
  date,
  starCount,
  commentTitle,
}: ProductComment) => {
  return (
    <div className="flex justify-around items-center h-28 outline w-full">
      <div className="w-16 h-8 flex justify-around items-center">
        {writerId}
      </div>
      <div className="w-52 h-8 flex justify-around items-center">
        {formatDate(date)}
      </div>
      <div className="flex items-center text-yellow-500">
        {Array.from({ length: starCount }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <div className=" w-56 h-8 flex justify-around items-center">
        {commentTitle}
      </div>
    </div>
  );
};

export default ProductCommentList;
