import React from 'react';

interface Props { }

const About: React.FC<Props> = () => {
    return (
        <div id='2' className='w-full h-screen bg-[#0a192f] text-gray-300'>

            <div className='flex flex-col justify-center items-center w-full h-full'>

                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>

                    <div></div>

                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Mitchell Carter, nice to meet you. Please take a look around.</p>
                    </div>

                    <div>
                        <p>I am a Full Stack developer with specialties in Node, React, and Typescript. <br></br><br></br>I have utilized Vue3 and Pinia in my most recent position. In my most recent personal projects they have been built utilizing node, react in typescript and redux.</p>
                        <br></br>
                        <p>I am currently learning Python to delve deeper into Data Analytics and Machine Learning.</p>
                        <br></br>
                        <p>To see examples of my work, please visit my <a href='https://github.com/cartercodes' className='font-bold border-b-2 border-pink-600'>Github</a> to see examples of my work or follow me here for updates in my in my work log.</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;