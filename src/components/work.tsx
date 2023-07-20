import React from 'react';

import { Project } from '../types/types.tsx';
import { projects } from '../data/data.tsx';

const Work: React.FC = () => {

    return (
        <div id='4' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* Projects Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            
                    {/* Project Item */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}

                </div>

            </div>

        </div>
    );
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project
}) => {
    const cardStyle = {
        backgroundImage: `url(${project.image})`,
    };

    return (
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div' style={cardStyle} >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    {project.name}
                </span>

                <div className='pt-8 text-center'>
                    <a href={project.github}>
                        <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                    <a href={project.live}>
                        <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Work;