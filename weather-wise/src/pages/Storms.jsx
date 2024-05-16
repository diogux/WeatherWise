import "../App.css";
import { FaInfoCircle } from "react-icons/fa";
import Navbar from "../components/navbar";
import StormsMap from "../components/StormsMap";
import StormInfoCard from "../components/stormInfoCard"; // Import the new component

function Storms() {
  const InfoCard = () => (
    <div className="info-card bg-white/70 p-4 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <FaInfoCircle size={24} color="black" />
        </div>
        <p className="text-gray-900 text-center">
          Our Storm Severity Index (SSI) gauges the intensity of storms and hurricanes, guiding preparedness and response. Ranging from minimal impact to extreme danger, it aids in proactive measures and disaster management. The map delineates vulnerable regions for better risk mitigation.
        </p>
      </div>
    </div>
  );

  const CriticalRegionsCard = () => (
    <div className="info-card bg-red-500/70 p-4 rounded-lg">
      <h3 className="text-white text-center font-bold mb-2 text-xl">Critical Regions</h3>
      <table className="text-white mx-auto">
        <thead>
          <tr>
            <th className="px-2">Region</th>
            <th className="px-2 pl-10">Coordinates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 text-center">Moscow</td>
            <td className="px-2 text-center pl-10">55.7558° N, 37.6173° E</td>
          </tr>
          <tr>
            <td className="px-2 text-center">Arizona</td>
            <td className="px-2 text-center pl-10">34.0489° N, 111.0937° W</td>
          </tr>
          <tr>
            <td className="px-2 text-center">Lisbon</td>
            <td className="px-2 text-center pl-10">39.3999° N, 8.2245° W</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const stormData = {
    stormName: "Warning: Hurricane Sandy",
    stormInfo: "Category 4 hurricane with winds up to 150 mph."
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="mx-auto w-full flex-grow pt-10 pl-20 relative">
          <h2 className="text-4xl font-bold text-white mb-3 ml-3">Storms and Hurricanes</h2>
          <div className="flex w-full mx-auto relative">
            <div className="w-full md:w-1/4 mb-4 md:mb-0 pr-8 mt-20">
              <div className="mb-10">
                <StormInfoCard
                  stormName={stormData.stormName}
                  stormInfo={stormData.stormInfo}
                />
              </div>
              <div className="mb-10">
              <CriticalRegionsCard />
              </div>
              <div className="mb-4">
                <InfoCard />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <StormsMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Storms;
