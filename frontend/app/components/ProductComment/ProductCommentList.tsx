// ? 제품상품평페이지 컴포넌트 작성

const ProductCommentList = ({writerid, date, starcount, commenttitle}) => {
  return (
    <div className="flex justify-around items-center w- h-28 outline">
        <div className="w-16 h-8 flex justify-around items-center">{writerid}</div>
        <div className="w-32 h-8 flex justify-around items-center">{date}</div>
        <div className='flex items-center'>
        {Array.from({ length: parseInt(starcount, 10) }).map((_, i) => (
          <span key={i}>👍</span>
        ))}
          </div>
        <div className=" w-56 h-8 flex justify-around items-center">{commenttitle}</div>
    </div>
  )
}

export default ProductCommentList;