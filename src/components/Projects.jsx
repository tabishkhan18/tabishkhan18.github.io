import React from 'react'
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import ImageCarousel from './ImageCarousel';

const Projects = () => {
    const links = {
        github: {
            uber: "https://github.com/Tabishkhan18/Uber",
            todo: "https://github.com/Tabishkhan18/ToDo-Manager",
            triangle: "https://github.com/Tabishkhan18/Triangle-Calculator",
        },
        live: {
            uber: "https://uber-p6f3.onrender.com/",
            todo: "https://tabishkhan18.github.io/ToDo-Manager",
            triangle: "https://tabishkhan18.github.io/Triangle-Calculator",
        }
    }

    return (
        <div id='projects'>
            <div className="project bg-neutral-900 flex flex-col py-10">
                <h1 className="heading text-center lg:py-14 pb-10 uppercase text-white font-semibold text-xl">
                    Projects
                </h1>

                {/* Spotify */}
                <div className='projectcard bg-neutral-900 '>
                    <div className='flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly'>
                        <div className="skills lg:py-5 lg:pt-5 pt-5 px-5 lg:ps-5 lg:w-1/4">
                            <h1 className="heading py-10 uppercase text-white font-semibold text-xl">
                                Uber Clone
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Node.js
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Express.js
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    React
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    MongoDB
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Socket.io
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    JWT
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Tailwind
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Google APIs
                                </h1>
                            </div>
                            <h1 className="pt-5 text-neutral-400 leading-relaxed">
                                <span className='text-white font-semibold italic'>Uber Clone</span> – Developed a mobile-first Uber clone using the <span className='text-white font-semibold italic'>MERN Stack</span> with real-time ride updates via<span className='text-white font-semibold italic'> Socket.io </span>and live tracking through<span className='text-white font-semibold italic'> Google Maps API</span>. Implemented<span className='text-white font-semibold italic'> JWT authentication</span>, debounced<span className='text-white font-semibold italic'> Google Places API</span> calls for performance. The frontend was built with<span className='text-white font-semibold italic'> Vite + React</span> and styled using<span className='text-white font-semibold italic'> Tailwind CSS</span>.
                            </h1>
                            <div className="buttons flex gap-5 py-10">
                                <a href={links.github.uber} target='_blank'>
                                    <button className='font-semibold  transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500'>
                                        <TbBrandGithubFilled size={25} />
                                    </button>
                                </a>
                                <a href={links.live.uber} target='_blank'>
                                    <button className='font-semibold hover:rotate-45 transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black rounded-full p-5 relative right-10'>
                                        <BsArrowUpRight size={25} />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="aboutimage py-10 lg:pe-5">
                            {/* <img src="./spotify.png" alt="image" className='lg:w-[50rem] rounded-lg' /> */}
                            <ImageCarousel/>
                        </div>
                    </div>
                </div>


                {/* Todo Manager */}
                <div className='projectcard bg-neutral-900 border-y border-neutral-700'>
                    <div className='flex h-lvh lg:flex-row flex-col-reverse lg:items-center justify-evenly'>
                        <div className="aboutimage py-10 lg:pe-5">
                            <img src="./todo.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                        </div>
                        <div className="skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4">
                            <h1 className="heading py-10 uppercase text-white font-semibold text-xl">
                                Todo Manager
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Html
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Tailwind
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    JavaScript
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    React
                                </h1>
                            </div>
                            <h1 className="pt-5 text-neutral-400 leading-relaxed">
                                <span className='text-white font-semibold italic'>Todo Manager</span> – a responsive React-based website styled with Tailwind CSS, enabling <span className='text-white font-semibold italic'>task creation, editing, and deletion</span>. Integrated with <span className='text-white font-semibold italic'>local storage for offline functionality</span>, it ensures todos are preserved and reloaded seamlessly upon reopening the site.</h1>
                            <div className="buttons flex gap-5 py-10">
                                <a href={links.github.todo} target='_blank'>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500'>
                                        <TbBrandGithubFilled size={25} />
                                    </button>
                                </a>
                                <a href={links.live.todo} target='_blank'>
                                    <button className='font-semibold hover:rotate-45 transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black rounded-full p-5 relative right-10'>
                                        <BsArrowUpRight size={25} />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Triangle Calculator */}
                <div className='projectcard bg-neutral-900'>
                    <div className='flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly'>
                        <div className="skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4">
                            <h1 className="heading py-10 uppercase text-white font-semibold text-xl">
                                Triangle Calculator
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Html
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Tailwind
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    JavaScript
                                </h1>
                            </div>
                            <h1 className="pt-5 text-neutral-400 leading-relaxed">
                                <span className='text-white font-semibold italic'>Triangle Calculator</span> – a responsive website created using JavaScript, allowing users to <span className='text-white font-semibold italic'>create triangles</span> by inputting values and calculating properties like <span className='text-white font-semibold italic'>area, perimeter, and angles</span> with interactive <span className='text-white italic font-semibold'>event handling</span> and <span className='text-white italic font-semibold'>canvas drawing functions.</span>
                            </h1>
                            <div className="buttons flex gap-5 py-10">
                                <a href={links.github.triangle} target='_blank'>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500'>
                                        <TbBrandGithubFilled size={25} />
                                    </button>
                                </a>
                                <a href={links.live.triangle} target='_blank'>
                                    <button className='font-semibold hover:rotate-45 transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black rounded-full p-5 relative right-10'>
                                        <BsArrowUpRight size={25} />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="aboutimage py-10 lg:pe-5">
                            <img src="./triangle-calculator.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
