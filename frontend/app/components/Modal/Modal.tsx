
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
    // 모달이 열려 있을 때 body에 'overflow-hidden' 클래스 추가
    if (isOpen) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }


    //기본 상태
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div> */}
            <div className="modal bg-white p-4 rounded shadow-lg">
                <div className="modal-header flex justify-between items-center border-b pb-2 mb-2">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        닫기
                    </button>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
