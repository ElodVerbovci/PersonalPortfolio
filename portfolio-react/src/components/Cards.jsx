import React from 'react';
import Single from '../assets/DeliverySite.png';
import Double from '../assets/PortfolioProject.png';
import Triple from '../assets/Sneakerstore.png';

const Cards = () => {
  return (
    <div className='w-full py-[6rem] px-4 bg-white pb-4'>
      <h1 className='text-[#00df9a] flex justify-center text-center pb-10 font-bold text-2xl mx-4' >My Projects</h1>
      <p className='text-black flex justify-center text-center py-4 font-bold text-4xl pb-10'>Check them out!</p>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 pt-20'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-100 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>ExpressDelivery</h2>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>A Modern Design Express Delivery Site , Made with Modern Technology</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Check it Out</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-100 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>PersonalPortfolio</h2>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>A Modern Design Portfolio Template , Made with Modern Technology</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Check it Out</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-100 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>SneakerStore</h2>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>A Modern Design Sneaker Store , Made with Modern Technology</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Check it Out</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;