import React, { ReactNode } from "react";
import BtnMore from "./BtnMore";

const Title: React.FC<{
  children: ReactNode;
  linkRef?: string;
  fontSize?: String;
  fontWeight?: number;
  family: String;
  marginTop?: String;
  marginRight?: String;
  marginBottom?: String;
  marginLeft?: String;
}> = ({ children, linkRef, fontSize, fontWeight, family, marginTop, marginRight, marginBottom, marginLeft }) => {
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
