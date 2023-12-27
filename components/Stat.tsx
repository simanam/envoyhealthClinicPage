import React from "react";
import { StatisticType } from "@/types/ProcedureType";

const stats: StatisticType[] = [
  {
    number: "10",
    label: "Years of Experience",
  },
  {
    number: "13K+",
    label: "Successful Treatments",
  },
  {
    number: "20",
    label: "Specialist Doctors",
  },
  {
    number: "18",
    label: "Supported Procedures",
  },
];

const Stat = () => {
  return (
    <div className="flex flex-row  justify-center gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col text-center justify-center items-center p-2"
        >
          <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-dark-grey rounded-lg flex justify-center items-center">
            <p className="text-xl md:text-2xl font-bold text-white">
              {stat.number}
            </p>
          </div>
          <p className="text-xs text-wrap">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stat;
