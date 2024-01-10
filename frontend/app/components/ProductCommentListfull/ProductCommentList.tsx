// ? 제품상품평페이지 컴포넌트 작성

const ProductCommentList = ({commenttitle, date}) => {
  return (
    <div className="flex justify-around items-center w-5/6 h-28 outline">
        <div className="outline w-56 h-8 flex justify-around items-center">{commenttitle}</div>
        <div className="outline w-32 h-8 flex justify-around items-center">{date}</div>
        {/* <div className="outline w-16 h-8 flex justify-around items-center">{writerid}</div> */}
        {/* <div className="outline w-32 h-8 flex justify-around items-center">{starcount}</div> */}
    </div>
  )
}

export default ProductCommentList;