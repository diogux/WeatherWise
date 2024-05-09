const AirQualityCard = ({ pollutants }) => {
  return (
    <div className="air-quality-card weekly-forecast-table grow bg-white/50">
      <table>
        <tbody>
          <tr>
            <th>Pollutant</th>

            <th>Measurement</th>
            <th>Status</th>
          </tr>
          {pollutants.map((pollutant) => (
            <tr key={pollutant.name}>
              <td>{pollutant.name}</td>
              <td>{pollutant.measurement}</td>
              <td>{pollutant.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AirQualityCard;
