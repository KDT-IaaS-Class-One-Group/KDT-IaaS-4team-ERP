import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
    return (
        <>
            {isOpen && (
                <>
                    <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
                    <div
                        className="modal fixed inset-0 z-50 flex items-center justify-center"
                        style={{ display: isOpen ? 'flex' : 'none' }}
                    >
                        <div className="modal bg-white p-4 rounded shadow-lg">
                            <div className="modal-header flex justify-between items-center border-b pb-2 mb-2">
                                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                                <button
                                    onClick={onClose}
                                    className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    확인
                                </button>
                            </div>
                            <div className="modal-body p-6">
                                <p className="text-gray-800">{message}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;
