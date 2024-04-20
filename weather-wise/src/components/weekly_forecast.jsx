import React from 'react';
import './weekly_forecast.css';

const WeeklyWeatherForecast = () => {
  // Sample data for the weekly forecast
  const forecastData = [
    { date: 21, day: 'Mon', icon: '☀️', high: 25, low: 18 },
    { date: 22, day: 'Tue', icon: '⛅', high: 23, low: 17 },
    { date: 23, day: 'Wed', icon: '🌦️', high: 22, low: 16 },
    { date: 24, day: 'Thu', icon: '🌧️', high: 20, low: 15 },
    { date: 25, day: 'Fri', icon: '⛈️', high: 19, low: 14 },
    { date: 26, day: 'Sat', icon: '🌧️', high: 18, low: 13 },
    { date: 26, day: 'Sun', icon: '🌦️', high: 21, low: 15 },
  ];

  return (
    <div className="weekly-forecast-table bg-white/50">
      <table>
        <tbody>
          <tr>
            {forecastData.map((data, index) => (
              <td key={index}>
                <div className="date text-grey">{data.date}</div>
                <div className="day text-grey">{data.day}</div>
                <div className="icon">{data.icon}</div>
                <div className="temperature">{data.high}°C | {data.low}°C</div>
                <div className="precipitation">{data.precipitation}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyWeatherForecast;
