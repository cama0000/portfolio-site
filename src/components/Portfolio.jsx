import React from 'react'
import pomodoro from "../Assets/pomodoro.jpg"
import studyApp from "../Assets/studyApp.png"
import studyBuddy from "../Assets/studyBuddy.png"


const Portfolio = () => {

  const portfolios = [
    {
        id: 1,
        title: "Study Buddy Web App",
        link: "http://34.16.169.60:3000/",
        src: studyBuddy
    },
    {
        id: 2,
        title: "Study Web App",
        link: "https://github.com/cama0000/schoolapp",
        src: studyApp
    },
    {
        id: 3,
        title: "Pomodoro Timer",
        link: "https://github.com/cama0000/PomodoroTimer",
        src: pomodoro
    },
  ];

  return (
    <div name="portfolioDiv" className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">

                <p className="text-4xl font-bold inline border-b-4 rounded border-gray-500">
                    Portfolio
                </p>

                <p className="pt-10 pb-3">
                    Home of the projects I have worked on. Click on one to check them out!
                </p>

            </div>


            {/* change this grid 4 when adding another project and any more than that need to fix padding*/}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({id, title, link, src}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">

                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={src} alt="" className="w-96 h-48 rounded-md duration-200 hover:scale-105"/>
                        </a>
                        
                        <div className="flex justify-center py-5">
                            {title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
