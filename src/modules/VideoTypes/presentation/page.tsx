import React from "react";
import FeatureGrid from "../components/SocialmediaCards";

const page = () => {
  return (
    <div className="px-5 flex flex-col justify-center items-center gap-10 mb-10 lg:mb-20 text-center">
      <p className="text-4xl font-semibold p-5">
        Whatever you need, we&apos;ve got an editor for it.
      </p>
      <FeatureGrid />
    </div>
  );
};

export default page;
