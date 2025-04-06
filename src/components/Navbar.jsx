import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* Fixed Navbar with high z-index */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0A1930] shadow-md mb-10">
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white relative">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] font-mono">ElodVerbovci</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex font-FiraCode">
            <li className="p-4 cursor-pointer hover:text-[#00df9a]">
              <span className="text-[#00df9a] font-bold pr-2">01.</span>
              <Link to="home" smooth={true} duration={300}>About</Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-[#00df9a]">
              <span className="text-[#00df9a] font-bold pr-2">02.</span>
              <Link to="skills" smooth={true} duration={300}>Skills</Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-[#00df9a]">
              <span className="text-[#00df9a] font-bold pr-2">03.</span>
              <Link to="projects" smooth={true} duration={300}>Projects</Link>
            </li>
            <li className="p-4 cursor-pointer hover:text-[#00df9a]">
              <span className="text-[#00df9a] font-bold pr-2">04.</span>
              <Link to="footer" smooth={true} duration={300}>Contact</Link>
            </li>
          </ul>

          {/* Resume Button (visible only on desktop) */}
          <a href="./src/assets/ElodVerbovci.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <button className="flex justify-center text-[#00df9a] bg-transparent border border-[#00df9a] pt-3 pb-3 px-8 rounded-md font-medium my-6 ml-5 mx-auto font-mono mt-6 leading-none transition-all duration-300 ease-in-out transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0px_#00df9a]">
              Resume
            </button>
          </a>

          {/* Hamburger Icon for mobile */}
          <div onClick={handleNav} className="block md:hidden cursor-pointer z-20">
            {nav ? <AiOutlineClose size={20} className="text-[#00df9a]" /> : <AiOutlineMenu size={20} className="text-[#00df9a]" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0A1930] ease-in-out duration-500 z-30' : 'fixed left-[-100%]'}`}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 font-mono">ElodVerbovci</h1>

        {/* Mobile Menu List */}
        <ul className="p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            <span className="text-[#00df9a] font-bold pr-2 font-FiraCode">01.</span>
            <Link to="home" smooth={true} duration={600} onClick={() => setNav(false)} className="text-white hover:text-[#00df9a] font-mono">About</Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            <span className="text-[#00df9a] font-bold pr-2 font-FiraCode">02.</span>
            <Link to="skills" smooth={true} duration={600} onClick={() => setNav(false)} className="text-white hover:text-[#00df9a] font-mono">Skills</Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            <span className="text-[#00df9a] font-bold pr-2 font-FiraCode">03.</span>
            <Link to="projects" smooth={true} duration={600} onClick={() => setNav(false)} className="text-white hover:text-[#00df9a] font-mono">Projects</Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            <span className="text-[#00df9a] font-bold pr-2 font-FiraCode">04.</span>
            <Link to="about" smooth={true} duration={800} onClick={() => setNav(false)} className="text-white hover:text-[#00df9a] font-mono">Contact</Link>
          </li>

          {/* Mobile Resume Button */}
          <li className="p-4 cursor-pointer">
            <a href="./src/assets/ElodVerbovci.pdf" target="_blank" rel="noopener noreferrer">
              <button className="flex justify-center text-[#00df9a] bg-transparent border border-[#00df9a] pt-3 pb-3 px-8 rounded-md font-medium my-6 ml-5 mx-auto font-mono mt-6 leading-none transition-all duration-300 ease-in-out transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0px_#00df9a]">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
