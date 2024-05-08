import { useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import concelhos from "../data/Concelhos.json";

const VHImap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [map, setMap] = useState(null);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const mapVHIToColor = (vhi) => {
    if (vhi < 15) {
      return "#8B0000"; // Maroon
    } else if (vhi < 30) {
      return "#A52A2A"; // Brown
    } else if (vhi < 45) {
      return "#FF0000"; // Red
    } else if (vhi < 60) {
      return "#FFA500"; // Orange
    } else if (vhi < 75) {
      return "#FFFF00"; // Yellow
    } else if (vhi < 90) {
      return "#ADFF2F"; // GreenYellow
    } else {
      return "#008000"; // Green
    }
  };

  const styleFunction = (feature) => {
    if (feature.properties.Concelho === "FAFE") {
      return {
        fillColor: "#FFFF00",
        weight: 1,
        opacity: 1,
        color: "white",
        fillOpacity: 0.7,
      };
    }
    const randomColor = getRandomColor();
    const vhiValue = Math.floor(Math.random() * 101);
    const fillColor = mapVHIToColor(vhiValue);
    return {
      fillColor: fillColor,
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  const onEachCity = (district, layer) => {
    if (district.properties && district.properties.Concelho) {
      layer.on({
        mouseover: (e) => {
          layer.bindTooltip(district.properties.Concelho).openTooltip();
        },
        mouseout: (e) => {
          layer.closeTooltip();
        },
      });
    }
  };

  const handleZoomToconcelho = () => {
    const layer = concelhos.features.find(
      (feature) => feature.properties.Concelho === searchTerm
    );
    if (layer) {
      map.fitBounds(layer.geometry.coordinates[0]);
    }
  };

  return (
    <div>
      <MapContainer
        center={[39.3999, -8.2245]}
        zoom={6.5}
        style={{ height: "70vh" }}
        dragging={true}
        whenCreated={setMap}
      >
        <GeoJSON
          data={concelhos.features}
          onEachFeature={onEachCity}
          style={styleFunction}
        />
      </MapContainer>
    </div>
  );
};

export default VHImap;
