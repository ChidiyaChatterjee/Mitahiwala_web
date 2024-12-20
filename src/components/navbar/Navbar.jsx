// Navbar.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" }, 
    { name: "Features", link: "#features" },
    { name: "Contact", link: "#contact" }
  ];
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-stone-50 bg-opacity-30 backdrop-blur-lg border-b border-white/20 shadow-md fixed w-full top-0 z-10 flex">
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
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleScroll(link.link.substring(1)); // Remove '#' for id
                }}
                href={link.link}
                className="navbar-link text-orange-300 hover:text-red-300"
                style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)' }}
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
      </div>

      {/* Hidden nav for mobile */}
      <div className='md:hidden block text-5xl items-end justify-center gap-2'>
        <IoReorderThreeOutline 
          className='h-full w-10' 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-expanded={isMenuOpen}
        />
        
        <div 
          className={`absolute top-24 left-0 right-0 rounded-md mx-20 bg-stone-50 border-white/20 bg-opacity-40 backdrop-blur-lg flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <ul className='list-none w-full flex flex-col text-center p-5'>
            {Links.map((link) => (
              <a 
                key={link.name} 
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.link.substring(1));
                  setIsMenuOpen(false); // Close the menu on click
                }}
                href={link.link}
                className="navbar-link text-lightbrown hover:bg-orange-200 hover:text-blue-400 py-5"
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
