import React from 'react'
import SkillCard from './SkillCard'

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
                    <SkillCard skill="JavaScript" image="/skills/js.png" />
                    <SkillCard skill="React" image="/skills/react.png" />
                    <SkillCard skill="Node.js" image="/skills/node.png" />
                    <SkillCard skill="Express.js" image="/skills/express.png" />
                    <SkillCard skill="MongoDB" image="/skills/mongo.png" />
                    <SkillCard skill="HTML" image="/skills/html.png" />
                    <SkillCard skill="CSS" image="/skills/css.png" />
                    <SkillCard skill="Tailwind" image="/skills/tailwind.png" />
                    <SkillCard skill="Bootstrap" image="/skills/bootstrap.png" />
                    <SkillCard skill="Git" image="/skills/git.png" />
                    <SkillCard skill="GitHub" image="/skills/github.png" />
                </div>
                <h1 className="pt-10 uppercase font-semibold md:text-md text-sm">
                    Also some bunch of ordinary skills:
                </h1>
                <h1 className="py-3 md:pe-20 md:leading-loose text-neutral-500 uppercase font-semibold md:text-xl text-md">
                    VS code, Chrome dev-tools, postman, figma, canva, wordpress and render. 
                </h1>
                <a href="https://drive.google.com/file/d/1zNVhm07LxI5UGl02kqlS98YK-QWicz8m/view?usp=drive_link" target='_blank' download><button className='mt-5 transition ease-in-out duration-300 md:px-5 px-3 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'>Get My Resume</button></a>
                    
            </div>
        </div>
    )
}

export default Skills
