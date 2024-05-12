// Travel.js
import React, { useState } from "react";
import Navbar from "../components/navbar";
import TravelWeatherAdvice from "@/components/TravelWeatherAdvice";
import TransportRecommendation from "@/components/TransportRecommendation";
import WeatherImpactedTravelTable from "@/components/WeatherImpactedTravelTable";
import ItemRecommendation from "@/components/ItemRecommendation";
import SearchMap from "@/components/search_map";
import TravelMap from "@/components/TravelMap";
import weatherData from "../data/weatherConditions.json"; 

function Travel() {
  const [selectedLocation, setSelectedLocation] = useState("Aveiro");

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <Navbar />
      <div className="background-container flex-col min-h-screen">
        <div className="mx-auto w-full flex-left px-40 mt-10">
          <h2 className="text-4xl font-bold text-white/90">Travel</h2>
        </div>
        <div className="flex justify-between px-40">
          <div className="w-1/2 pr-4 mb-4 mt-4">
            <TravelWeatherAdvice
              location={selectedLocation}
              weather={weatherData.districts.find(d => d.id === selectedLocation)}
            />
            <ItemRecommendation weather={weatherData.districts.find(d => d.id === selectedLocation)} />
            <TransportRecommendation weather={weatherData.districts.find(d => d.id === selectedLocation)} />
            <div style={{ paddingTop: "50px" }}>
              <WeatherImpactedTravelTable weather={weatherData.districts.find(d => d.id === selectedLocation)} />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="mb-2 mt-9">
              <SearchMap
                placeholder="Search for a location"
                onLocationChange={handleLocationChange}
              />
            </div>
            <TravelMap location={selectedLocation} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;
