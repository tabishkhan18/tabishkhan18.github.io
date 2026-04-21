import React from 'react'
import { aboutBio } from '../../constants/personal';

const About = () => {
  return (
    <div className='about bg-neutral-900 lg:px-28 px-10 lg:py-40 py-10' id='about'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className="skills lg:w-2/3">
          <h1 className="heading uppercase text-white font-semibold text-xl pb-10">
            My Story
          </h1>
          {aboutBio.map((paragraph, index) => (
            <h1 key={index} className="pt-5 font-mono  text-neutral-400 lg:pe-52 leading-relaxed">
              {paragraph}
            </h1>
          ))}
        </div>
        <div className="aboutimage lg:w-1/3 py-20 lg:py-0" >
          <img src="/story.jpg" alt="image" className='w-96 grayscale hover:grayscale-0 hover:scale-110 rounded-3xl transition ease-in-out duration-300 ' />
        </div>
      </div>
      <h1 className="lg:pt-32 italic text-center leading-loose text-white font-thin text-xl">
        &ldquo;Coding is like humor. When you have to explain it, it's bad.&rdquo; <span className='text-neutral-500'>-&lt;/Cory House &gt;</span>
      </h1>
    </div>
  )
}

export default About
