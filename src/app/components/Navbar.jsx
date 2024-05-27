import React, { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
      // Deshabilitar el desplazamiento del cuerpo cuando el menú está abierto
  if (isOpen) {
    document.body.classList.remove('overflow-y-hidden');
  } else {
    document.body.classList.add('overflow-y-hidden');
  }
  };

  return (
    <>
      <button onClick={toggleMenu} className={`absolute z-20 top-1/2 -translate-y-1/2 right-4 flex items-center justify-center w-[50px] h-[50px] transform transition-all duration-300 ${isOpen ? 'rotate-45' : ''} `}>
        <div className="relative flex flex-col justify-center items-center">
          <div className={`bg-black h-[3px] w-[28px] transform transition-all duration-300 ${isOpen ? 'translate-y-[1px] bg-white' : 'mb-[5px]'}`}></div>
          <div className={`bg-black h-[3px] w-[28px] transform transition-all duration-300 ${isOpen ? '-rotate-90 -translate-y-[1px] bg-white' : ''}`}></div>
        </div>
      </button>
      <nav className={`flex justify-center items-center z-10 transition-all ease-in-out delay-300  top-0 absolute h-screen ${!isOpen ? "opacity-0 w-0 -left-[50vw]" : " opacity-1 w-full bg-primary left-0"}`}>
        <ul className="flex flex-col items-center space-y-4 text-white w-full gap-8 justify-between font-medium my-auto">
          <li className='text-3xl cursor-pointer'><ScrollLink onClick={toggleMenu} to="home" smooth={true} duration={500}>Home</ScrollLink></li>
          <li className='text-3xl cursor-pointer'><ScrollLink onClick={toggleMenu} to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
          <li className='text-3xl cursor-pointer'><ScrollLink onClick={toggleMenu} to="products" smooth={true} duration={500}>Products</ScrollLink></li>
          <li className='text-3xl'><a href="https://wa.link/2ybboi">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
