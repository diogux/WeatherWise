import React from 'react';
import './TemperatureHours.css';

const TemperatureHours = ({ location }) => {
  // Dummy data for hourly temperatures and weather icons
  const hourlyDataByLocation = {
    'Lisboa': [
      { time: "12h", temperature: "20°C", icon: "☀️" },
      { time: "13h", temperature: "21°C", icon: "🌤️" },
      { time: "14h", temperature: "22°C", icon: "⛅" },
      { time: "15h", temperature: "22°C", icon: "⛅" },
      { time: "16h", temperature: "21°C", icon: "☀️" },
      { time: "17h", temperature: "20°C", icon: "☀️" },
      { time: "18h", temperature: "19°C", icon: "☀️" },
    ],
    'Aveiro': [
      { time: "12h", temperature: "18°C", icon: "☀️" },
      { time: "13h", temperature: "19°C", icon: "🌤️" },
      { time: "14h", temperature: "19°C", icon: "⛅" },
      { time: "15h", temperature: "18°C", icon: "⛅" },
      { time: "16h", temperature: "17°C", icon: "🌤️" },
      { time: "17h", temperature: "17°C", icon: "🌤️" },
      { time: "18h", temperature: "16°C", icon: "☀️" },
    ],
    'Porto': [
      { time: "12h", temperature: "19°C", icon: "☀️" },
      { time: "13h", temperature: "20°C", icon: "🌤️" },
      { time: "14h", temperature: "19°C", icon: "⛅" },
      { time: "15h", temperature: "18°C", icon: "⛅" },
      { time: "16h", temperature: "18°C", icon: "🌤️" },
      { time: "17h", temperature: "17°C", icon: "🌤️" },
      { time: "18h", temperature: "16°C", icon: "☀️" },
    ],
  };

  const selectedHourlyData = hourlyDataByLocation[location] || hourlyDataByLocation['Lisboa'];

  return (
    <div className="mt-3 ml-8 hourly-temperature-table bg-white/50 text-grey">
      <table className="table-fixed w-full">
        <tbody>
          {selectedHourlyData.map((data, index) => (
            <tr key={index}>
              <td className="py-2">{data.time}</td>
              <td className="py-2">{data.temperature}</td>
              <td className="py-2">{data.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TemperatureHours;
