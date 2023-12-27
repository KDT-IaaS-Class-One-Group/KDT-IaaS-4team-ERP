import React from 'react';

interface BtnProps {
  textContent: string;
  onClick: () => void;
}

/**
 * 
 * @param textContent : string - 버튼 내용 텍스트
 * @param onClick : () => void - 버튼 누를 때 실행할 함수
 * @returns btn : JSX.Element - 버튼 컴포넌트
 */
const Btn: React.FC<BtnProps> = ({ textContent, onClick }) => {
  return (
    <button onClick={onClick}>{textContent}</button>
  );
}

export default Btn;
