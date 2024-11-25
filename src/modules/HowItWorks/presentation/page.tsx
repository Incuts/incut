import Image from "next/image";
import React from "react";
import DiscoveryCall from "@/core/assets/images/working1.png";
import Selection from "@/core/assets/images/working2.png";
import Kickoff from "@/core/assets/images/working3.png";
const page = () => {
  return (
    <div className="px-5 flex flex-col justify-center items-center gap-10 mb-10 lg:mb-20 text-center">
      <p className="text-3xl font-bold px-5">How Incuts Work</p>
      <div className="flex flex-row justify-between gap-2">
        <div className="relative">
          <Image src={DiscoveryCall} alt="img" />
          <div>
            <p>Discovery Call</p>
          </div>
          <div className="absolute top-0  text-center">
            <p className="bg-[#dfe8c0] h-10 w-10 rounded-full flex items-center justify-center">
              1
            </p>
          </div>
        </div>
        <div className="relative">
          <Image src={Selection} alt="img" />
          <div>
            <p>Editor Selection</p>
          </div>
          <div className="absolute top-0">
            <p className="bg-[#dfe8c0] h-10 w-10 rounded-full flex items-center justify-center">
              2
            </p>
          </div>
        </div>
        <div className="relative">
          <Image src={Kickoff} alt="img" />
          <div>
            <p>Editing Kickoff</p>
          </div>
          <div className="absolute top-0">
            <p className="bg-[#dfe8c0] h-10 w-10 rounded-full flex items-center justify-center">
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
