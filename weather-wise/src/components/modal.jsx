import React, { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button className="btn" onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" className="modal-backdrop" onClick={closeModal}>
            <button onClick={closeModal}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Modal;
