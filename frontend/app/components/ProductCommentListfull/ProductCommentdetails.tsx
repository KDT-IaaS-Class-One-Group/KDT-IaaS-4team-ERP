// 제품의 상품평 상세보기 컴포넌트입니다.
// frontend/app/components/ProductCommentListfull/ProductCommentdetails.tsx

import { useRouter } from "next/navigation";
import Btn from "../Btn/Btn";

interface ProductCommentdetailsProps {
  reviewTitle: string;
  reviewContent: string;
  reviewRating: string;
}

/**
 * 상품평 상세 보기 컴포넌트 입니다.
 * @param {ProductCommentdetailsProps} props
 * @param {string} reviewTitle  제목
 * @param {string} reviewContent 내용
 * @param {string} reviewRating 평점
 * @returns React Component
 */
const ProductCommentdetails = ({
  reviewTitle,
  reviewContent,
  reviewRating,
}: ProductCommentdetailsProps) => {
  // useRouter를 활용한 url 조작 함수
  const router = useRouter();
  function goback() {
    router.push("/product");
  }
  return (
    <div className="flex flex-col items-center w-full h-3/4 justify-center">
      {/* Area1: 글 쓰기 제목 */}
      <div className="bg-gray-700 w-4/5 h-50 mb-4">
        <div className="w-full h-full text-left py-4 pl-2">
          {reviewTitle}
        </div>
      </div>

      {/* Area2: 글 쓰기 내용 */}
      <div className="bg-gray-700 w-4/5 h-96 mb-4">
        <div className="w-full h-full text-left py-4 pl-2">
          {reviewContent}
        </div>
      </div>

      {/* Area3 : 평점 및 뒤로가기 버튼 */}
      <div className="h-20 mt-4 flex justify-between w-4/5 items-center">
        <ul className="flex justify-start items-center gap-3">
          <p className="text-2xl ">평점 :</p>
          <div className="flex items-center justify-start text-4xl mb-2">
            {Array.from({ length: parseInt(reviewRating, 10) }).map((_, i) => (
              <span className="text-yellow-500 block" key={i}>
                ★
              </span>
            ))}
          </div>
        </ul>
        <Btn
          textContent="뒤로가기"
          className="h-10 w-28 text-lg flex items-center bg-slate-700 justify-center "
          onClick={goback}
        />
      </div>
    </div>
  );
};

export default ProductCommentdetails;
