"use client"
import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }: {isOpen: boolean , onClose: () => void , children: React.ReactNode}) => {
  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event: { target: unknown; currentTarget: unknown; }) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-10  transition-opacity"></div>
          <div
            className="bg-white w-full  lg:w-9/12   z-10 overflow-auto lg:max-h-[50rem] md:max-h-[40rem] max-h-[48rem]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="p-8">
              <div className="flex justify-end relative p-2 mt-4 md:mt-0">
                <button
                  className="bg-transparent focus:outline-none md:relative fixed"
                  onClick={onClose}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleOverlayClick}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Modal;
