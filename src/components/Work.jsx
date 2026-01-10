import React from "react";
import WorkCard from "./WorkCard";
import {
  calculateDuration,
  formatDuration,
  formatDateRange
} from "../components/Utils/dateUtils";

const Work = () => {
  // 🔹 Raw job data
  const jobs = [
    {
      key: "1",
      startDate: "2025-10-27",
      endDate: null,
      company: "SecNinjaz Technologies",
      role: "Full Stack Developer",
      location: "New Delhi, India",
      // desc: <ul className="list-disc">
      //     <li>Comming Soon...</li>
          
      //   </ul>,
      desc: <ul className="list-disc">
          <p>Comming Soon...</p>
          
        </ul>,
    },
    {
      key: "2",
      startDate: "2024-06-01",
      endDate: "2024-08-01",
      company: "iLearnings",
      role: "Full Stack Developer",
      location: "Pune, India",
      certificate:
        "https://drive.google.com/file/d/1J4OPXlBwsNUby6XC2lXnVzbo5hviflAD/view?usp=drive_link",
      desc: (
        <ul className="list-disc">
          <li>Developed responsive landing pages using HTML, Tailwind CSS, and React.js.</li>
          <li>Created web pages for training programs on Salesforce, Data Analysis, Python and Career guidance with the founder.</li>
          <li>Improved front-end development skills and met project deadlines.</li>
        </ul>
      ),
    },
    {
      key: "3",
      startDate: "2023-06-15",
      endDate: "2023-09-15",
      company: "SoftMaji Infotech",
      role: "Graphic Designer",
      location: "Lucknow, India",
      certificate:
        "https://drive.google.com/file/d/1CGQ6Su88Ez4t25IDksmUKfqeIR9scdc3/view?usp=drive_link",
      desc: (
        <ul className="list-disc">
          <li>Cloned the &quot;FeeFlow.in&quot; website using HTML, CSS, and JavaScript.</li>
          <li>Managed blog posts through the WordPress Admin Panel.</li>
          <li>Designed mockups and social media posts using Canva.</li>
          <li>Listed products on e-commerce platforms like Meesho and Flipkart..</li>
        </ul>
      ),
    },
    
  ];

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
