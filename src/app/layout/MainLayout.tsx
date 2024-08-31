"use client";

import React, { ReactNode } from "react";
import { Footer, Header } from "../component";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
      </Provider>
    </>
  );
};

export default MainLayout;
