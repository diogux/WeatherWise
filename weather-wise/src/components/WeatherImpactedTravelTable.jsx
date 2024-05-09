import React from 'react';
import weatherData from '../data/weatherConditions.json';

const WeatherImpactedTravelTable = ({weather}) => {
  // For demo, assuming you want to always display the first district's weather
  const { humidity, visibility, precipitation, wind } = weather;

  return (
    <table className="table rounded bg-white/70 mt-4 ">
      <thead>
        <tr className="bg-black/80">
          <th>Parameter</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wind</td>
          <td>{wind} km</td> {/* Wind data might not be in the JSON, show a placeholder */}
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
