import React, { useState } from "react";
import Navbar from "../components/navbar";
import TravelWeatherAdvice from "@/components/TravelWeatherAdvice";
import TransportRecommendation from "@/components/TransportRecommendation";
import WeatherImpactedTravelTable from "@/components/WeatherImpactedTravelTable";
import ItemRecommendation from "@/components/ItemRecommendation";
import SearchMap from "@/components/search_map";
import TravelMap from "@/components/TravelMap";
import weatherData from "../data/weatherConditions.json"; // Import the weather data

function Travel() {
  const [selectedLocation, setSelectedLocation] = useState("Aveiro");
  const [weatherConditions, setWeatherConditions] = useState({
    wind: "10",
    humidity: "35",
    visibility: "Good",
    precipitation: "None",
  });

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    updateWeatherConditions(location);
  };

  const updateWeatherConditions = (location) => {
    // Find weather conditions from JSON data based on the location
    const locationWeather = weatherData.districts.find(
      (district) => district.id === location
    );
    if (locationWeather) {
      setWeatherConditions({
        ...weatherConditions, // Keep wind speed or update it if included in your JSON
        humidity: locationWeather.humidity,
        visibility: locationWeather.visibility,
        precipitation: locationWeather.precipitation,
      });
    } else {
      // Default or fallback weather conditions if the location is not found
      setWeatherConditions({
        wind: "10",
        humidity: "Unknown",
        visibility: "Unknown",
        precipitation: "Unknown",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="background-container flex-col min-h-screen">
        <div className="mx-auto w-full flex-left px-40 mt-10">
          <h2 className="text-4xl font-bold text-grey">Travel</h2>
        </div>
        <div className="flex justify-between px-40">
          <div className="w-1/2 pr-4 mb-4 mt-4">
            <TravelWeatherAdvice
              location={selectedLocation}
              weather={weatherConditions}
            />
            <ItemRecommendation weather={weatherConditions} />
            <TransportRecommendation weather={weatherConditions} />
            <WeatherImpactedTravelTable weather={weatherConditions} />
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
