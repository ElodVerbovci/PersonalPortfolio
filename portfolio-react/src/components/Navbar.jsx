import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';  // Import the Link component from react-scroll

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">ElodVerbovci</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-[#00df9a]">
          <Link
            to="home"  // ID of the section to scroll to
            smooth={true} 
            duration={300}  // Set duration to 300ms (0.3s)
          >
            Home
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a]">
          <Link
            to="skills"
            smooth={true}
            duration={300}
          >
            Skills
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a]">
          <Link
            to="projects"
            smooth={true}
            duration={300}
          >
            Projects
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a]">
          <Link
            to="footer"
            smooth={true}
            duration={300}
          >
            About
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a]">
          <Link
            to="contact"
            smooth={true}
            duration={300}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">ElodVerbovci</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]">
            <Link
              to="home"
              smooth={true}
              duration={600}
              onClick={() => setNav(false)}
            >
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]">
            <Link
              to="skills"
              smooth={true}
              duration={600}
              onClick={() => setNav(false)}
            >
              Skills
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]">
            <Link
              to="projects"
              smooth={true}
              duration={600}
              onClick={() => setNav(false)}
            >
              Projects
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]">
            <Link
              to="about"
              smooth={true}
              duration={800}
              onClick={() => setNav(false)}
            >
              About
            </Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-[#00df9a]">
            <Link
              to="contact"
              smooth={true}
              duration={900}
              onClick={() => setNav(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
