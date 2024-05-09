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
      <div className="info-card bg-white/50 p-4 rounded-lg">
        <div className="flex flex-col items-center">
          {" "}
          {/* Flex column layout */}
          <div className="mb-4">
            {" "}
            {/* Add margin-bottom */}
            <FaInfoCircle size={24} color="#black" /> {/* Information icon */}
          </div>
          <p className="text-gray-900 text-left">
            {/* Information paragraph */}
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
      {/* <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
            <div className="mx-auto w-full flex-grow p-10 ">
            <h2 className="text-4xl font-bold text-grey">Health</h2>
            <div className="rating gap-1 bg-white/30 mt-10">
              <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
              <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-green-400"  />
              dá para clicar nos corações
            </div>
    <div className="weekly-forecast-table w-1/6 grow bg-white/50">
                <div className="day text-grey text">Current Air Quality: GOOD</div>
    </div>
            </div>
        </div> */}

      <div className="background-container flex-col min-h-screen">
        <Navbar />

        <div className="mx-auto w-full flex-left px-40 mt-10 mb-10">
          <h2 className="text-4xl font-bold text-grey">Health</h2>
        </div>

        <div className="flex justify-between px-40">
          <div className="w-1/2 pr-4">
            {" "}
            {/* Left side for the table */}
            <div className="flex justify-left">
              <div className="weekly-forecast-table w-1/6 grow bg-white/50">
                <div className="day text-grey text">
                  Current Air Quality: GOOD
                </div>
              </div>
            </div>
            <div className="flex justify-left">
              <AirQualityCard pollutants={pollutants} />
            </div>
            <div className="flex justify-left pt-10">
              <InfoCard />
            </div>
          </div>

          <div className="w-1/2 pl-4">
            {" "}
            {/* Right side for the map */}
            <div className="mb-2">
              {" "}
              {/* Add margin-bottom to the search */}
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
