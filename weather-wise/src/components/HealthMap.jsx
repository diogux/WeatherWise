import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, SVGOverlay, ScaleControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import distritos from '../data/Portugal.json';

const HealthMap = ({ uvIndexData }) => { // Pass UV index data as a prop
  const [searchTerm, setSearchTerm] = useState('');
  const [map, setMap] = useState(null);

  // Define UV index levels and corresponding colors
  const uvLevels = {
    'Unavailable': '#808080',
    'Low': '#00FF00',
    'Moderate': '#FFFF00',
    'High': '#FFA500',
    'Very High': '#FF0000',
    'Extreme': '#800080'
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const UVtocolor = (vhi) => {
    if (vhi < 15) {
      return '#800080'; // Maroon
    } else if (vhi < 45) {
      return '#FF0000'; // Red
    } else if (vhi < 60) {
      return '#FFA500'; // Orange
    } else if (vhi < 75) {
      return '#FFFF00'; // Yellow
    } else {
      return '#008000'; // Green
    }
  };

  const styleFunction = (feature) => {
    const randomColor = getRandomColor();
    const vhiValue = Math.floor(Math.random() * 101);
    const fillColor = UVtocolor(vhiValue);
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

  const renderLegend = () => {
    return (
      <table className="legend">
        <caption>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginLeft: '5px' }}>UV Index Levels</span> {/* Caption */}
          </div>
        </caption>
        <tbody>
          {Object.entries(uvLevels).map(([level, color]) => (
            <tr key={level}>
              <td style={{ backgroundColor: color, width: '20px', height: '20px' }}></td>
              <td>{level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <MapContainer
        center={[39.3999, -8.2245]}
        zoom={6.5}
        style={{ height: '70vh', position: 'relative' }} // Position relative for containing the UV scale
        dragging={false}
        zoomControl={false}
        whenCreated={setMap}
      >
        <GeoJSON data={distritos.features} onEachFeature={onEachCity} style={styleFunction} />
        <div className="uv-scale" style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
          {renderLegend()}
        </div>
      </MapContainer>
    </div>
  );
};

export default HealthMap;
