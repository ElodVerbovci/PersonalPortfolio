import React from 'react';
import Single from '../assets/deliverysite.png';
import Double from '../assets/AutoSallon.png';
import Triple from '../assets/Sneakerstore.png';

const Cards = () => {
  return (
   <div className='w-full py-[6rem] px-4 bg-[#EDEDED] pb-4 mb-4' id="cards" >  
      <h1 className='text-[#000000] flex justify-center text-center pb-10 font-bold text-3xl mx-4 font-FiraMono' >My Projects</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 pt-20'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-100 mx-auto mt-2 pt-0 bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-4 font-mono'>ExpressDelivery</h2>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8 font-FiraCode'>A Delivery Service Web-App That helps with Tracking Orders</p>
              </div>
              <button className='bg-[#0A192F] text-[#00df9a] border border-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 font-FiraCode transition-all duration-300 ease-in-out transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0px_#00df9a]'>Check it Out</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-100 mx-auto pt-0 mt-2 bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-4 font-mono'>Car Dealership</h2>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8 font-FiraCode'>Car Dealership Website, Made with ReactJS and Tailwind</p>
              </div>
              <button className='bg-[#0A192F] text-[#00df9a] border border-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 font-FiraCode transition-all duration-300 ease-in-out transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0px_#00df9a]'>Check it Out</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-100 mx-auto mt-2 pt-0 bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-5 font-mono'>SneakerStore</h2>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8 font-FiraCode'>An Eccommerce Site , Fully Resposnive , Made with MERN Stack</p>
              </div>
              <button className='bg-[#0A192F] text-[#00df9a] border border-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 font-FiraCode transition-all duration-300 ease-in-out transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0px_#00df9a]'>Check it Out</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;