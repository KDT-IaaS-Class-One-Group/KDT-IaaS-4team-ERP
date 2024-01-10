// 상품평 관리 페이지

'use client';
import React, { useState } from 'react';

interface Review {
  id: number;
  user: string;
  content: string;
  imageUrl: string;
  reply: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    user: 'user123',
    content: '이런 쓰레기가 다있나',
    imageUrl: '/images/review1.jpg',
    reply: '',
  },
  {
    id: 2,
    user: 'user123',
    content: '다시는 안산다',
    imageUrl: '/images/review1.jpg',
    reply: '',
  },
];

export default function ReviewManagePage() {
  const [reviews, setReviews] = useState(initialReviews);

  const handleReplyChange = (id: number, reply: string) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, reply } : review,
      ),
    );
  };

  const handleReplySubmit = (id: number) => {
    // 답변을 서버로 전송하는 로직을 여기에 구현합니다.
    console.log(
      'Submit reply for review:',
      id,
      reviews.find((r) => r.id === id)?.reply,
    );
    alert('답변이 등록되었습니다!');
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-semibold mb-4'>리뷰 관리</h1>
      {reviews.map((review) => (
        <div
          key={review.id}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <h2 className='text-lg font-bold'>사용자: {review.user}</h2>
            <p>{review.content}</p>
            {review.imageUrl && (
              <img
                src={review.imageUrl}
                alt={`리뷰 이미지 ${review.id}`}
                className='w-full max-w-xs mt-3'
              />
            )}
          </div>
          <div>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3'
              rows={3}
              placeholder='답변을 입력하세요...'
              value={review.reply}
              onChange={(e) => handleReplyChange(review.id, e.target.value)}
            />
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => handleReplySubmit(review.id)}
            >
              답변 등록
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
