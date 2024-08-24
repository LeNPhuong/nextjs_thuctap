import React from "react";

const Price: React.FC<{ fontSize?: string }> = ({ fontSize = "14px" }) => {
  return (
    <div style={{ fontSize: fontSize }}>
      <p className="text-rgb-custome-8 mr-[10px] line-through inline-block">
        AED 32.00
      </p>
      <p className="text-rgb-custome-3 inline-block">AED 25.60</p>
    </div>
  );
};

export default Price;
