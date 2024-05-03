// components/ItemRecommendation.jsx
import React from 'react';

const ItemRecommendation = ({ weather }) => {
  const { precipitation, temperature } = weather;

  const getItemsToPack = () => {
    let items = ['Travel documents', 'Charger'];
    if (precipitation !== 'None') {
      items.push('Umbrella or raincoat');
    }
    if (temperature < 20) {
      items.push('Warm clothing');
    } else {
      items.push('Sunscreen and sunglasses');
    }
    return items.join(', ');
  };

  return (
    <div className="items-box bg-blue-100 p-4 m-4">
      <h3 className="text-lg font-bold">Items to Pack</h3>
      <p>{getItemsToPack()}</p>
    </div>
  );
};

export default ItemRecommendation;
