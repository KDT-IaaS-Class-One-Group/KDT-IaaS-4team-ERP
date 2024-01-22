// ? 제품상품평페이지 컴포넌트 작성
import { useRouter } from "next/navigation";
const ProductCommentdetails = ({ reviewTitle, reviewContent, reviewRating }) => {
  const router = useRouter();



  function goback() {
    router.push('/')
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

      <div className="h-20 mb-4 flex justify-start w-4/5 items-center">
        <ul className="text-2xl text-black">평점 : </ul>
          <div className='flex items-center justify-start text-4xl'>
            {Array.from({ length: parseInt(reviewRating, 10) }).map((_, i) => (
              <span className="text-yellow-500"key={i}>★</span>
            ))}
          </div>
          <button type="button" onClick={goback}>뒤로가기</button>
      </div>
    </div>
  )
}

export default ProductCommentdetails;