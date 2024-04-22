import '../App.css';
import { Button } from "@/components/ui/button";
import Navbar from '../components/navbar';
import WeeklyWeatherForecast from '@/components/weekly_forecast';
import DailyWeatherDetails from '@/components/dailyWeatherDetails';
import ForecastMap from '@/components/ForecastMap';
import SearchMap from '@/components/search_map';
import TemperatureHours from '@/components/TemperatureHours';
import { useState } from 'react';

function Forecast() {


  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };



  return (
    <>
      <div className="background-container flex-col min-h-screen">
        <Navbar />
        <div className="mx-auto w-full flex-left px-40 mt-10 mb-10">
          <h2 className="text-4xl font-bold text-grey">Forecast</h2>
        </div>
        <div className="flex justify-between px-40">
          <div className="w-1/2 pr-4"> {/* Left side for the table */}
            <p className="text-2xl font-bold text-white/80">Week</p>
            <div className='flex justify-left'>  
              <WeeklyWeatherForecast />
            </div>
            <div className='flex justify-left'>
              <p className="text-2xl font-bold text-white/80 mt-10 mr-20">Today</p>
              <p className="text-2xl font-bold text-white/80 mt-10 ml-20">Hourly Temperature</p>
            </div>
            <div className='flex justify-left'>  
              <DailyWeatherDetails location={selectedLocation}/>
              <TemperatureHours />
            </div>
          </div>
          <div className="w-1/2 pl-4"> {/* Right side for the map */}
            <div className="mb-2"> {/* Add margin-bottom to the search */}
              <SearchMap placeholder="Search for a location" onLocationChange={handleLocationChange}/>
            </div>
            <ForecastMap />
          </div>
        </div>
      </div>
    </>
  );
}

export default Forecast;
