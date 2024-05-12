import React from 'react';
import './weekly_forecast.css';

const WeeklyWeatherForecast = ({ location }) => {
  // Adjusted weather data based on location
  const forecastDataByLocation = {
    'Lisboa': [
      { date: 21, day: 'Mon', icon: '☀️', high: 28, low: 20 },
      { date: 22, day: 'Tue', icon: '🌤️', high: 30, low: 22 },
      { date: 23, day: 'Wed', icon: '🌤️', high: 31, low: 23 },
      { date: 24, day: 'Thu', icon: '🌥️', high: 29, low: 21 },
      { date: 25, day: 'Fri', icon: '⛅', high: 28, low: 20 },
      { date: 26, day: 'Sat', icon: '🌤️', high: 27, low: 19 },
      { date: 27, day: 'Sun', icon: '☀️', high: 26, low: 18 },
    ],
    'Aveiro': [
      { date: 21, day: 'Mon', icon: '🌥️', high: 26, low: 18 },
      { date: 22, day: 'Tue', icon: '🌤️', high: 25, low: 17 },
      { date: 23, day: 'Wed', icon: '🌥️', high: 24, low: 17 },
      { date: 24, day: 'Thu', icon: '🌦️', high: 23, low: 16 },
      { date: 25, day: 'Fri', icon: '🌦️', high: 22, low: 15 },
      { date: 26, day: 'Sat', icon: '🌤️', high: 22, low: 15 },
      { date: 27, day: 'Sun', icon: '🌥️', high: 23, low: 16 },
    ],
    'Porto': [
      { date: 21, day: 'Mon', icon: '🌥️', high: 27, low: 19 },
      { date: 22, day: 'Tue', icon: '🌤️', high: 28, low: 20 },
      { date: 23, day: 'Wed', icon: '☀️', high: 26, low: 18 },
      { date: 24, day: 'Thu', icon: '🌦️', high: 22, low: 16 },
      { date: 25, day: 'Fri', icon: '🌧️', high: 20, low: 14 },
      { date: 26, day: 'Sat', icon: '🌧️', high: 19, low: 13 },
      { date: 27, day: 'Sun', icon: '⛈️', high: 18, low: 12 },
    ],
  };

  const selectedForecastData = forecastDataByLocation[location] || forecastDataByLocation['Lisboa'];

  return (
    <div className="weekly-forecast-table text-grey-700 bg-white/70">
      <table>
        <tbody>
          <tr>
            {selectedForecastData.map((data, index) => (
              <td key={index}>
                <div className="date text-gray-700">{data.date}</div>
                <div className="day text-gray-700">{data.day}</div>
                <div className="icon">{data.icon}</div>
                <div className="temperature ">{data.high}°C | {data.low}°C</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyWeatherForecast;
