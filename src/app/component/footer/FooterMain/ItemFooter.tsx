import { footerIF } from "@/app/mock/FooterData";
import Link from "next/link";
import React from "react";
import TitleList from "./TitleList";

const ItemFooter: React.FC<{ data: footerIF }> = ({ data }) => {
  return (
    <div className="mr-[40px]">
      <TitleList>{data.title}</TitleList>
      <div className="flexCol gap-[30px]">
        {data.sublist.map((e, index) => (
          <div key={index}>
            <Link className="text-14 font-md" href={`${e.strLink}`}>
              {e.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemFooter;
