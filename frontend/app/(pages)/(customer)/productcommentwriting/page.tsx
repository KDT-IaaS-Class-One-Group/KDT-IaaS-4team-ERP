// [고객센터 질문 등록](글 쓰기) 컴포넌트
// 여기서 작성한 글은 이전 페이지(고객센터 페이지)에서 확인 할 수 있습니다.
'use client'

import { useState, useEffect } from 'react';
import ProductCommentList from '@/components/ProductCommentListWriting/ProductCommentList';
import ProductUploadButton from '@/components/ProductCommentListWriting/ProductUploadButton';
import Link from 'next/link';

// <Write title={"제목"} content={"내용"} btn={"이미지 등록"} image={"이미지 목록"} submit={'등록'} />

// interface productcomment {
//   userId: string;
//    userId: string;
// }

const productcomment = () => {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState({
    userId: '',
    reviewTitle: '',
  });



  const handleInputChange = (field: string, value: string) => {
    setLoginUser({
      ...loginUser,
      [field]: value,
    });
  };

  export default function Productcomment() {
    const [productcomment, setProductComment] = useState([]);
    useEffect(() => {
      const fetchProductcomment = async () => {
        try {
          const response = await fetch('http://localhost:3560/productcomment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: loginUser.userId,
              reviewTitle: loginUser.reviewTitle,
            }),
          });

          if(!response.ok){
            throw new Error('글 쓰기 실패');

          }

          //로컬환경 테스트 실행 () http://192.168.100.83:3560/productcomment)
          const data = await response.json();//DB에서 가져온 데이터를 json으로 변환
          console.log(data) //콘솔에서 넘어온 데이터 확인
          const commentData = data.map(list => ({
            userId: list.userId,
            reviewUpdatedAt: list.reviewUpdatedAt,
            reviewRating: list.reviewRating,
            reviewTitle: list.reviewTitle
          }));
          setProductComment(commentData); // 데이터 업데이트
          console.log(commentData);
        } catch (error) {
          console.error('데이터를 불러오는 동안 에러 발생:', error);
        }
      }
      // 함수를 호출하여 데이터 가져오기
      fetchProductcomment(); //호출이 없으면DB 데이터가 안들어옴
    }, [])
    return (
      <>



      </>
    );
  }

