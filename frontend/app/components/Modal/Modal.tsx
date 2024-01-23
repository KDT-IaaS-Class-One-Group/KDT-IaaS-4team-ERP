// Modal.tsx

import React from 'react';

interface ModalProps {
    isOpen: boolean;    // 모달이 열려있는지 여부를 나타내는 prop
    onClose: () => void; // 모달을 닫기 위한 콜백 함수
    title: string;       // 모달의 제목
    message: string;     // 모달에 표시될 메시지
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
    // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                {/* 모달 헤더 */}
                <div className="modal-header">
                    <h2>{title}</h2>
                    {/* 닫기 버튼 클릭 시 onClose 콜백 함수 호출 */}
                    <button onClick={onClose}>닫기</button>
                </div>
                {/* 모달 본문 */}
                <div className="modal-body">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
