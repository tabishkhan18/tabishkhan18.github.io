import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {

  return (
    <div className="bg-neutral-900 flex flex-col justify-center pb-36" id="work">

      <h1 className="heading text-center lg:py-20 py-10 uppercase text-white font-semibold text-xl">
        Work
      </h1>
      <div className="workCards py-10">
        <WorkCard />
      </div>
      <div className="totalworkex flex flex-col items-end lg:px-20 px-5">
        <h1 className="text-neutral-400 text-xl font-mono">Work experience</h1>
        <h1 className="italic text-white text-xl font-mono">5 Months</h1>
      </div>
    </div>
  );
};

export default Work;