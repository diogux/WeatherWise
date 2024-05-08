import { text } from "@fortawesome/fontawesome-svg-core";
import "./dailyWeatherDetails.css";

const CropsVHI = ({ location, VHI }) => {
  const tableStyle = {
    width: "100%",
  };

  const divStyle = {
    padding: "10px",
    marginTop: "10px",
    borderRadius: "10px",
  };

  const tdStyle = {
    padding: "10px",
    textAlign: "left", // Ensure text is always left-aligned
    width: "30%", // Set a fixed width for the left td
  };

  const tdStyle2 = {
    padding: "10px",
    textAlign: "left", // Ensure text is always left-aligned
    width: "70%", // Set a fixed width for the right td
  };

  const strongStyle = {
    fontWeight: "bold",
  };

  return (
    <div className="bg-white/50 text-grey" style={divStyle}>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={tdStyle}>
              <strong>Location:</strong>
            </td>
            <td style={tdStyle2}>{location}</td>
          </tr>
          <tr>
            <td style={tdStyle}>
              <strong style={strongStyle}>VHI:</strong>
            </td>
            <td style={tdStyle2}>{VHI}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CropsVHI;
