import React from "react";
import { dataMenu } from "@/app/mock/MenuData";
import ItemList from "./ItemList";
import Btn from "../../other/Btn";

const BoxMenu: React.FC<{}> = () => {
  return (
    <div className="max-w-[1144px] mx-auto">
      <div className="flexRowV1 w-full">
        <div>
          <ul className="flexRow gap-[40px] relative">
            {dataMenu?.map((e, index) => (
              <ItemList data={e} key={index} />
            ))}
          </ul>
        </div>
        <Btn css="max-w-[156px] max-h-[55px] text-14 min-h-[55px] uppercase text-white">
          sell with us
        </Btn>
      </div>
    </div>
  );
};

export default BoxMenu;
