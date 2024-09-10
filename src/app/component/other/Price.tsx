import React from "react";

const Price: React.FC<{
  fontSize?: string;
  price?: number;
  priceSale?: number;
}> = ({ fontSize = "14px", price, priceSale }) => {
  return (
    <div style={{ fontSize: fontSize }}>
      <p className="text-rgb-custome-8 mr-[10px] line-through inline-block">
        {(price && price) || "AED 32.00"} đ
      </p>
      <p className="text-rgb-custome-3 inline-block">
        {(price && priceSale && price - priceSale) || "AED 25.60"} đ
      </p>
    </div>
  );
};

export default Price;
