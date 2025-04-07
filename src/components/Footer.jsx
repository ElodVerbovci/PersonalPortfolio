import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 mt-0 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] font-mono">ElodVerbovci.</h1>
        <p className="py-4 font-FiraCode">
          Delivering High Quality Websites & Web Applications and Many More Solutions For Your Business!
        </p>
        
        <div className="flex space-x-4 md:w-[75%] my-6">
          <a
            href="https://github.com/ElodVerbovci"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/elod-verbovci-534541254"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
