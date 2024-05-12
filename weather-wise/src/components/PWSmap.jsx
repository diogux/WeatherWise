import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Rectangle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Map.css";
import concelhos from '../data/Concelhos.json';

const PWSmap = () => {
  const [map, setMap] = useState(null);

    const getRandomColor = () => {
    const colors = ["#00008B", "#0000FF", "#00FFFF", "#008000", "#ADFF2F", "#FFA500", "#FF0000"];
    const probabilities = [0.25, 0.25, 0.1, 0.15, 0.25, 0.05, 0.05]; // Adjust probabilities as needed
    let totalProb = 0;
    probabilities.forEach(prob => totalProb += prob);
    let rand = Math.random() * totalProb;
    for (let i = 0; i < colors.length; i++) {
      if (rand < probabilities[i]) {
        return colors[i];
      }
      rand -= probabilities[i];
    }
    // Fallback to random selection if probabilities don't sum to 1
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const onEachCity = (district, layer) => {
    if (district.properties && district.properties.Concelho) {
      layer.on({
        mouseover: (e) => {
          layer.bindTooltip(district.properties.Concelho).openTooltip();
        },
        mouseout: (e) => {
          layer.closeTooltip();
        }
      });
    }
  };


  const createRectangles = () => {
    return concelhos.features.map((district, index) => {
      const bounds = district.geometry.coordinates[0].map((coordinate) => [coordinate[1], coordinate[0]]);
      const color = getRandomColor();
      return <Rectangle key={index} bounds={bounds} color={color} stroke={false} fillOpacity={0.3}/>;
    });
  };

  const renderTitle = () => {
    return (
      <div className="title">
        <h1>PWS Map</h1>
      </div>
    );
  };

  return (
    <div>
      <MapContainer
        center={[39.3999, -8.2245]}
        zoom={6.5}
        style={{ height: '70vh' }}
        dragging={true}
        whenCreated={setMap}
      >
        <GeoJSON data={concelhos.features} onEachFeature={onEachCity} style={() => ({
    color: "#FFFFFF", // White color
    weight: 1 // Slimmer line weight
  })}/>
        {createRectangles()}
        <div
          className="title"
          style={{
            position: "absolute",
            top: "10px",
            left: "55px",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >{renderTitle()}
        </div>
      </MapContainer>
    </div>
  );
};

export default PWSmap;
