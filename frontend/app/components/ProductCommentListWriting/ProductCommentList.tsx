// ? 제품상품평페이지 컴포넌트 작성

const ProductCommentList = ({writerid, date, starcount, commenttitle}) => {
  return (

    <div className='flex flex-col items-center bg-black text-white w-full h-full justify-center'>
      {/* Area1: 글 쓰기 제목 */}
      <div className='bg-gray-400 w-4/5 h-50 mb-4'>
        <input
          type='text'
          className='w-full h-full bg-white text-black text-left py-4 pl-2'
          placeholder='제목'
        />
      </div>

      {/* Area2: 글 쓰기 내용 */}
      <div className='bg-gray-400 w-4/5 h-96 mb-4'>
        <textarea
          className='w-full h-full  bg-white text-black text-left py-4 pl-2'
          placeholder='내용'
        />
      </div>

      {/* Area3: 사진 업로드 영역 */}
      <div className='bg-gray-400 w-4/5 h-5000 mb-4 flex justify-between'>
        {/* Area3-div 2: 불러온 사진 썸네일 */}
        <div className='bg-gray-400 h-450 mb-4'>
          {/* Area3-div 1: 이미지 썸네일 */}
          <button className='bg-pink-300 w-32 h-10 mb-4'>
            <div className='text-center py-2'>이미지 불러오기</div>
          </button>
          <div className='text-left py-2 pl-2 flex'>
            <div className='w-20 h-20 bg-black'> 사진 </div>
            <div className='w-20 h-20 bg-black'> 사진 </div>
            <div className='w-20 h-20 bg-black'> 사진 </div>
            <div className='w-20 h-20 bg-black'> 사진 </div>
          </div>
        </div>

        {/* Area4: 등록 버튼(input button) */}
        <div className='bg-gray-400 w-1/2 flex items-end justify-end'>
          <Link href='/cs' className='ml-auto'>
            <input
              type='button'
              className='bg-pink-300 w-32 h-10'
              value='등록'
            />
          </Link>
        </div>
      </div>
    </div>
  
  )
}

export default ProductCommentList;