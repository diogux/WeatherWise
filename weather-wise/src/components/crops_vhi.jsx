import { text } from "@fortawesome/fontawesome-svg-core";
import "./dailyWeatherDetails.css";

const VHIItems = [
  { range: "90-100", color: "#008000" },
  { range: "75-89", color: "#ADFF2F" },
  { range: "60-74", color: "#FFFF00" },
  { range: "45-59", color: "#FFB000" },
  { range: "30-44", color: "#CB6D51" },
  { range: "15-29", color: "#A52A2A" },
  { range: "0-14", color: "black" },
];

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

  // transform {vhi} in string
  let vhi = VHI.toString();

  if (vhi === "") {
    vhi = "#008000";
  }
  const findVHIForColor = (color) => {
    const item = VHIItems.find((item) => item.color === color);
    if (!item) {
      return "90-100";
    }
    return item ? item.range : "";
  };

  const vhiRange = findVHIForColor(VHI);

  return (
    <div className="bg-white/70 text-grey" style={divStyle}>
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
              <strong style={strongStyle}>VHI: &nbsp;&nbsp; [{vhiRange}]</strong>
            </td>
            <td style={tdStyle2}>
              {/* {VHI} */}
              <div style={{ color: vhi, backgroundColor: vhi }}>easter egg</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CropsVHI;
