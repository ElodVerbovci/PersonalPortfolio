import React from 'react';
import { ReactTyped } from 'react-typed';

// Slick Carousel
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importing PNGs (no changes to the images)
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/nodejs.png';
import tailwindLogo from '../assets/tailwind.png';
import mongoLogo from '../assets/mongodb.png';
import postgresLogo from '../assets/postgre.png';
import gitLogo from '../assets/git.svg';
import bootstrapLogo from '../assets/bootstrap.png';



const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5, // Number of logos visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="w-full bg-[#EDEDED] py-16 px-4 relative z-10" id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
        {/* Skills Text */}
        <div className="mb-8">
          <h1 className="md:text-3xl sm:text-3xl text-2xl font-bold py-6 font-FiraMono mb-6">My Technical Skills</h1>
          <p className="md:text-xl sm:text-sm font-FiraMono">
            A Fullstack Web Developer with knowledge of various skills like HTML, CSS, JavaScript, React, NodeJS, Express, PostgreSQL, MongoDB, Tailwind, Bootstrap, and Git.
          </p>
        </div>

        {/* Slider */}
        <div className="w-full max-w-[800px] mt-16 z-10">
          <Slider {...settings}>
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={htmlLogo} alt="HTML" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={cssLogo} alt="CSS" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={jsLogo} alt="JavaScript" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={reactLogo} alt="React" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={nodeLogo} alt="Node.js" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={tailwindLogo} alt="Tailwind" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={mongoLogo} alt="MongoDB" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={postgresLogo} alt="PostgreSQL" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={gitLogo} alt="Git" />
            <img className="w-[100px] h-[100px] mx-auto object-contain" src={bootstrapLogo} alt="Bootstrap"/>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Skills;