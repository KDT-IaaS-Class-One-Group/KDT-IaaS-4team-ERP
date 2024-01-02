const ProductCommentList = ({writerid, date, starcount, commenttitle}) => {
  return (
    <div>
        <div>{writerid}</div>
        <div>{date}</div>
        <div>{starcount}</div>
        <div>{commenttitle}</div>
    </div>
  )
}

export default ProductCommentList;