import React from "react";

const StormInfoCard = ({ stormName, stormInfo }) => {
  return (
    <div className="storm-info-card bg-white/70 p-4 rounded-lg mb-4">
      <h3 className="text-gray-900 text-center font-bold mb-2 text-xl">{stormName}</h3>
      <p className="text-gray-900 text-center">{stormInfo}</p>
    </div>
  );
};

export default StormInfoCard;
