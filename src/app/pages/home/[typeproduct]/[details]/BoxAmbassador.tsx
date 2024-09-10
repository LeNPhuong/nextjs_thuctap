import { Title } from "@/app/component";
import ContentLayoutV2 from "@/app/layout/ContentLayoutV2";
import React from "react";
import AmbassadorSay from "./AmbassadorSay";

const BoxAmbassador = () => {
  return (
    <ContentLayoutV2>
      <Title family="font-v1" fontSize="22" fontWeight={500}>
        Product Name Goes Here
      </Title>
      <div className="mb-[15px]"></div>
      <div className="flexRow justify-between">
        {Array.from({ length: 2 }, (_, e) => (
          <AmbassadorSay key={e} />
        ))}
      </div>
    </ContentLayoutV2>
  );
};

export default BoxAmbassador;
