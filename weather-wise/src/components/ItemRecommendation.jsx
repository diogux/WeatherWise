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
    <div className="items-box text-gray-700 bg-white/70 p-4 rounded-lg w-full mr-4 mb-4">
      <h3 className="text-lg font-bold">Items to Pack 🎒</h3>
      <p>{getItemsToPack()}</p>
    </div>
  );
};

export default ItemRecommendation;
