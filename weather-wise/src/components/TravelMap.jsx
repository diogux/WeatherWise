// components/TravelMap.jsx
import React from 'react';
import ForecastMap from './ForecastMap';

const TravelMap = ({ location }) => {
  // Placeholder for a map. You might need to integrate an actual map API here.
  return (
    <div className="map-container bg-blue-300 p-4 m-4">
      <h3 className="text-lg font-bold">Map Showing Weather Conditions at {location}</h3>
      <p>(Map integration would go here)</p>
        <ForecastMap location={location} />
    </div>
  );
};

export default TravelMap;
