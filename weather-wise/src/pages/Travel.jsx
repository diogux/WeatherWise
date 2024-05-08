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
    } else if (location === 'Aveiro') {
      setWeatherConditions({ wind: '12', humidity: '30', visibility: 'Poor', precipitation: 'High' });
    } else if (location === 'Coimbra') {
      setWeatherConditions({ wind: '10', humidity: '35', visibility: 'Good', precipitation: 'None' });
    } else if (location === 'Faro') {
      setWeatherConditions({ wind: '15', humidity: '20', visibility: 'Moderate', precipitation: 'Moderate' });
    } else if (location === 'Braga') {
      setWeatherConditions({ wind: '12', humidity: '30', visibility: 'Poor', precipitation: 'High' });
    } else if (location === 'Viana do Castelo') {
      setWeatherConditions({ wind: '10', humidity: '60', visibility: 'Good', precipitation: 'None' });
    } else if (location === 'Vila Real') {
      setWeatherConditions({ wind: '15', humidity: '40', visibility: 'Moderate', precipitation: 'Moderate' });
    } else if (location === 'Guarda') {
      setWeatherConditions({ wind: '12', humidity: '30', visibility: 'Poor', precipitation: 'High' });
    } else if (location === 'Castelo Branco') {
      setWeatherConditions({ wind: '10', humidity: '35', visibility: 'Good', precipitation: 'None' });
    } else if (location === 'Santarém') {
      setWeatherConditions({ wind: '15', humidity: '40', visibility: 'Moderate', precipitation: 'Moderate' });
    } else if (location === 'Leiria') {
      setWeatherConditions({ wind: '12', humidity: '30', visibility: 'Poor', precipitation: 'High' });
    } else if (location === 'Setúbal') {
      setWeatherConditions({ wind: '10', humidity: '35', visibility: 'Good', precipitation: 'None' });
    } else if (location === 'Évora') {
      setWeatherConditions({ wind: '15', humidity: '40', visibility: 'Moderate', precipitation: 'Moderate' });
    } else if (location === 'Beja') {
      setWeatherConditions({ wind: '12', humidity: '30', visibility: 'Poor', precipitation: 'High' });
    } else if (location === 'Portalegre') {
      setWeatherConditions({ wind: '10', humidity: '35', visibility: 'Good', precipitation: 'None' });
    } else if (location === 'Bragança') {
      setWeatherConditions({ wind: '15', humidity: '60', visibility: 'Moderate', precipitation: 'Moderate' });
    } else if (location === 'Viseu') { 
      setWeatherConditions({ wind: '12', humidity: '40', visibility: 'Poor', precipitation: 'High' });
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
          <div className="w-1/2 pr-4 mb-4 mt-4">
            <TravelWeatherAdvice location={selectedLocation} weather={weatherConditions} />
            <ItemRecommendation weather={weatherConditions} />
            <TransportRecommendation weather={weatherConditions} />
            <WeatherImpactedTravelTable weather={weatherConditions} />
          </div>
          <div className="w-1/2 pl-4">
            <div className="mb-2 mt-9">
              <SearchMap placeholder="Search for a location" onLocationChange={handleLocationChange} />
            </div>
            <TravelMap location={selectedLocation} />

          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;
