// Btn.tsx는 버튼 컴포넌트입니다.
// 버튼을 커스텀할 때 사용합니다.

import React from "react";

interface BtnProps {
  textContent: string;
  className: string;
  onClick?: () => void; // Add onClick prop
}

/**
 *
 * @param textContent : string - 버튼 내용 텍스트
 * @param className : string - 버튼 클래스 이름
 * @param onClick : () => void - 클릭 이벤트 핸들러 함수
 * 호출 예시 onClick={() => handleCartToPayment(requestData)}
 * @returns btn : JSX.Element - 버튼 컴포넌트
 */

const Btn: React.FC<BtnProps> = ({ textContent, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {textContent}
    </button>
  );
};

export default Btn;
