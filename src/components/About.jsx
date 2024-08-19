// import React from 'react'

// const About = () => {

//   return (
//     <div name="about" className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
//         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//             <div className="pb-8">
//                 <p className="text-4xl font-bold inline border-b-4 rounded border-gray-500">About</p>
//             </div>

//             <p className="text-xl mt-10">
//                 I am a Computer Science <span className="text-blue-400 font-bold">student</span> who aspires to delve deeper into the world of <span className="text-blue-400 font-bold">full-stack</span> development. I have many projects that I have completed on
//                 my own time and in groups with others. Typically, my goal for these projects is to help aid me in learning new technologies, as the way I learn best is through hands-on application.
//             </p>

//             <br />
//             <br />

//             <p className="text-xl">
//                 As listed below, I have experience with several in-demand technologies, each of which I use to develop <span className="text-blue-400 font-bold">web apps</span> that are viewable in my <span className="text-blue-400 font-bold">portfolio</span>. Each of these projects helped me grow
//                 into the developer I am today.
//             </p>

//             <br />

//         </div>
//     </div>
//   )
// }

// export default About





import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 3000,
          once: true
        });
      }, []);

  return (
    <div name="about" className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 rounded border-gray-500" data-aos="fade-up">
                    About
                </p>
            </div>

            <p className="text-xl mt-10" data-aos="fade-up">
                I am a Computer Science <span className="text-blue-400 font-bold">student</span> at Baylor University who aspires to delve 
                deeper into the world of <span className="text-blue-400 font-bold">full-stack</span> development. My passion for coding has 
                been with me since childhood, allowing me to get an understanding of how vast the technology world was at an early age. I have completed numerous projects independently and in collaboration with others, typically with 
                the goal of learning new technologies through <span className="text-blue-400 font-bold">hands-on</span> application, which is the way I learn best.
            </p>

            <br />
            <br />

            <p className="text-xl" data-aos="fade-up">
                I have experience with several in-demand technologies, which I have used to develop <span className="text-blue-400 font-bold">web apps</span> showcased in my{' '}
                <span className="text-blue-400 font-bold hover:text-blue-200 hover:cursor-pointer">
                    <Link to='portfolioDiv' smooth duration={500}>
                        portfolio
                    </Link>
                </span>. 
                Each project has contributed significantly to my growth as a developer.
            </p>

            <br />
            <br />

            <p className="text-xl" data-aos="fade-up">
                In addition to my enthusiasm for <span className="text-blue-400 font-bold">Software Engineering</span>, I am committed to 
                incorporating <span className="text-blue-400 font-bold">Machine Learning</span> into my skillset. 
                With <span className="text-blue-400 font-bold">AI</span> being in high demand,  I hope to be at the forefront of this field in the future. 
                Recently, I have concentrated significantly on this area
                utilizing <span className="text-blue-400 font-bold">trained models</span> for image processing by feeding 
                in <span className="text-blue-400 font-bold">embeddings</span>.
            </p>

            <br />
        </div>
    </div>
  )
}

export default About;
