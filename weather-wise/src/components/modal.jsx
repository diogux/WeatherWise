// Modal.js
import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

const closeModal = () => {º
    const modal = document.getElementById('my_modal_2');
    modal.close();
    }
    

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
