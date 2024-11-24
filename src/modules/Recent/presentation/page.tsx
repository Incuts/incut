import React from "react";

const page = () => {
  return (
    <div className="px-5 flex flex-col justify-center items-center gap-10 mb-10 lg:mb-20 text-center">
      <p className="text-3xl font-bold px-5">
        Our editors are the{" "}
        <span className="bg-purple-300 rounded-sm">creative</span> behind top
        creators and marketing teams.
      </p>
      <p className="text-2xl font-bold">Recent Videos from our team:</p>
    </div>
  );
};

export default page;
