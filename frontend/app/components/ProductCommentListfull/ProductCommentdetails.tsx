// ? 제품상품평페이지 컴포넌트 작성
import { useRouter } from "next/navigation";
import Btn from "../Btn/Btn";

interface ProductCommentdetailsProps {
  reviewTitle: string;
  reviewContent: string;
  reviewRating: string;
}

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
    <div className="flex flex-col items-center bg-blue-200 text-white w-full h-full justify-center">
      {/* Area1: 글 쓰기 제목 */}
      <div className="bg-gray-400 w-4/5 h-50 mb-4">
        <div className="w-full h-full bg-white text-black text-left py-4 pl-2">
          {reviewTitle}
        </div>
      </div>

      {/* Area2: 글 쓰기 내용 */}
      <div className="bg-gray-400 w-4/5 h-96 mb-4">
        <div className="w-full h-full bg-white text-black text-left py-4 pl-2">
          {reviewContent}
        </div>
      </div>

      {/* Area3 : 평점 및 뒤로가기 버튼 */}
      <div className="h-20 mt-4 flex justify-between w-4/5 items-center">
        <ul className="flex justify-start items-center gap-3">
          <p className="text-2xl text-slate-950">평점 :</p>
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
          className="h-10 w-28 text-xs flex items-center bg-slate-50 text-slate-500 justify-center "
          onClick={goback}
        />
      </div>
    </div>
  );
};

export default ProductCommentdetails;
