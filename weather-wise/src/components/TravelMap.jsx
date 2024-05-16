import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import distritos from "../data/Portugal.json";
import weatherData from "../data/weatherConditions.json";

const TravelMap = ({ selectedCondition, onLocationChange }) => {
  const [map, setMap] = useState(null);

  const getWeatherCondition = (id) => {
    const district = weatherData.districts.find((d) => d.id === id);
    return district ? district[selectedCondition] : null;
  };

  const conditionColors = {
    humidity: {
      'Low': '#add8f8', // < 40%
      'Moderate': '#4596e2', // 40-80%
      'High': '#000aaa', // > 80%
    },
    visibility: {
      'Poor': '#90ee60',
      'Moderate': '#00C000',
      'Good': '#006A10',
    },
    precipitation: {
      'Low': '#ffffe0',
      'Moderate': '#ffd700',
      'High': '#ff8c00',
    }
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
        },
        click: (e) => {
          onLocationChange(districtName);
        }
      });
    }
  };

  const renderLegend = () => {
    const currentColors = conditionColors[selectedCondition];
    return (
      <table className="legend">
        <caption style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          {selectedCondition.charAt(0).toUpperCase() + selectedCondition.slice(1)} Levels
        </caption>
        <tbody>
          {Object.entries(currentColors).map(([level, color]) => (
            <tr key={level}>
              <td style={{ backgroundColor: color, width: "20px", height: "20px" }}></td>
              <td style={{ paddingLeft: '5px' }}>{level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderTitle = (conditionValue) => {
    return (
      <div className="title">
        <h1>
          {selectedCondition.charAt(0).toUpperCase() +
            selectedCondition.slice(1)}{" "}
          Map
        </h1>
      </div>
    );
  };

  const mapConditionToColor = (conditionValue) => {
    if (selectedCondition === "humidity") {
      return conditionValue > 80
        ? "#000aaa"
        : conditionValue > 40
        ? "#4596e2"
        : "#add8f8";
    } else if (selectedCondition === "visibility") {
      return conditionValue === "Poor"
        ? "#90ee60"
        : conditionValue === "Moderate"
        ? "#00C000"
        : "#006A10";
    } else if (selectedCondition === "precipitation") {
      return conditionValue === "High"
        ? "#ff8c00"
        : conditionValue === "Low"
        ? "#ffffe0"
        : "#ffd700";
    }
    return "#808080"; // Default grey
  };

  const styleFunction = (feature) => {
    const conditionValue = getWeatherCondition(feature.properties.woe_name);
    return {
      fillColor: mapConditionToColor(conditionValue),
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  return (
    <div>
      <MapContainer
        center={[39.3999, -8.2245]}
        zoom={6.5}
        style={{ height: "70vh" }}
        whenCreated={setMap}
      >
        <GeoJSON
          data={distritos.features}
          style={styleFunction}
          onEachFeature={onEachCity}
        />
        <div
          className="uv-scale"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          {renderLegend()}
        </div>
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
        >
          {renderTitle()}
        </div>
      </MapContainer>
    </div>
  );
};

export default TravelMap;
