import React from 'react'
import HeroImg from "../assets/HeroImg.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name='home' 
    className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'
        >
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Fronted Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Passionate and detail-oriented frontend developer with hands-on experience 
                        in crafting sleek and responsive web interfaces. Proficient in HTML, CSS, and
                        JavaScript, with expertise in React and Vue.js. Adept at collaborating with 
                        cross-functional teams to deliver visually appealing and high-performance web applications.
                        Committed to continuous learning and staying abreast of industry trends. 
                        Ready to contribute technical expertise to innovative projects.
                    </p>

                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r from-cyan-500
                        to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardDoubleArrowRight size={25}
                                className='ml-1'/>
                            </span>
                        </button>
                    </div>

            </div>
            <div>
                <img src={HeroImg} alt="my Picture"
                className='rounded-2xl mx-auto w-2/3'/>
            </div>
        </div>
    </div>
  );
};

export default Home;