import { Title } from "@/app/component";
import { LineChart } from "@mui/x-charts";
import React from "react";

const Analytics: React.FC<{}> = ({}) => {
  return (
    <div className="w-full self-start px-[60px] mt-[30px]">
      <div className="flexRow w-full justify-between mb-[60px]">
        <div className="flexCol w-full max-w-[427px]">
          <Title family="font-v1" fontSize="37" fontWeight={400}>
            4565 Visitors
          </Title>
          <div>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9] }]}
              series={[
                {
                  data: [1, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={427}
              height={300}
            />
          </div>
        </div>
        <div className="flexCol w-full max-w-[427px]">
          <Title family="font-v1" fontSize="37" fontWeight={400}>
            AED1430 Total Purchases
          </Title>
          <div>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9] }]}
              series={[
                {
                  data: [1, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={427}
              height={300}
            />
          </div>
        </div>
      </div>
      <Title family="font-v1" fontSize="24" fontWeight={400}>
        Purchases by Product
      </Title>
      <div className="mb-[20px]"></div>
      <div className="border-[1px] border-[#000] w-full text-18 font-md">
        <div className="grid grid-cols-[repeat(3,1fr)] py-[10px] border-b-[1px] border-[#000]">
          <p className="pl-[55px]">Product</p>
          <p className="text-center">Qty</p>
          <p className="pr-[55px] text-right">Amount</p>
        </div>
        {Array.from({ length: 9 }, (_, e) => (
          <div className="grid grid-cols-[repeat(3,1fr)] py-[10px] text-18 font-md">
            <p className="pl-[55px]">Product Name</p>
            <p className="text-center">3</p>
            <p className="pr-[55px] text-right">AED 159</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
