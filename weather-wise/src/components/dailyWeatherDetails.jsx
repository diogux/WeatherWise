import React from 'react';
import './dailyWeatherDetails.css';

const DailyWeatherDetails = ({ location, wind, humidity }) => {
  const mondayDetails = {
    day: 'Tuesday',
    icon: '☀️',
    pressure: "1002mb",
    sunset: "20h34",
  };

  return (
    <div className="daily-weather-details bg-white/70 text-grey">
      <table>
        <tbody>
          <tr>
            <td><strong>Location:</strong></td>
            <td>{location}</td>
          </tr>
          <tr>
            <td><strong>Day:</strong></td>
            <td>{mondayDetails.day}</td>
          </tr>
          <tr>
            <td><strong>Pressure:</strong></td>
            <td>{mondayDetails.pressure}</td>
          </tr>
          <tr>
            <td><strong>Sunset:</strong></td>
            <td>{mondayDetails.sunset}</td>
          </tr>
          <tr>
            <td><strong>Visibility:</strong></td>
            <td>24km</td>
          </tr>
          <tr>
            <td><strong>Humidity:</strong></td>
            <td>{humidity}%</td>
          </tr>
          <tr>
            <td><strong>Wind:</strong></td>
            <td>{wind} km/h</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DailyWeatherDetails;
