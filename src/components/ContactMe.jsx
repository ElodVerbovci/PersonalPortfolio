import React from 'react';

const ContactMe = () => {
  return (
    <div className='w-full py-16 text-white px-4 '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4' id="contact">
        <span className="text-[#00df9a] font-bold pr-2 font-FiraCode text-3xl">&lt;</span>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-mono'>
            Want to Hire me ?
          </h1>
          <p className='font-FiraCode text-sm mb-5'>Send Me A Notification To My Email , So I Can Get Back to You and Contact You!</p>
          <span className="text-[#00df9a] font-bold pr-2 font-FiraCode text-3xl mt-4">/ &gt;</span>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black bg-[#f2f4f4] font-FiraCode'
              type='email'
              placeholder='Enter Email'
            />
            <button className="text-[#00df9a] bg-transparent border border-[#00df9a]  px-12 pt-2 ml-2 pb-2 rounded-md font-medium my-6 mx-auto py-3 font-mono  leading-none transition-all duration-300 ease-in-out transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0px_#00df9a]">
              Notify Me
            </button>
          </div>
          <p className='font-FiraCode text-sm'>
            I care about the privacy of your email , it is completely secure. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;