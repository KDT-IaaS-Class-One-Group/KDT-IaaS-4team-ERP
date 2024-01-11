'use client';

// ? 제품상품평페이지 페이지 작성
// ? 상태관리 및 데이터 전달가능확인
// ? 추후 MariaDB와 EXPRESS로 수정 예정
import { useState, useEffect } from 'react';
import ProductCommentList from '@/app/components/ProductComment/ProductCommentList';
import ProductUploadButton from '@/app/components/ProductComment/ProductUploadButton';
import Link from 'next/link';

const CommentHome = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // 가상의 데이터 조회 함수 (실제로는 MariaDB와 통신해야 함)
    const fetchComments = async () => {
      try {
        // /public/data.json에 위치한 파일을 가져오는 비동기 작업
        const response = await fetch('/data.json');
        const data = await response.json();
        console.log(data);
        setComments(data); // 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    // 데이터 조회 함수 호출
    fetchComments();
  }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  return (
    <>
      <div
        className='w-screen h-screen flex justify-start items-center flex-col gap-6
  '
      >
        {comments.map((comment, index) => (
          <ProductCommentList
            key={index}
            writerid={comment.writerid}
            date={comment.date}
            starcount={comment.starcount}
            commenttitle={comment.commenttitle}
          />
        ))}
      </div>
      <Link href='csitem' className='ml-auto'>
        <div className=' mr-40 mb-20'>
          <ProductUploadButton value='상품평 등록' />
        </div>
      </Link>
    </>
  );
};

export default CommentHome;
