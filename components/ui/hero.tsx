import React from "react";
import Linear from "@/assets/product/linear-line.svg";
import Image from "next/image";
import { Button } from "./button";
import { PlayCircle } from "lucide-react";
import product from "@/assets/homepage/svgs/product-showcase.svg";

export const Hero = () => {
  return (
    <div className=" relative max-w-contain w-full mx-auto min-h-[70vh] h-auto">
      <Image src={Linear} alt="linear" className=" absolute top-0 z-0" />
      <div className=" z-10">
        <div className="py-12">
          <div className="space-y-7">
            <h1 className=" ds:text-[1.5rem]   sm:text-[2.5rem] md:text-[3rem]   inter-600 md:max-w-3xl">
              {" "}
              <span className=" underline">Actually</span> helping product teams
              build better features
            </h1>
            <p className=" md:max-w-xl text-gray-dark dark:text-gray-400">
              {" "}
              Automatically stay on top of feature adoption, satisfaction, and
              impact to{" "}
              <span className="text-teal-primary">
                build B2B products that customers love
              </span>
            </p>
            <div className="flex items-center flex-wrap gap-4">
              <Button size={"rounded"} variant={"rounded_primary"}>
                Get started for free
              </Button>
              <button className="bg-secondarybg px-5 text-white py-2 rounded-3xl text-sm flex items-center gap-3 ">
                <p>See how it works</p>
                <PlayCircle size={18} />
              </button>
            </div>
            <Image src={product} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
