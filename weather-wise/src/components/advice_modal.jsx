import React from 'react';

const Modal = () => {
  const openModal = () => {
    const modal = document.getElementById('my_modal_2');
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_2');
    modal.close();
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal text-white">

        <div className="modal-box">
          <h3 className="font-bold text-lg">Daily Advice! (Press ESC or click outside to close)</h3>
          <p className="py-4">Mekie</p>
          <b>Hoje ta mega sol, cuidado</b>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
