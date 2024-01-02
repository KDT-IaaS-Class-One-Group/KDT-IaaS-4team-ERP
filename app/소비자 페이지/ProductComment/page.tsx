import { useState, useEffect } from 'react';
import ProductCommentList from './ui/ProductCommentList';

const CommentHome = () => {
  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   // 가상의 데이터 조회 함수 (실제로는 MariaDB와 통신해야 함)
  //   const fetchComments = async () => {
  //     try {
  //       // MariaDB에서 데이터를 가져오는 비동기 작업
  //       const response = await fetchDataFromMariaDB(); // fetchDataFromMariaDB 함수는 실제 MariaDB에서 데이터를 가져오는 함수로 대체되어야 합니다.
  //       setComments(response.data); // 가져온 데이터를 상태에 저장
  //     } catch (error) {
  //       console.error('Error fetching comments:', error);
  //     }
  //   };

  //   // 데이터 조회 함수 호출
  //   fetchComments();
  // }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  return (
    <div>
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
  );
};

export default CommentHome;
