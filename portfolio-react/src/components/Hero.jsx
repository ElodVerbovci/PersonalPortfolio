import React from 'react'
import { ReactTyped }  from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>

      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center  flex flex-col justify-center'>
       <p className='text-[#00df9a] font-bold p-2 text-xl'>Welome To My Portfolio</p>  
       <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>FullStack Web Developer</h1>
       <div className='flex justify-center items-center '>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Using Technologies Like </p>
        <ReactTyped className='md:text-3xl sm:text-2xl text-xl font-bold pl-2 text-[#00df9a]' strings={['ReactJS , NodeJS , ExpressJS']} typeSpeed={120} backSpeed={140} loop />
       </div>
       <p className='md:text-2xl text-xl font-bold text-gray-500 md:pl-4'>Delivering Fast , Precise , Robust Websites & Applications!</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Hire Me</button>
      </div>
      
    </div>
  )
}

export default Hero
