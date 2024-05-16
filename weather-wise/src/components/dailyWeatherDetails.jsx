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
    <div className="daily-weather-details bg-white/70 text-gray-700 fixed-size">
      <style>
        {`
        .daily-weather-details {
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
        
        .fixed-size {
          width: 300px; /* Adjust width as needed */
          height: 330px; /* Adjust height as needed */
          white-space: nowrap; /* Ensure text does not wrap */
        }
      `}        
      </style>
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
