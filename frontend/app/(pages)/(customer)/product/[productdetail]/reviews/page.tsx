'use client'
// ? 제품상품평 페이지 작성
// ? 상태관리 및 데이터 전달가능확인
// ? 추후 MariaDB와 EXPRESS로 수정 예정
import { useState, useEffect } from 'react';
import ProductCommentList from '@/components/ProductComment/ProductCommentList';
import ProductUploadButton from '@/components/ProductComment/ProductUploadButton';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface productcomment {
  userId: string;
  reviewUpdatedAt: Date;
  reviewRating: string;
  reviewTitle: string;
}

export default function ProductReviews() {



  const [reviews, setReviews] = useState([]);
  const searchparams = useSearchParams()
  const prodIndex = searchparams.get('prodIndex')
  console.log(prodIndex)

  useEffect(() => {
    const fetchreviews = async () => {
      try {
        const response = await fetch(`http://localhost:3570/product/${prodIndex}/reviews`); //로컬환경 테스트 실행 () http://192.168.100.83:3560/productcomment)
        const data = await response.json();//DB에서 가져온 
 

        // }));
        setReviews(data); // 데이터 업데이트

      } catch (error) {
        console.error('데이터를 불러오는 동안 에러 발생:', error);
      }
    }
    // 함수를 호출하여 데이터 가져오기
    fetchreviews(); 
  }, [])

  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='w-screen flex justify-end'>
        <Link href={`/product/${prodIndex}/reviews/productwriting`}>
          <ProductUploadButton value='상품평 등록' />
        </Link>
      </div>
      <div className='w-full h-4/5 flex justify-start items-center flex-col gap-6 mt-10'>
        {reviews.map((list, index) => (
          <ProductCommentList
            key={index}
            writerid={list.userId}
            date={list.reviewUpdatedAt}
            starcount={list.reviewRating}
            commenttitle={list.reviewTitle}
          />
        ))}
      </div>
    </div>
  );
  ;
}
