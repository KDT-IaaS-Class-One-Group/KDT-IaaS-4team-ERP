'use client'

import { useState, useEffect } from 'react';
import ProductText from '@/app/components/ProductCommentListWriting/ProductText';
// import Link from 'next/link';
import ProductRating from './productrating';
// import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation';
import ProdWritingButton from './ProdWritingButton';
import { useRouter } from 'next/navigation';
import Modal from "@/app/components/Modal/Modal";


const ProductWritingHome = () => {
  const prodIndex = useParams().productdetail
  const router = useRouter();


  const [productWrite, setProductWrite] = useState({
    reviewTitle: '',
    reviewContent: '',
    reviewRating: '',
  });

  //Modal code
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    title: '',
    message: '',
  });


  const handleInputChange = (field: string, value: string) => {
    setProductWrite({
      ...productWrite,
      [field]: value,
    });
  };

  const handleRatingChange = (rating: string) => {
    setProductWrite({
      ...productWrite,
      reviewRating: rating,
    });
  };


  const handleSubmit = async () => { //글 등록 버튼
    try {
      const token = localStorage.getItem('token')
      // console.log(token)
      const response = await fetch(`http://localhost:3560/${prodIndex}/reviews`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json", // 다른 필요한 헤더들도 추가할 수 있습니다.
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          prodIndex: prodIndex,
          reviewTitle: productWrite.reviewTitle,
          reviewContent: productWrite.reviewContent,
          reviewRating: productWrite.reviewRating,
        }),
      });


      // 제목이 비어있을 경우
      if (!productWrite.reviewTitle.trim()) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '제목을 입력해주세요.',
        });
        return;
      }


      // 내용이 비어있을 경우
      if (!productWrite.reviewContent.trim()) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '내용을 입력해주세요.',
        });
        return;
      }

      if (!productWrite.reviewRating.trim()) {
        setModalContent({
          isOpen: true,
          title: '알림',
          message: '별점을 설정해주세요.',
        });
        return;
      }

      if (!response.ok) {
        throw new Error('글 쓰기 실패');
      }
      const data = await response.json();
      console.log(data);

      if (data.success) {
        alert('글 등록 성공');
        router.push(`/product/${prodIndex}`);//내가 원하는 페이지로 이동시 사용
      }
      else {
        alert('글 등록 실패');
      }
    } catch (error) {
      console.error(error);
      alert('글 작성 실패(error)');
    }
  };

  const closeModal = () => {
    setModalContent({
      isOpen: false,
      title: '',
      message: '',
    });
  };

  const titletext = 'flex w-4/5 m-2 h-20 items-start justify-center'
  const contenttext = 'flex w-4/5 m-2 h-4/5 items-start justify-start'



  return (
    <div className='flex flex-col items-center bg-black w-full h-full justify-center'>
      <div className='w-4/5 h-4/5 flex flex-col justify-center items-center'>
        <ProductText
          title='TITLE' textheight={titletext}
          inputchange={(value) => handleInputChange('reviewTitle', value)}
        />
        <ProductText
          title='CONTENT' textheight={contenttext}
          inputchange={(value) => handleInputChange('reviewContent', value)}
        />
        <ProductRating onRatingChange={handleRatingChange} />
      </div>
      <div className='w-4/5 mb-4 flex justify-end h-1/5'>
        <ProdWritingButton value='글등록' onClick={handleSubmit} />
      </div>


      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
      />


    </div>
  );
};

export default ProductWritingHome;
