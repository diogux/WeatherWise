import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import distritos from '../data/Portugal.json';

const ForecastMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [map, setMap] = useState(null);

  const mapVHIToColor = (vhi) => {
    return '#808080'; // Grey for all districts
  };

  const styleFunction = (feature) => {
    const fillColor = mapVHIToColor(0); // Dummy VHI value
    return {
      fillColor: fillColor,
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7
    };
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

  useEffect(() => {
    const sunIcon = new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/3915/3915152.png",
      iconSize: [32, 32],
    });

    const cloudIcon = new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/3915/3915152.png",
      iconSize: [32, 32],
    });

    const mainLocations = [
      { name: 'Lisbon', coordinates: [38.7223, -9.1393], icon: sunIcon },
      { name: 'Porto', coordinates: [41.1579, -8.6291], icon: cloudIcon },
      // Add more main locations as needed
    ];

    if (map) {
      mainLocations.forEach(location => {
        const { name, coordinates, icon } = location;
        const marker = L.marker(coordinates, { icon }).addTo(map);
        marker.bindPopup(name);
      });
    }
  }, [map]);

  return (
    <div>
      <MapContainer
        center={[39.3999, -8.2245]}
        zoom={6.5}
        style={{ height: '70vh' }}
        dragging={true}
        whenCreated={setMap}
      >
        <GeoJSON data={distritos.features} onEachFeature={onEachCity} style={styleFunction} />
      </MapContainer>
    </div>
  );
};

export default ForecastMap;
