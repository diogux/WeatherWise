import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import distritos from "../data/Portugal.json";
import weatherData from "../data/weatherConditions.json"; // Assuming this is the path to your JSON file

const TravelMap = () => {
  const [selectedCondition, setSelectedCondition] = useState("humidity");
  const [map, setMap] = useState(null);

  const getWeatherCondition = (id) => {
    const district = weatherData.districts.find((d) => d.id === id);
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
        },
      });
    }
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
      <select
        onChange={(e) => setSelectedCondition(e.target.value)}
        value={selectedCondition}
        className="border border-gray-300 rounded-md py-2 px-3 mb-2 block w-10% appearance-none bg-white/50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg fill='%239DA5AB' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath d='M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\"), linear-gradient(transparent, transparent), linear-gradient(transparent, transparent)",
          backgroundPosition: "right 0.7em top 50%, 0 0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1.2em auto, 100%",
        }}
      >
        <option value="humidity">Humidity</option>
        <option value="visibility">Visibility</option>
        <option value="precipitation">Precipitation</option>
      </select>
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
