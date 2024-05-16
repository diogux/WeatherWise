import React from "react";
import "../App.css";
import Navbar from "../components/navbar";
import HealthMap from "../components/HealthMap";
import SearchMap from "../components/search_map";
import AirQualityCard from "../components/AirQualityCard";
import { FaInfoCircle } from "react-icons/fa";

function Health() {
  const pollutants = [
    { name: "PMS", measurement: "27mg/m3", status: "Normal" },
    { name: "NO", measurement: "354g/m³", status: "Good" },
    { name: "PM10", measurement: "103/m³", status: "Poor" },
  ];

  const InfoCard = ({ text }) => {
    return (
      <div className="info-card bg-white/70 p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <FaInfoCircle size={24} color="#black" />
          </div>
          <p className="text-gray-900 text-left">
            <b>PMS (Particulate Matter):</b> PMS refers to solid or liquid
            particles suspended in the air, originating from various sources
            such as vehicle emissions and wildfires. These particles can cause
            respiratory issues and impact air quality. <br />
            <br /> <b>NO (Nitrogen Oxide):</b> NO is a pollutant gas primarily
            produced by the burning of fossil fuels, such as those used in
            vehicles and power plants. It contributes to the formation of smog
            and acid rain, as well as respiratory problems. <br />
            <br />
            <b>PM10 (Particulate Matter 10):</b> PM10 refers to solid or liquid
            particles with a diameter of 10 micrometers or smaller, easily
            inhaled into the human respiratory system. They can cause irritation
            to the eyes, nose, and throat, as well as more serious respiratory
            issues.
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="background-container flex-col min-h-screen">
        <Navbar />
        <div className="mx-auto w-full flex-left px-40 mt-10 mb-3">
          <h2 className="text-4xl font-bold text-white/90">Health</h2>
        </div>
        <div className="flex justify-between px-40">
          <div className="w-1/2 pr-4">
            <div className="flex justify-left">
              <div className="weekly-forecast-table w-full grow bg-white/70 p-4 rounded-lg flex justify-between items-center mt-12">
                <div className="flex items-center">
                  <div className="day text-gray text mr-2 ml-40">Current Air Quality:</div>
                  <div className="day text-green-600 text">GOOD</div>
                </div>
                <div className="flex items-center">
                  <div className="day text-gray text mr-2">UV Levels:</div>
                  <div className="day text-orange-600 text mr-40">MEDIUM</div>
                </div>
              </div>
            </div>
            <div className="flex justify-left mt-2">
              <AirQualityCard pollutants={pollutants} />
            </div>
            <div className="flex justify-left mt-5">
              <InfoCard />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="mb-2">
              <SearchMap placeholder="Search for a location" />
            </div>
            <HealthMap />
          </div>
        </div>
      </div>
    </>
  );
}

export default Health;
