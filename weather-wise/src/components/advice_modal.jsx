import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain} from '@fortawesome/free-solid-svg-icons';

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
      <dialog id="my_modal_2" className="modal text-white">

        <div className="modal-box bg-grey">
          <h3 className="font-bold text-lg">Daily Advice</h3>
          <p className="py-4">Expect rainy weather today <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon></p>
          <b>It might be best to bring an umbrella!</b>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>Close</button>
        </form>
      </dialog>
  );
};

export default Modal;
