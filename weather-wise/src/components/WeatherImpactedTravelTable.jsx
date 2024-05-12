import React from "react";
import weatherData from "../data/weatherConditions.json";

const WeatherImpactedTravelTable = ({ weather }) => {
  // For demo, assuming you want to always display the first district's weather
  const { humidity, visibility, precipitation, wind } = weather;

  const width50 = {
    width: "50%",
  };

  return (
    <table className="table rounded-lg bg-white/70 mt-4">
      <thead>
        <tr className="bg-black/80">
          <th>Parameter</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={width50}>Wind</td>
          <td style={width50}>{wind} km</td>{" "}
          {/* Wind data might not be in the JSON, show a placeholder */}
        </tr>
        <tr>
          <td style={width50}>Humidity</td>
          <td style={width50}>{humidity}%</td>
        </tr>
        <tr>
          <td style={width50}>Visibility</td>
          <td style={width50}>{visibility}</td>
        </tr>
        <tr>
          <td style={width50}>Precipitation</td>
          <td style={width50}>{precipitation}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherImpactedTravelTable;
