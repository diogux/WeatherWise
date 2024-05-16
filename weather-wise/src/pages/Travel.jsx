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
  const [selectedCondition, setSelectedCondition] = useState("humidity");

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <Navbar />
      <div className="background-container flex-col min-h-screen overflow-hidden">
        <div className="mx-auto w-full flex-left px-40 mt-10">
          <h2 className="text-4xl font-bold text-white/90 mt-10">Travel</h2>
        </div>
        <div className="flex justify-between px-40 overflow-hidden">
          <div className="w-1/2 pr-4 mb-8 mt-14">
            <TravelWeatherAdvice
              location={selectedLocation}
              weather={weatherData.districts.find(d => d.id === selectedLocation)}
            />
            <ItemRecommendation weather={weatherData.districts.find(d => d.id === selectedLocation)} />
            <TransportRecommendation weather={weatherData.districts.find(d => d.id === selectedLocation)} />
            <div style={{ paddingTop: "30px" }}>
              <WeatherImpactedTravelTable weather={weatherData.districts.find(d => d.id === selectedLocation)} />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="mb-2 mt-5 flex">
              <SearchMap
                placeholder="Search for a location"
                onLocationChange={handleLocationChange}
              />
              <div className="flex ml-auto">
                <select
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  value={selectedCondition}
                  className="border border-gray-300 rounded-md py-2 px-3 block w-full max-w-xs appearance-none bg-white/50"
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
              </div>
            </div>
            <TravelMap
              location={selectedLocation}
              selectedCondition={selectedCondition}
              onLocationChange={handleLocationChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;
