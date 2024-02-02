import React from 'react'
import java from "../Assets/java.jpg"
import cpp from "../Assets/c++.png"
import javascript from "../Assets/javascript.png"
import react from "../Assets/react.png"
import spring from "../Assets/spring.png"
import sql from "../Assets/sql.png"

const Experience = () => {
    
  const langs = [
    {
        id: 1,
        src: java,
        title: 'Java',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: cpp,
        title: 'C++',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        src: react,
        title: 'React',
        style: 'shadow-blue-300'
    },
    {
        id: 5,
        src: sql,
        title: 'SQL',
        style: 'shadow-orange-300'
    },
    {
        id: 6,
        src: spring,
        title: 'Spring Boot',
        style: 'shadow-green-300'
    }
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-900 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 rounded border-gray-500 inline">Experience</p>
                <p className="py-6">Technologies I work with!</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
                {langs.map(({id, src, title, style}) => (
                    <div key={id} className={` shadow-sm hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience