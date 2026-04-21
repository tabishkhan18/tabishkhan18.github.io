import { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { navLinks } from '../constants/navigation';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const getNavItemClass = (section) =>
    `my-2 w-1/2 text-md transition ease-in-out duration-200 rounded-full px-2 py-2 border cursor-pointer ${
      activeSection === section
        ? 'text-white border-neutral-500'
        : 'text-neutral-400 border-neutral-900 hover:text-white hover:border-neutral-500'
    }`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label className="flex flex-col gap-2 w-8 cursor-pointer" onClick={toggleMenu}>
        <div
          className={`rounded-2xl h-[3px] w-1/2 bg-neutral-400 duration-500 ${isOpen ? 'rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]' : ''}`}
        ></div>
        <div
          className={`rounded-2xl h-[3px] w-full bg-neutral-400 duration-500 ${isOpen ? '-rotate-45' : ''}`}
        ></div>
        <div
          className={`rounded-2xl h-[3px] w-1/2 bg-neutral-400 duration-500 place-self-end ${isOpen ? 'rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]' : ''}`}
        ></div>
      </label>

      <div
        className={`fixed top-16 right-0 w-3/4 h-full bg-neutral-900 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-black">
          <ul className="mt-4 flex flex-col items-center">
            {navLinks.map(({ label, to }) => (
              <li key={to} className={getNavItemClass(to)}>
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={setActiveSection}
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-neutral-500 text-xl mt-60 font-semibold font-mono items-end justify-center flex gap-1'>
          <p className='font-sans text-xs gap-1 items-center flex'>
            <AiOutlineCopyrightCircle size={14} />
          </p>
          <img className='h-5' src="/logo2.png" alt="" />
          <p className='text-xs font-sans'>2025.</p>
        </div>
      </div>
    </div>
  );
};

export default Menu
