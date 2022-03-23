import React from "react";

const OverlappingCard = () => {
  return (
    <div className="overlapping-card">
      <div className="top-section">
        <div className="silver square box"></div>
        <div className="card-type"></div>
      </div>
      <div className="middle-section">
        <div className="16-digit-card-number"></div>
      </div>
    </div>
  );
};

export default OverlappingCard;
