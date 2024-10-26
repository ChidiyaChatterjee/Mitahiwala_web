import React from 'react'

function Navbar() {
  let Links=[
    {name:"Home",link:"/"},
    {name:"Features",link:"/"},
    {name:"About",link:"/"},
    {name:"Contact",link:"/"}
  ]
  return (
    <nav className="bg-white bg-opacity-50 backdrop-blur-lg border-b border-white/20 shadow-md fixed w-full top-0 z-10 flex">
     
        <div className='container px-0 ml-5 my-5 flex item-center'> 
            {/* logo section */}
            <div className='text-xl flex items-center gap-2 font-bold uppercase'>
            <h1 className='text-brown'>Mithaiwala</h1>
            </div>
            {/* logo section */}

           {/* menu section */}
           <div className='ml-auto mr-2'>
            <ul className='md:flex md:items-center'>
          {
            Links.map((Links)=>(
              <li className='md:ml-8 text-medi px-2 py-2'>
                <a href={Links.link} className='text-lightbrown hover:text-blue-400 '>{Links.name}</a>
              </li>
            ))
          }
          </ul>
        </div>
        {/* menu section */}
        </div>
    </nav>
  );
};

export default Navbar