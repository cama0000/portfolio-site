import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import profileImage from '../Assets/profileImage.jpg'; // Replace with your image path
import { IoIosPaper } from "react-icons/io";

const Footer = () => {
  return (
    <div name="contact" className="w-full h-72 bg-zinc-800 p-4 text-white flex items-center justify-center">
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto">
        {/* Links and Image */}
        <div className="flex flex-col items-center sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
          {/* Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-8">Follow Me.</h2>
            <div className="flex space-x-8">
                <a href="https://www.linkedin.com/in/cameronarmijo000/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-105 duration-200">
                <FaLinkedin size={40} />
              </a>
              <a href="https://github.com/cama0000" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-105 duration-200">
                <FaGithub size={40} />
              </a>
              <a href="mailto:acama0000@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-105 duration-200">
                <HiOutlineMail size={40} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-105 duration-200">
                <IoIosPaper size={40}/>
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          {/* <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-2xl w-32 h-32"
            />
          </div> */}
        </div>

        <div className="mt-4 text-center">
          <p>&copy; 2024 Cameron Armijo</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
