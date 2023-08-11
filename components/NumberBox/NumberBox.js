"use client";

import React from "react";

export const NumberBox = ({ num, unit }) => {
  return (
    <div className="flex flex-col items-center mt-4 pr-2 ">
      <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-16 h-16 sm:w-24 sm:h-24 text-2xl md:text-4xl mt-4 ">
        <div className="rounded-t-lg rounded-b-lg bg-[#cacbd366] w-full h-full opecity-0"></div>

        <div className="text-3xl absolute text-headerText z-10 font-bold font-redhat md:text-5xl font-mono ">
          {num}
        </div>

        <div className=" rounded-b-lg rounded-t-lg bg-[#9b9b9d4b] w-full h-full"></div>
      </div>
      <p className="text-lg mt-3 font-semibold text-subHeaderText  md:text-2xl ">
        {unit}
      </p>
    </div>
  );
};
