import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 rounded border-gray-500">About</p>
            </div>

            <p className="text-xl mt-10">
                I am a B.S. Computer Science student who aspires to delve deeper into full-stack development. I have several projects that I have completed during my
                time in university that provided me the skills you see here today. Additionally, I have many individual projects that I have completed on
                my own time. Typically, my goal for these projects is to help aid me in learning new languages / frameworks, as the way I learn best is through hands-on application. I am
                extremely passionate about tech and I enjoy spending much of my day coding!
            </p>

            <br />
            <br />

            <p className="text-xl">
                As stated above, I have attained numerous skills throughout my time in university. I have thorough applied knowledge of 
                C++ and Java in these courses. I have had several opportunities to work with groups where I had to put my mind together with other
                programmers. Through these projects, I have learned how to model, unit test, and collaborate within the Git environment. Additionally,
                these experiences have brought me to the conclusion that proper communication is one of the most important aspects of software
                development.
            </p>

            <br />

        </div>
    </div>
  )
}

export default About