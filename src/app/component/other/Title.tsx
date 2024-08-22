import React, { ReactNode } from "react";
import BtnMore from "./BtnMore";

const Title: React.FC<{
  children: ReactNode;
  family: string;
  color?: string;
  linkRef?: string;
  fontSize?: string;
  fontWeight?: number;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}> = ({ children, linkRef, fontSize, fontWeight, family, marginTop, marginRight, marginBottom, marginLeft, color }) => {
  return (
    <div
      style={{
        marginTop: marginTop ? marginTop + "px" : 0,
        marginRight: marginRight ? marginRight + "px" : 0,
        marginBottom: marginBottom ? marginBottom + "px" : 0,
        marginLeft: marginLeft ? marginLeft + "px" : 0,
      }}
      className="flexRowV2 gap-[26px]"
    >
      <h1
        style={{
          fontSize: fontSize + "px",
          fontWeight: fontWeight,
          color: color,
        }}
        className={`${family}`}
      >
        {children}
      </h1>
      {linkRef && <BtnMore refLink="#">see all</BtnMore>}
    </div>
  );
};

export default Title;
