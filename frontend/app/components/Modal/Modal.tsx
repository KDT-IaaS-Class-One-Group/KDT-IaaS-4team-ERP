// Modal.tsx

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
    if (!isOpen) {
        return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={onClose}>닫기</button>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
