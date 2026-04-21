import React from 'react'
import SkillCard from '../../ui/SkillCard'
import { skills, otherSkills } from '../../constants/skills'
import { resumeLink } from '../../constants/profile'

const Skills = () => {
    return (
        <div className='bg-neutral-50 flex justify-between md:p-20 p-7' id='skills'>
            <div className="skillheading hidden lg:flex w-1/2">
                <img src="./skills.jpg" alt="image" className='w-[40rem] rounded-3xl grayscale-[50%]' />
            </div>
            <div className="skills lg:ps-28 lg:w-1/2">
                <h1 className="heading py-10 font-semibold text-xl">
                    MY SKILLS
                </h1>
                <div className="skillcards flex flex-wrap justify-between">
                    {skills.map((s) => (
                        <SkillCard key={s.name} skill={s.name} image={s.image} />
                    ))}
                </div>
                <h1 className="pt-10 uppercase font-semibold md:text-md text-sm">
                    Also some bunch of ordinary skills:
                </h1>
                <h1 className="py-3 md:pe-20 md:leading-loose text-neutral-500 uppercase font-semibold md:text-xl text-md">
                    {otherSkills}
                </h1>
                <a href={resumeLink} target='_blank' download>
                    <button className='mt-5 transition ease-in-out duration-300 md:px-5 px-3 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'>Get My Resume</button>
                </a>
            </div>
        </div>
    )
}

export default Skills
