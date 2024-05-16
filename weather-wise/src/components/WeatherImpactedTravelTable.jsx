import React from "react";
import weatherData from "../data/weatherConditions.json";

const WeatherImpactedTravelTable = ({ weather }) => {
  const { humidity, visibility, precipitation, wind } = weather;

  return (
    <>
      <style>
        {`
          .weather-table {
            width: 100%;
            margin-top: 1rem;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .weather-table thead {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
          }

          .weather-table th, .weather-table td {
            padding: 0.75rem 1rem;
            text-align: left;
          }

          .weather-table tbody tr:nth-child(even) {
            background-color: rgba(0, 0, 0, 0.05);
          }

          .weather-table tbody tr:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <table className="weather-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wind</td>
            <td>{wind || 'N/A'} km</td> {/* Placeholder if wind data is not available */}
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{humidity}%</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td>{visibility}</td>
          </tr>
          <tr>
            <td>Precipitation</td>
            <td>{precipitation}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WeatherImpactedTravelTable;
