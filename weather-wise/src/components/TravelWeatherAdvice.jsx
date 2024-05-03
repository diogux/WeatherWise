// components/TravelWeatherAdvice.jsx
import React from 'react';

const TravelWeatherAdvice = ({ location, weather }) => {
  const { precipitation, visibility } = weather;

  const getAdvice = () => {
    if (precipitation === 'High') {
      return "It's quite rainy today. Consider indoor activities or a visit to museums.";
    } else if (visibility === 'Poor') {
      return "Visibility is low, driving might be risky. Consider public transport options.";
    } else if (precipitation === 'Moderate') {
      return "Weather is not ideal for outdoor activities. Consider indoor options.";
    } else if (precipitation === 'Low') {
      return "Great weather for traveling. Enjoy your trip!";
    } else {
      return "It's quite rainy today. Consider indoor activities or a visit to museums.";
    }
  };

  return (
    <div className="advice-box bg-blue-200 p-4 m-4">
      <h3 className="text-lg font-bold">Travel Advice for {location}</h3>
      <p>{getAdvice()}</p>
    </div>
  );
};

export default TravelWeatherAdvice;
