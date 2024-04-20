import '../App.css'
import {Button} from "@/components/ui/button" 
import Navbar from '../components/navbar'
import WeeklyWeatherForecast from '@/components/weekly_forecast';
import DailyWeatherDetails from '@/components/dailyWeatherDetails';
import VHImap from '../components/VHImap' 

function Forecast() {

  return (
    <>
<div className="background-containerflex-col min-h-screen">
      <Navbar></Navbar>
        <div className="mx-auto w-full flex-left px-40 mt-20 mb-10">
            <h2 className="text-4xl font-bold text-grey">Forecast</h2>
        </div>
          <p className="text-2xl font-bold text-white/80 px-40">Week</p>
        <div className='flex justify-left mx-40'>  
          <WeeklyWeatherForecast></WeeklyWeatherForecast>
        </div>
          <p className="text-2xl font-bold text-white/80 px-40 mt-10">Today</p>
        <div className='flex justify-left mx-40'>  
          <DailyWeatherDetails></DailyWeatherDetails>
          
        </div>
</div>

    </>
  );
}

export default Forecast

