import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import distritos from '../data/Portugal.json';
import weatherData from '../data/weatherConditions.json'; // Assuming this is the path to your JSON file

const TravelMap = () => {
  const [selectedCondition, setSelectedCondition] = useState('humidity');
  const [map, setMap] = useState(null);
  
  const getWeatherCondition = (id) => {
    const district = weatherData.districts.find(d => d.id === id);
    return district ? district[selectedCondition] : null;
  };

  const onEachCity = (district, layer) => {
    const districtName = district.properties && district.properties.woe_name;
    if (districtName) {
      layer.on({
        mouseover: (e) => {
          layer.bindTooltip(districtName).openTooltip();
        },
        mouseout: (e) => {
          layer.closeTooltip();
        }
      });
    }
  };

  const mapConditionToColor = (conditionValue) => {
    if (selectedCondition === 'humidity') {
      return conditionValue > 80 ? '#000aaa' : conditionValue > 40 ? '#4596e2' : '#add8f8';
    } else if (selectedCondition === 'visibility') {
      return conditionValue === 'Poor' ? '#90ee60' : conditionValue === 'Moderate' ? '#00C000' : '#006A10';
    } else if (selectedCondition === 'precipitation') {
      return conditionValue === 'High' ? '#ff8c00' : conditionValue === 'Low' ? '#ffffe0' : '#ffd700';
    }
    return '#808080'; // Default grey
  };

  const styleFunction = (feature) => {
    const conditionValue = getWeatherCondition(feature.properties.woe_name);
    return {
      fillColor: mapConditionToColor(conditionValue),
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7
    };
  };

  return (
    <div>
      <select onChange={(e) => setSelectedCondition(e.target.value)} value={selectedCondition}>
        <option value="humidity">Humidity</option>
        <option value="visibility">Visibility</option>
        <option value="precipitation">Precipitation</option>
      </select>
      <MapContainer center={[39.3999, -8.2245]} zoom={6.5} style={{ height: '70vh' }} whenCreated={setMap}>
        <GeoJSON data={distritos.features} style={styleFunction} onEachFeature={onEachCity} />
      </MapContainer>
    </div>
  );
};

export default TravelMap;
