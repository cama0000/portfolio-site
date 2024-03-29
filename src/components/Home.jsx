import React from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                {/* Mobile/small is 4xl and desktop/bigger is 7xl */}
                <h2 className="text-4xl sm:text-7xl text-white">Welcome to my site.</h2>
                <p className="text-gray-500 py-4 max-w-md">
                    I am a <span className="font-bold hover:text-gray-400">Computer Science</span> student with a drive for <span className="font-bold hover:text-gray-400">Full-Stack</span> development. 
                    I am currently looking for any internship opportunities. Here, you can find information on who I am and what technologies I use!
                </p>

                <div>
                    <Link to="contact" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l
                    from-cyan-600 to-blue-500 cursor-pointer">
                        Contact me!
                        <FaArrowAltCircleDown size={20} className="ml-1"></FaArrowAltCircleDown>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home