"use client";

import BodyContainer from "@/app/layout/BodyContainer";
import { NextPage } from "next";
import React from "react";
import UserPage from "./UserPage";
import { useSearchParams } from "next/navigation";
import AmbassadorPage from "./AmbassadorPage";

const page: NextPage<{}> = () => {
  const category = useSearchParams().get("category");

  return (
    <>
      <BodyContainer>
        {category === "user" && <UserPage />}
        {category === "ambassador" && <AmbassadorPage />}
        <div className="pb-[60px]"></div>
      </BodyContainer>
    </>
  );
};

export default page;
