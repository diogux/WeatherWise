import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/navbar";
import VHImap from "../components/VHImap";
import SearchMap from "@/components/search_map_concelhos";
import PWSmap from "@/components/PWSmap";
import CropsVHI from "@/components/crops_vhi";
import ConcelhoColors from "../data/ConcelhoColors.json";
import { FaInfoCircle } from "react-icons/fa";
import concelhos from "../data/Concelhos.json";

function Crops() {
  const filterOptions = [
    { label: "Vegetation Health Index", value: "VHI" },
    { label: "Percentage of water in the soil", value: "PWS" },
  ];

  const [selectedLocation, setSelectedLocation] = useState("Aveiro");
  const [VHI, setVHI] = useState(""); // Initialize VHI state
  const [mapCenter, setMapCenter] = useState([39.3999, -8.2245]); 
  const [zoomLevel, setZoomLevel] = useState(6.5);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  
    for (const concelho of ConcelhoColors.concelhos) {
      if (concelho.name === location.toUpperCase()) {
        setVHI(concelho.color);
      }
    }
    console.log("Selected location:", location);
  
    const feature = concelhos.features.find((feature) =>
      feature.properties.Concelho.toUpperCase() === location.toUpperCase()
    );
  
    if (feature) {
      const coordinates = feature.geometry.coordinates[0]; // Coordenadas do primeiro polígono
  
      // Calcular a média das coordenadas x e y
      const centerX = coordinates.reduce((sum, coord) => sum + coord[0], 0) / coordinates.length;
      const centerY = coordinates.reduce((sum, coord) => sum + coord[1], 0) / coordinates.length;
  
      // Definir as coordenadas da média como o centro do mapa
      setMapCenter([centerY, centerX]); // Inverter a ordem para [latitude, longitude]
      setZoomLevel(8);
      console.log("Map center:", mapCenter);
      console.log("Zoom level:", zoomLevel);
    } else {
      console.log("Localização não encontrada no GeoJSON");
    }
  };
  

  const handleCityClick = (cityName) => {
    handleLocationChange(cityName);
  };

  const VHIItems = [
    { range: "90-100", color: "#008000" },
    { range: "75-89", color: "#ADFF2F" },
    { range: "60-74", color: "#FFFF00" },
    { range: "45-59", color: "#FFB000" },
    { range: "30-44", color: "#CB6D51" },
    { range: "15-29", color: "#A52A2A" },
    { range: "0-14", color: "black" },
  ];

  const PWSItems = [
    { color: "#00008B", range: "CC(>99)" },
    { color: "#FFA500", range: "[50, 60]" },
    { color: "#ADFF2F", range: "[40, 50]" },
    { color: "#008000", range: "[30, 40]" },
    { color: "#00FFFF", range: "[20, 30]" },
    { color: "#0000FF", range: "[10, 20}" },
    { color: "#FF0000", range: "PEP(>1)" },
  ];

  const [selectedFilter, setSelectedFilter] = useState("VHI"); // Set default to 'VHI'

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const VHIfilter = (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <table style={{ width: "100%" }}>
        <tbody>
          {VHIItems.map((item, index) => (
            <tr key={index}>
              <td
                className="legend-item"
                style={{ backgroundColor: item.color, width: "50%" }}
              ></td>
              <td
                className="legend-item bg-white/50 border"
                style={{
                  width: "50%",
                  textAlign: "center",
                }}
              >
                {item.range}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const PWSfilter = (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <table style={{ width: "100%" }}>
        <tbody>
          {PWSItems.map((item, index) => (
            <tr key={index}>
              <td
                className="legend-item "
                style={{ backgroundColor: item.color, width: "50%" }}
              ></td>
              <td
                className="legend-item bg-white/50 border"
                style={{ width: "50%", textAlign: "center" }}
              >
                {item.range}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const InfoCardVHI = () => {
    return (
      <div className="info-card bg-white/70 p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <FaInfoCircle size={24} color="#black" />
          </div>
          <p className="text-gray-600 text-center">
            The VHI, a product of NOAA/NESDIS, amalgamates multiple
            vegetation-related sub-indices derived from satellite observations.
            It offers timely and spatially consistent data, vital for detecting
            and monitoring drought and wildfire risks.
          </p>
        </div>
      </div>
    );
  };

  const InfoCardPWS = () => {
    return (
      <div className="info-card bg-white/70 p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <FaInfoCircle size={24} color="#black" />
          </div>
          <p className="text-gray-900 text-center">
            The Soil Moisture Index (SMI) from ECMWF is an indicator of the soil
            moisture available for plants, with a resolution of 16 km. It varies
            between the permanent wilting point (PWP) and field capacity (FC),
            with increasing evaporation efficiency. The index is represented in
            dark orange tones when below the PWP, between orange and blue for
            intermediate values, and dark blue when above the FC. The map uses
            the boundaries of the DRAPs.
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-white/90">Crops</h2>
        </div>
        <div className="flex justify-between">
          <div className="w-1/3" style={{ paddingRight: "0px" }}>
            <div>
              <select
                value={selectedFilter}
                onChange={handleFilterChange}
                className="border border-gray-300 rounded-md py-2 px-3 mb-2 block w-full appearance-none bg-white/50"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3csvg fill=\'%239DA5AB\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath d=\'M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e"), linear-gradient(transparent, transparent), linear-gradient(transparent, transparent)',
                  backgroundPosition: 'right 0.7em top 50%, 0 0',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.2em auto, 100%',
                }}
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {selectedFilter === "VHI" && VHIfilter}
            {selectedFilter === "PWS" && PWSfilter}
            {selectedFilter === "VHI" && (
              <CropsVHI location={selectedLocation} VHI={VHI} />
            )}
            <div className="flex justify-left pt-10">
              {selectedFilter === "VHI" && <InfoCardVHI />}
              {selectedFilter === "PWS" && <InfoCardPWS />}
            </div>
          </div>
          <div className="w-1/2 pl-20">
            <div className="mb-2">
              <SearchMap
                placeholder="Search for a location"
                onLocationChange={handleLocationChange}
              />
            </div>  
            {selectedFilter === "VHI" && <VHImap onCityClick={handleCityClick} center={mapCenter} zoom={zoomLevel} />}
            {selectedFilter === "PWS" && <PWSmap />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Crops;
