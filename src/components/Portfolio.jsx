import React, { useEffect } from 'react';
import studyApp from "../Assets/studyApp.png";
import studyBuddy from "../Assets/studyBuddy.png";
import pantryPal from "../Assets/pantryPal.png";
import speakStudy from "../Assets/speakStudy.png";
import quantaFlashcards from "../Assets/quantaFlashcards.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true
    });
  }, []);

  const portfolios = [
    {
      id: 1,
      title: "Studdy Buddy",
      link: "http://34.16.169.60:3000/",
      src: studyBuddy
    },
    {
      id: 2,
      title: "PantryPal",
      link: "https://pantry-tracker-delta.vercel.app/",
      src: pantryPal
    },
    {
      id: 3,
      title: "Student Productivity Tracker",
      link: "https://github.com/cama0000/schoolapp",
      src: studyApp
    },
    {
      id: 4,
      title: "SpeakStudy",
      link: "https://github.com/cama0000/SpeakStudy",
      src: speakStudy
    },
    {
      id: 5,
      title: "Quanta AI Flashcards",
      link: "https://quanta-flashcards.vercel.app/",
      src: quantaFlashcards
    },
  ];

  return (
    <div name="portfolioDiv" className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-up">

          <p className="text-4xl font-bold inline border-b-4 rounded border-gray-500">
            Portfolio
          </p>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, link, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg" data-aos="fade-up" data-aos-delay={id * 100}>

              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={title} className="w-96 h-48 rounded-md duration-200 hover:scale-105" />
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

export default Portfolio;
