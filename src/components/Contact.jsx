import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-4">
                <p className="text-4xl font-bold inline border-b-4 rounded border-gray-500">Contact</p>
                <p className="py-6">Want to get in contact with me? Submit the form down below!</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/e9753a2b-2adc-4042-afa1-9cee8f59b9a0" method="POST" className="flex flex-col w-full">
                    <input type="text" 
                    name="name" 
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>

                    <input type="text" 
                    name="email" 
                    placeholder="Enter your email"
                    className="my-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>

                    <textarea name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    placeholder="Enter your message">
                    </textarea>

                    <button className="text-white bg-gradient-to-r from-cyan-600 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-105 duration-300">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact