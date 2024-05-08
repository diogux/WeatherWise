import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import distritos from '../data/Portugal.json';

const TravelMap = () => {
  const [selectedCondition, setSelectedCondition] = useState('humidity'); // Default to humidity
  const [map, setMap] = useState(null);

  const conditions = {
    humidity: {
      low: '#add8e6',  // Light Blue
      medium: '#0000ff', // Blue
      high: '#00008b' // Dark Blue
    },
    visibility: {
      good: '#90ee90',  // Light Green
      moderate: '#008000', // Green
      poor: '#006400' // Dark Green
    },
    precipitation: {
      none: '#ffffe0', // Light Yellow
      low: '#ffd700', // Yellow
      high: '#ff8c00' // Dark Orange
    }
  };

  const getColorForCondition = (feature) => {
    const value = feature.properties[selectedCondition]; // assuming properties contain 'humidity', 'visibility', 'precipitation'
    switch(selectedCondition) {
      case 'humidity':
        return value > 80 ? conditions.humidity.high :
               value > 40 ? conditions.humidity.medium : conditions.humidity.low;
      case 'visibility':
        return value === 'Good' ? conditions.visibility.good :
               value === 'Moderate' ? conditions.visibility.moderate : conditions.visibility.poor;
      case 'precipitation':
        return value === 'High' ? conditions.precipitation.high :
               value === 'Low' ? conditions.precipitation.low : conditions.precipitation.none;
      default:
        return '#808080'; // default grey if something goes wrong
    }
  };

  const styleFunction = (feature) => ({
    fillColor: getColorForCondition(feature),
    weight: 1,
    opacity: 1,
    color: 'white',
    fillOpacity: 0.7
  });

  return (
    <div>
      <div style={{ margin: '20px 0' }} className='bg-black/30 rounded-lg'>
        <label>Select Condition: </label>
        <select onChange={(e) => setSelectedCondition(e.target.value)} value={selectedCondition}>
          <option value="humidity">Humidity</option>
          <option value="visibility">Visibility</option>
          <option value="precipitation">Precipitation</option>
        </select>
      </div>
      <MapContainer center={[39.3999, -8.2245]} zoom={6.5} style={{ height: '70vh' }} dragging={true} whenCreated={setMap}>
        <GeoJSON data={distritos.features} style={styleFunction} />
      </MapContainer>
      {/* Implement the legend here based on selectedCondition */}
    </div>
  );
};

export default TravelMap;
