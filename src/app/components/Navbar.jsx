import React, { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <nav className='absolute right-4 top-0'>
      <div className="flex items-center justify-center">
        <div className="relative group focus:outline-none">
          <div className={`relative flex items-center justify-center rounded-full transform transition-all duration-500 ${isOpen ? 'w-[280px] h-[300px] rounded-lg bg-primary' : 'w-[0px] h-[0px]'}`}>
            <button onClick={toggleMenu} className={`absolute top-0 right-0 flex items-center justify-center w-[50px] h-[50px] transform transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
              <div className="relative flex flex-col justify-center items-center">
                <div className={`bg-black h-[3px] w-[28px] rounded transform transition-all duration-300 ${isOpen ? 'translate-y-[1px] bg-white' : 'mb-[5px]'}`}></div>
                <div className={`bg-black h-[3px] w-[28px] rounded transform transition-all duration-300 ${isOpen ? '-rotate-90 -translate-y-[1px] bg-white' : ''}`}></div>
              </div>
            </button>
            <div className={`absolute w-full z-10 top-14 flex flex-col transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              <ul className="flex flex-col items-center space-y-4 text-white w-full font-medium">
                <li className='text-3xl'><ScrollLink onClick={toggleMenu} to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                <li className='text-3xl'><ScrollLink onClick={toggleMenu} to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
                <li className='text-3xl'><ScrollLink onClick={toggleMenu} to="products" smooth={true} duration={500}>Products</ScrollLink></li>
                <li className='text-3xl'><a href="https://wa.link/2ybboi">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
