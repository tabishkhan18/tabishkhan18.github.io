import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Menu from './Menu';

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
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} onSetActive={setActiveSection}>
                            <li className={getNavItemClass('home')}>
                                Home
                            </li>
                        </Link>
                        <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} onSetActive={setActiveSection}>
                            <li className={getNavItemClass('skills')}>
                                Skills
                            </li>
                        </Link>
                        <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} onSetActive={setActiveSection}>
                            <li className={getNavItemClass('projects')}>
                                Projects
                            </li>
                        </Link>
                        <Link to='work' spy={true} smooth={true} offset={-100} duration={500} onSetActive={setActiveSection}>
                            <li className={getNavItemClass('work')}>
                                Work
                            </li>
                        </Link>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onSetActive={setActiveSection}>
                            <li className={getNavItemClass('about')}>
                                About
                            </li>
                        </Link>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onSetActive={setActiveSection}>
                            <li className={getNavItemClass('contact')}>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <button className="md:hidden"> <Menu /></button>
            </nav>
        </div>
    )
}

export default Navbar
