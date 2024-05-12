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
    } else if (precipitation === 'Low' && visibility === 'Good') {
      return "Great weather for traveling. Enjoy your trip!";
    } else {
      return "It's quite rainy today. Consider indoor activities or a visit to museums.";
    } 
  };

  return (
    <div className="advice-box rounded-lg text-gray-700 bg-white/70 p-4 w-full mr-4 mb-4 mt-5">
      <h3 className="text-lg font-bold">Travel Advice for {location} 📌</h3>
      <p>{getAdvice()}</p>
    </div>
  );
};

export default TravelWeatherAdvice;
