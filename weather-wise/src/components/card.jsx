import './card.css';

// eslint-disable-next-line react/prop-types
function Card({ name, description, imageSrc }) {
  return (
    <div className="card w-70 h-70 bg-white/50 shadow-xl">
      <figure><img src={imageSrc} alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title text-grey">{name}</h2>
        <p className='text-grey'>{description}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
}

export default Card;
