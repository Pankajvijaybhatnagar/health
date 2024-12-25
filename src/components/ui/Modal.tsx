import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-lg relative"> {/* Keep the width flexible */}
        
        {/* Close Button */}
        <button
          className="absolute top-0 right-4 text-[30px] text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
