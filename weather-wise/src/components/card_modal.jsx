import React from 'react';
import './card.css';

function Card({ name, description, imageSrc }) {
  const openModal = () => {
    const modal = document.getElementById('my_modal_2');
    modal.showModal();
  };

  return (
    <div className="card w-70 h-70 bg-white/30 shadow-xl" onClick={openModal}>
      <figure><img src={imageSrc} alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p className='text-white'>{description}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
}

export default Card;
