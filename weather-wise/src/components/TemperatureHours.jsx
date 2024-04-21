import React from 'react';
import './TemperatureHours.css';

const TemperatureHours = () => {
  // Dummy data for hourly temperatures and weather icons
  const hourlyData = [
    { time: "12h", temperature: "22°C", icon: "☀️" },
    { time: "13h", temperature: "23°C", icon: "🌤️" },
    { time: "14h", temperature: "22°C", icon: "⛅" },
    { time: "15h", temperature: "21°C", icon: "⛅" },
    { time: "16h", temperature: "20°C", icon: "🌤️" },
    { time: "17h", temperature: "19°C", icon: "🌤️" },
    { time: "18h", temperature: "18°C", icon: "☀️" },
  ];

  return (
    <div className="mt-3 ml-8 hourly-temperature-table bg-white/50 text-grey">
      <table className="table-fixed w-full">
        <tbody>
          {hourlyData.map((data, index) => (
            <tr key={index}>
              <td className=" py-2">{data.time}</td>
              <td className=" py-2">{data.temperature}</td>
              <td className=" py-2">{data.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TemperatureHours;
