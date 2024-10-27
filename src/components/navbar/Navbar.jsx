import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" }
  ];
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 bg-opacity-50 backdrop-blur-lg border-b border-white/20 shadow-md fixed w-full top-0 z-10 flex">
      <div className='container px-0 ml-5 my-5 flex items-center'> 
        {/* Logo section */}
        <div className='text-xl flex items-center font-bold uppercase'>
          <h1 className='text-brown'>Mithaiwala</h1>
        </div>
        
        {/* Menu section */}
        <div className='ml-auto bg-transparent'>
          <ul className='hidden md:flex gap-12 md:items-center mx-5'>
            {Links.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="navbar-link text-white hover:text-red-100"
                style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)' }}
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
      </div>

      {/* Hidden nav */}
      <div className='md:hidden block text-5xl items-end justify-center gap-2'>
        <IoReorderThreeOutline 
          className='h-full w-10' 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-expanded={isMenuOpen}
        />
        
        <div 
          className={`absolute top-24 left-0 right-0 rounded-sm mx-20 bg-gray-50 bg-opacity-50 backdrop-blur-lg flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <ul className='list-none w-full flex flex-col text-center p-5'>
            {Links.map((link) => (
              <a 
                key={link.name} 
                href={link.link} 
                className="navbar-link text-lightbrown hover:bg-orange-200 hover:text-blue-400 py-5"
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
      </div>
      {/* Hidden nav */}
    </nav>
  );
}

export default Navbar;