import React from "react";

const FieldCart: React.FC<{ title: string; result: string }> = ({ title, result }) => {
  return (
    <div className="flex flex-row justify-between font-v1 pb-[15px] mb-[15px] border-b-[1px] border-b-rgb-custome-11">
      <p>{title}</p>
      <p>{result}</p>
    </div>
  );
};

export default FieldCart;
