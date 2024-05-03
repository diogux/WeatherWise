// components/WeatherImpactedTravelTable.jsx
import React from 'react';

const WeatherImpactedTravelTable = ({ weather }) => {
  const { wind, humidity, visibility, precipitation } = weather;

  return (
    <table className="table-auto w-full mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th>Parameter</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wind</td>
          <td>{wind} km/h</td>
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
  );
};

export default WeatherImpactedTravelTable;
