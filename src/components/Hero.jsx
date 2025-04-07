import React from 'react'
import { ReactTyped }  from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>

      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center  flex flex-col justify-center mb-24'>
       <p className='text-[#00df9a] font-bold p-2 text-xl font-FiraCode mt-44'>Welome To My Portfolio</p>  
       <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-Roboto'>FullStack Web Developer</h1>
       <div className='flex justify-center items-center '>
        <p className='md:text-2xl sm:text-xl text-sm font-bold py-4 font-FiraCode'>Proficient in:</p>
        <ReactTyped className='md:text-2xl sm:text-sm text-sm font-bold pl-2 text-[#00df9a] font-FiraCode' strings={['Javacript,ReactJS,NodeJS']} typeSpeed={120} backSpeed={140} loop />
       </div>
       <p className='md:text-1xl text-sm font-bold text-gray-500 md:pl-4 font-FiraMono my-4'>Delivering Fast , Precise , Robust Websites & Applications!</p>
      
       <a
  href="https://www.linkedin.com/in/elod-verbovci-534541254/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#00df9a] bg-transparent border border-[#00df9a] pt-3 pb-3 px-8 rounded-md font-medium mt-12 mx-auto font-mono  leading-none transition-all duration-300 ease-in-out transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0px_#00df9a] text-center inline-block"
>
  Hire Me
</a>
      </div>
      
    </div>
  )
}

export default Hero
