import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { PiCertificateFill } from "react-icons/pi";

const items = [
  {
    key: '1',
    date: 'June - Aug 2024',
    time: '2 months',
    company: 'iLearnings',
    role: 'Full Stack Developer Intern | React & Node',
    location: 'Pune, India',
    certificate: 'https://drive.google.com/file/d/1J4OPXlBwsNUby6XC2lXnVzbo5hviflAD/view?usp=drive_link',
    desc:
      <ul className='list-disc'>
        <li>Developed responsive landing pages using HTML, Tailwind CSS, and React.js.</li>
        <li>Created web pages for training programs on Salesforce, Data Analysis, Python and Career guidance with the founder.</li>
        <li>Improved front-end development skills and met project deadlines.</li>
      </ul>,
  },
  {
    key: '2',
    date: 'June - Sep 2023',
    time: '3 months',
    company: 'SoftMaji Infotech',
    role: 'Graphic Designer Intern | Canva',
    location: 'Lucknow, India',
    certificate: 'https://drive.google.com/file/d/1CGQ6Su88Ez4t25IDksmUKfqeIR9scdc3/view?usp=drive_link',
    desc:
      <ul className='list-disc'>
        <li>Cloned the &quot;FeeFlow.in&quot; website using HTML, CSS, and JavaScript.</li>
        <li>Managed blog posts through the WordPress Admin Panel.</li>
        <li>Designed mockups, social media posts, and video reels for marketing using Canva</li>
        <li>Listed products on e-commerce platforms like Meesho and Flipkart.</li>
      </ul>,
  },


];

const WorkCard = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="bg-black w-full mx-auto mt-10">
      {items.map((item) => (
        <div key={item.key} className="border-y border-neutral-800 overflow-hidden">
          <button onClick={() => toggleAccordion(item.key)} className="w-full text-left bg-neutral-900 hover:bg-neutral-950 focus:bg-neutral-950 text-white focus:outline-none flex items-center">
            <div className="workEx cursor-pointer w-full flex items-center transition-all ease-in-out duration-300 text-white py-5 px-5">
              <div className="box flex justify-start ps-5 lg:ps-14 lg:gap-28 items-center w-1/3">
                <div className="duration">
                  <div className="year lg:text-xl text-base font-thin text-neutral-400">
                    {item.date}
                  </div>
                  <div className="time lg:text-base text-sm font-thin text-neutral-400">
                    {item.time}
                  </div>
                </div>
              </div>
              <div className=" flex lg:flex-row flex-col px-5 lg:ps-0 justify-start items-start lg:items-center text-xl lg:gap-28 w-2/3">
                <div className="company font-mono lg:w-1/3 text-base lg:text-xl">
                  {item.company}
                </div>
                <h1 className='role font-mono lg:w-2/3 text-base lg:text-xl'>
                  {item.role}
                </h1>
              </div>
              <FaChevronRight className={`text-white transition-transform duration-300 ${activeKey === item.key ? 'rotate-90' : ''}`} />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeKey === item.key ? 'max-h-96' : 'max-h-0'
              }`}
          >
            <div className="px-10 flex justify-between items-center lg:px-36 py-5 text-sm lg:text-lg bg-neutral-800 text-neutral-300">
              <a href={item.certificate} target='_blank' className='cursor-pointer text-neutral-400 hover:text-white hover:scale-110 transition-all duration-200 ease-in-out'>
                <PiCertificateFill size={30}/>
              </a>
              <div>
                {item.location}
              </div>
            </div>
            <div className="px-10 lg:px-40 py-5 text-sm lg:text-lg bg-neutral-800 text-neutral-300">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;