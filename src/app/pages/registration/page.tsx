"use client";

import BodyContainer from "@/app/layout/BodyContainer";
import React, { Suspense } from "react";
import UserPage from "./UserPage";
import { useSearchParams } from "next/navigation";
import AmbassadorPage from "./AmbassadorPage";
import { NextPage } from "next";

const Page: NextPage<{}> = () => {
  const category = useSearchParams().get("category");

  return (
    <>
      <Suspense>
        <BodyContainer>
          {category === "user" && <UserPage />}
          {category === "ambassador" && <AmbassadorPage />}
          <div className="pb-[60px]"></div>
        </BodyContainer>
      </Suspense>
    </>
  );
};

export default Page;
