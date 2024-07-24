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

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 3000, // Animation duration in milliseconds
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
                I am a Computer Science <span className="text-blue-400 font-bold">student</span> who aspires to delve deeper into the world of <span className="text-blue-400 font-bold">full-stack</span> development. I have many projects that I have completed on
                my own time and in collaboration with others. Typically, my goal for these projects is to help aid me in learning new technologies, as the way I learn best is through hands-on application.
            </p>

            <br />
            <br />

            <p className="text-xl" data-aos="fade-up">
                As listed below, I have experience with several in-demand technologies, each of which I use to develop <span className="text-blue-400 font-bold">web apps</span> that are viewable in my <span className="text-blue-400 font-bold">portfolio</span>. Each of these projects helped me grow
                into the developer I am today.
            </p>

            <br />
        </div>
    </div>
  )
}

export default About;
