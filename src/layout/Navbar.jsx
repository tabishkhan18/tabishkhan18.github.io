import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Menu from '../ui/Menu';
import { navLinks } from '../constants/navigation';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const getNavItemClass = (section) =>
        `text-md transition ease-in-out duration-200 px-4 py-2 rounded-full border cursor-pointer ${
            activeSection === section
                ? 'text-white border-neutral-500'
                : 'text-neutral-400 border-neutral-900 hover:text-white hover:border-neutral-500'
        }`;

    return (
        <div>
            <nav className="navbar z-10 fixed top-0 right-0 left-0 flex justify-between items-center md:px-20 px-10 bg-neutral-900 h-16">
                <div className="logo flex items-center font-mono font-semibold text-xl text-white">
                    <img className='w-32' src="/logo2.png" alt="" />
                </div>
                <div className="menu hidden md:flex">
                    <ul className='flex lg:gap-5 gap-0'>
                        {navLinks.map(({ label, to }) => (
                            <Link
                                key={to}
                                to={to}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onSetActive={setActiveSection}
                            >
                                <li className={getNavItemClass(to)}>{label}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <button className="md:hidden"><Menu /></button>
            </nav>
        </div>
    )
}

export default Navbar
