import { useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import concelhos from "../data/Concelhos.json";
import concelhoColors from "../data/ConcelhoColors.json";

const VHImap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [map, setMap] = useState(null);

  const getConcelhoColor = (concelhoName) => {
    const concelho = concelhoColors.concelhos.find(
      (concelho) => concelho.name === concelhoName
    );
    return concelho ? concelho.color : "#CCCCCC"; // Default color if not found
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
    const fillColor = getConcelhoColor(feature.properties.Concelho);
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
        style={{ height: "70vh" , position: 'relative'}}
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
