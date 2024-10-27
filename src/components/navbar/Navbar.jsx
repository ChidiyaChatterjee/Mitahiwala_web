import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
function Navbar() {
  const Links=[
    {name:"Home",link:"/"},
    {name:"Features",link:"/"},
    {name:"About",link:"/"},
    {name:"Contact",link:"/"}
  ]
  const [isMenuOpen, setIsMenuOpen]=useState(false)
  return (
    <nav className= "bg-gray-50  bg-opacity-50 backdrop-blur-lg border-b border-white/20 shadow-md fixed w-full  top-0 z-10 flex">
     
        <div className='container px-0 ml-5 my-5 flex item-center'> 
            {/* logo section */}
            <div className='text-xl flex items-center font-bold uppercase'>
            <h1 className='text-brown'>Mithaiwala</h1>
            </div>
            {/* logo section */}

           {/* menu section */}
           <div className='  ml-auto mx-0  bg-transparent'>
            <ul className='hidden md:flex gap-12 md:items-center  absolute md:static mx-5'>
              <a href="#home" className="navbar-link text-white  hover:text-red-100" style={{textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)'}} >Home</a>
              <a href="#about" className="navbar-link  text-white  hover:text-red-100" style={{textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)'}}>Features</a>
              <a href="#menu" className="navbar-link  text-white  hover:text-red-100" style={{textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)'}}>About</a>
              <a href="#contact" className="navbar-link  text-white  hover:text-red-100" style={{textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)'}}>Contact</a>
          </ul>
        </div>
        {/* menu section */}
        </div>
        {/* hidden nav */}
        <div className=' bx bx-menu md:hidden block text-5xl  items-end justify-center gap-2  '>
      
        <IoReorderThreeOutline  className=' h-full w-10' onClick={() => setIsMenuOpen(!isMenuOpen)} />
            
             <div className={`absolute xl:hidden top-24 left-0 right-0  rounded-sm mx-20  bg-gray-50 bg-opacity-50 backdrop-blur-lg  flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen ? "opacity-100": "opacity-0"}`}
             style={{transition:"transform 10s ease ,opacity-100"}}>
              <ul className='list-none w-full flex flex-col text-center p-5 '>
              <a href="#home" className="navbar-link  text-lightbrown hover:bg-orange-200 hover:text-blue-400 py-5">Home</a>
              <a href="#about" className="navbar-link  text-lightbrown hover:bg-orange-200 hover:text-blue-400 py-5">Features</a>
              <a href="#menu" className="navbar-link  text-lightbrown hover:bg-orange-200 hover:text-blue-400 py-5">About</a>
              <a href="#contact" className="navbar-link  text-lightbrown hover:bg-orange-200 hover:text-blue-400 py-5">Contact</a>
               </ul>
             </div>
        </div>
         {/* hidden nav */}
    </nav>
  );
};

export default Navbar