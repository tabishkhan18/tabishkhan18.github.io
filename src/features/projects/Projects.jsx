import React from 'react'
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";
import ImageCarousel from '../../ui/ImageCarousel';
import { projects } from '../../constants/projects';

const ProjectCard = ({ project }) => {
    const infoBlock = (
        <div className="skills lg:py-5 lg:pt-5 pt-5 px-5 lg:ps-5 lg:w-1/4">
            <h1 className="heading py-10 uppercase text-white font-semibold text-xl">
                {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
                {project.tech.map((tag) => (
                    <h1
                        key={tag}
                        className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base"
                    >
                        {tag}
                    </h1>
                ))}
            </div>
            <p className="pt-5 text-neutral-400 leading-relaxed">
                {project.description}
            </p>
            <div className="buttons flex gap-5 py-10">
                <a href={project.github} target="_blank" rel="noreferrer">
                    <button className="font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500">
                        <TbBrandGithubFilled size={25} />
                    </button>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                    <button className="font-semibold hover:rotate-45 transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black rounded-full p-5 relative right-10">
                        <BsArrowUpRight size={25} />
                    </button>
                </a>
            </div>
        </div>
    );

    const mediaBlock = project.images ? (
        <div className="aboutimage py-10 lg:pe-5">
            <ImageCarousel images={project.images} />
        </div>
    ) : (
        <div className="aboutimage py-10 lg:pe-5 mx-5 lg:mx-0">
            <img src={project.image} alt={project.title} className="lg:w-[50rem] rounded-lg" />
        </div>
    );

    const isInfoFirst = project.layout === 'info-first';

    return (
        <div className={`projectcard h-fit ${project.bg} ${project.border}`}>
            <div
                className={`flex lg:flex-row ${isInfoFirst ? 'flex-col' : 'flex-col-reverse'} lg:items-center justify-evenly`}
            >
                {isInfoFirst ? (
                    <>{infoBlock}{mediaBlock}</>
                ) : (
                    <>{mediaBlock}{infoBlock}</>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div id="projects">
            <div className="project bg-neutral-900 flex flex-col border-b border-neutral-700 py-10">
                <h1 className="heading text-center lg:py-14 pb-10 uppercase text-white font-semibold text-xl">
                    Projects
                </h1>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
