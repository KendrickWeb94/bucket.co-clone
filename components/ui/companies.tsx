import React from "react";
import company1 from "@/assets/homepage/svgs/icon1.svg";
import company2 from "@/assets/homepage/svgs/icon2.svg";
import company3 from "@/assets/homepage/svgs/icon3.svg";
import company4 from "@/assets/homepage/svgs/icon4.svg";
import company5 from "@/assets/homepage/svgs/icon5.svg";
import company6 from "@/assets/homepage/svgs/icon6.svg";
import Image from "next/image";

export const Companies = () => {
  return (
    <>
      <div className=" w-full flex items-center justify-center flex-col gap-6 min-h-[30vh]">
        <p className="text-gray-dark">Trusted by the top tech companies</p>
        <div className="w-full flex items-start justify-center gap-12 flex-wrap">
          <Image src={company1} alt="company" />
          <Image src={company2} alt="company" />
          <Image src={company3} alt="company" />
        </div>
      </div>
      <div className=" w-full flex items-center justify-center flex-col gap-6 min-h-[30vh]">
        <p className="text-gray-dark">Backed by world-class product leaders</p>
        <div className="w-full flex items-start justify-center gap-12 flex-wrap">
          <Image src={company4} alt="company" />
          <Image src={company5} alt="company" />
          <Image src={company6} alt="company" />
        </div>
      </div>
    </>
  );
};
