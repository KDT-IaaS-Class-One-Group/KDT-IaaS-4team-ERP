'use client'

// ? 제품상품평페이지 페이지 작성
// ? 상태관리 및 데이터 전달가능확인
// ? 추후 MariaDB와 EXPRESS로 수정 예정
import { useState, useEffect } from 'react';
import ProductCommentList from '@/components/ProductComment/ProductCommentList';
import ProductUploadButton from '@/components/ProductComment/ProductUploadButton';
import Link from 'next/link';

interface productcommentfull {
  userId: string;
  reviewUpdatedAt: Date;
  reviewRating: string;
  reviewTitle: string;
}


export default function Productcommentfull() {
  const [productwhole, setProductComment] = useState([])
  useEffect(() => {
    const fetchProductcomment = async () => {
      try {
        const response = await fetch('http://localhost:3560/productcomment');
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.error('데이터를 불러오는 동안 에러 발생:', error);
      }
    }
  })
  return;
}







// const CommentHome = () => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         // http://192.168.100.83:3560/login에서 데이터를 가져오도록 수정
//         const response = await fetch('http://192.168.100.83:3560/productcomment');

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//         setComments(data); // 가져온 데이터를 상태에 저장
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };

//     // 데이터 조회 함수 호출
//     fetchComments();
//   }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

//   return (
//     <>
//       <div className='w-screen h-screen flex justify-start items-center flex-col gap-6'>
//         {comments.map((comment, index) => (
//           <ProductCommentList
//             key={index}
//             writerid={comments.userId}
//             date={comments.reviewContent}
//             starcount={comments.reviewRating}
//             commenttitle={comments.reviewTitle}
//           />
//         ))}
//       </div>
//       <Link href="/productcommentwriting">
//         <div className='mr-40 mb-20'>
//           <ProductUploadButton value='상품평 등록' />
//         </div>
//       </Link>
//     </>
//   );
// };

// export default CommentHome;