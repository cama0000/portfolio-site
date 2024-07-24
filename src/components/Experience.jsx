import React, { useEffect } from 'react';
import java from "../Assets/java.jpg";
import cpp from "../Assets/c++.png";
import javascript from "../Assets/javascript.png";
import react from "../Assets/react.png";
import spring from "../Assets/spring.png";
import sql from "../Assets/sql.png";
import python from "../Assets/python.png";
import pytorch from "../Assets/pytorch.png";
import flask from "../Assets/flask.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true
    });
  }, []);

  const langs = [
    {
        id: 1,
        src: react,
        title: 'React',
        style: 'shadow-blue-300'
    },
    {
        id: 2,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 3,
        src: spring,
        title: 'Spring Boot',
        style: 'shadow-green-300'
    },
    {
        id: 4,
        src: java,
        title: 'Java',
        style: 'shadow-orange-500'
    },
    {
        id: 5,
        src: python,
        title: 'Python',
        style: 'shadow-blue-400'
    },
    {
        id: 6,
        src: pytorch,
        title: 'PyTorch',
        style: 'shadow-orange-500'
    },
    {
        id: 7,
        src: flask,
        title: 'Flask',
        style: 'shadow-white'
    },
    {
        id: 8,
        src: cpp,
        title: 'C++',
        style: 'shadow-blue-500'
    },
    {
        id: 9,
        src: sql,
        title: 'SQL',
        style: 'shadow-orange-300'
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-900 to-black w-full">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            {/* Add margin-top to move the text lower */}
            <div data-aos="fade-up" className="mt-12">
                <p className="text-4xl font-bold border-b-4 rounded border-gray-500 inline">Experience</p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
                {langs.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-sm hover:scale-105 duration-500 py-2 rounded-lg ${style}`} data-aos="fade-up" data-aos-delay={id * 100}>
                        <img src={src} alt={title} className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience;
