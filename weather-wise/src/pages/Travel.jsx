import React, { useState } from 'react';
import Navbar from '../components/navbar';
import TravelWeatherAdvice from '@/components/TravelWeatherAdvice';
import TransportRecommendation from '@/components/TransportRecommendation';
import WeatherImpactedTravelTable from '@/components/WeatherImpactedTravelTable';
import ItemRecommendation from '@/components/ItemRecommendation';
import SearchMap from '@/components/search_map'; // Reuse your existing component
import TravelMap from '@/components/TravelMap';

function Travel() {
  const [selectedLocation, setSelectedLocation] = useState('Aveiro');
  const [weatherConditions, setWeatherConditions] = useState({
    wind: '10',
    humidity: '35',
    visibility: 'Good',
    precipitation: 'None'
  });

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    // Mockup function to update weather conditions based on location
    updateWeatherConditions(location);
  };

  const updateWeatherConditions = (location) => {
    // You could integrate an API here to get real data
    if (location === 'Lisboa') {
      setWeatherConditions({ wind: '10', humidity: '35', visibility: 'Good', precipitation: 'Low' });
    } else if (location === 'Porto') {
      setWeatherConditions({ wind: '15', humidity: '40', visibility: 'Moderate', precipitation: 'Moderate' });
    } else {
      setWeatherConditions({ wind: '12', humidity: '30', visibility: 'Poor', precipitation: 'High' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="background-container flex-col min-h-screen">
        <div className="mx-auto w-full flex-left px-40 mt-10">
          <h2 className="text-4xl font-bold text-grey">Travel</h2>
        </div>
        <div className="flex justify-between px-40">
          <div className="w-1/2 pr-4">
            <TravelWeatherAdvice location={selectedLocation} weather={weatherConditions} />
            <WeatherImpactedTravelTable weather={weatherConditions} />
            <ItemRecommendation weather={weatherConditions} />
          </div>
          <div className="w-1/2 pl-4">
            <div className="mb-2">
              <SearchMap placeholder="Search for a location" onLocationChange={handleLocationChange} />
            </div>
            <TransportRecommendation weather={weatherConditions} />
            <TravelMap location={selectedLocation} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;
