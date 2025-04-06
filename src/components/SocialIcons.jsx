import React, { useState, useEffect } from 'react';


import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';  

const SocialIcons = () => {
  const [isOverSkills, setIsOverSkills] = useState(false);
  const [isOverCards, setIsOverCards] = useState(false);

  useEffect(() => {
    const skillsSection = document.getElementById('skills');  
    const cardsSection = document.getElementById('cards');  

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === skillsSection) {
            setIsOverSkills(entry.isIntersecting);
          }
          if (entry.target === cardsSection) {
            setIsOverCards(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe the sections
    if (skillsSection) observer.observe(skillsSection);
    if (cardsSection) observer.observe(cardsSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
      if (cardsSection) observer.unobserve(cardsSection);
    };
  }, []);

  const iconColor = isOverSkills || isOverCards ? 'black' : '#dee2e0';
  const lineColor = isOverSkills || isOverCards ? 'black' : '#dee2e0';

  return (
    <div className="hidden md:flex fixed left-0 bottom-0 transform mb-8 flex-col items-center space-y-4 p-4 border-r-2 text-white" 
         style={{ borderColor: lineColor, zIndex: 50 }}>
      {/* GitHub */}
      <a href="https://github.com/ElodVerbovci" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={30} className={`text-${iconColor} hover:text-[#00df9a]`} />
      </a>
      {/* Instagram */}
      <a href="https://www.instagram.com/elodverbovci/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={30} className={`text-${iconColor} hover:text-[#00df9a]`} />
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/elod-verbovci-534541254/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={30} className={`text-${iconColor} hover:text-[#00df9a]`} />
      </a>
    </div>
  );
};

export default SocialIcons;