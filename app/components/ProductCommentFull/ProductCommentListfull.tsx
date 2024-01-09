// ? 제품상품평페이지 컴포넌트 작성

const ProductCommentListFull = ({commenttitle, comment, starcount}) => {
  return (
    <div className="flex justify-around items-center w-5/6 h-28 outline">
        <div className="outline w-16 h-8 flex justify-around items-center">{commenttitle}</div>
        <div className="outline w-32 h-8 flex justify-around items-center">{comment}</div>
        <div className="outline w-32 h-8 flex justify-around items-center">{starcount}</div>
    </div>
  )
}

export default ProductCommentListFull;