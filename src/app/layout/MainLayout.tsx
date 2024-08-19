"use client";

import React, { ReactNode } from "react";
import { Footer, Header } from "../component";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
