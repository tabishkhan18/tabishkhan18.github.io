import React from "react";
import WorkCard from "../../ui/WorkCard";
import {
  calculateDuration,
  formatDuration,
  formatDateRange
} from "../../utils/dateUtils";
import { jobs } from "../../constants/work";

const Work = () => {

  // 🔹 Enrich jobs (calculated ONCE)
  const items = jobs.map((job) => {
    const months = calculateDuration(job.startDate, job.endDate);

    return {
      ...job,
      date: formatDateRange(job.startDate, job.endDate),
      time: formatDuration(months),
      months, // keep numeric value for total calculation
    };
  });

  // 🔹 Total experience
  const totalMonths = items.reduce(
    (sum, item) => sum + item.months,
    0
  );

  return (
    <div className="bg-neutral-900 flex flex-col justify-center pb-36" id="work">
      <h1 className="heading text-center lg:py-20 py-10 uppercase text-white font-semibold text-xl">
        Work
      </h1>

      <div className="workCards py-10">
        <WorkCard items={items} />
      </div>

      <div className="totalworkex flex flex-col items-end lg:px-20 px-5">
        <h1 className="text-neutral-400 text-xl font-mono">
          Work experience
        </h1>
        <h1 className="italic text-white text-xl font-mono">
          {formatDuration(totalMonths)}
        </h1>
      </div>
    </div>
  );
};

export default Work;
