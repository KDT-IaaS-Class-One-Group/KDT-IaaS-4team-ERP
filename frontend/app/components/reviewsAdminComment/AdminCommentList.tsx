// 상품평의 댓글 리스트 컴포넌트입니다.
// /frontend/app/components/ProductCommentListfull/AdminCommentList.tsx

interface AdminCommentListProps {
  adminContent: string | null;
  className: string | null;
  author: string;
}

/**
 * 상품평의 댓글 리스트 컴포넌트입니다.
 *
 * @component
 * @param {object} props - 컴포넌트에 전달되는 props
 * @param {string | null} adminContent - DB를 통한 관리자 댓글 내용이 담긴 변수
 * @param {string | null} className - 부모 컴포넌트의 클래스 작성
 * class 기본값 :flex justify-center items-center p-3
 * @param {string} author - 작성자 이름
 * @returns {JSX.Element} 상품평의 댓글 리스트 컴포넌트
 */
const AdminCommentList = ({
  author,
  className,
  adminContent,
}: AdminCommentListProps) => {
  const adminCommentClassList = `AdminCommentList flex justify-center items-center p-3 ${className}`;
  return (
    <li className={adminCommentClassList}>
      <ul className="w-full h-full flex flex-col justify-center items-start">
        <li className="h-1/5">{author}</li>
        <li className="w-full h-4/5 outline outline-1 flex justify-start items-center p-4">
          {adminContent}
        </li>
      </ul>
    </li>
  );
};

export default AdminCommentList;
