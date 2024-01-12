// [고객센터 질문 등록](글 쓰기) 컴포넌트
// 여기서 작성한 글은 이전 페이지(고객센터 페이지)에서 확인 할 수 있습니다.
import ProductHome from "@/components/ProductCommentListWriting/ProductCommentList"

const Productcomment = () => {
    return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ProductHome />
    </div>
  )
};

export default Productcomment;
