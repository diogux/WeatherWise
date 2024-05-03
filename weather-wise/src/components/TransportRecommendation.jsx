// components/TransportRecommendation.jsx
import React from 'react';

const TransportRecommendation = ({ weather }) => {
  const { precipitation } = weather;

  const getTransportAdvice = () => {
    if (precipitation === 'High') {
      return "Consider taking the train or bus instead of driving.";
    } else if (precipitation === 'Moderate') {
      return "Weather is not ideal for driving. Consider public transport options.";
    } else if (precipitation === 'Low') {
      return "Great weather for a road trip. Enjoy the drive!";
    }
  };

  return (
    <div className="transport-box bg-green-200 p-4 m-4">
      <h3 className="text-lg font-bold">Recommended Mode of Transport</h3>
      <p>{getTransportAdvice()}</p>
    </div>
  );
};

export default TransportRecommendation;
