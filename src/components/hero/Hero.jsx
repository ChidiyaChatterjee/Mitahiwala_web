import React from 'react'
import  { useState, useEffect } from 'react';

function Hero() {
  const [scale, setScale] = useState(1);
  const [bakeryScale, setBakeryScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 200;
     

      setScale(newScale);
     

    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 

  <section
    id="home"
    className="bg-[url(https://cdn.pixabay.com/photo/2024/03/25/18/34/ai-generated-8655316_1280.jpg)] bg-fixed  bg-cover w-full h-screen flex items-center   pt-16 px-0 mx-0"
  > 
    <div className="text-left mx-16">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Welcome <br></br>to Our{' '}
        <span className='font-cursive text-6xl md:text-9xl text-white  transition-transform duration-100 ease-linear' style={{transform: `scale(${scale})`,display: 'inline-block', textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6)'  }}> Bakery</span>
      </h1>
      <p className="text-sm md:text-xl mt-4 text-white">
      Where tradition <br></br>meets quality, our bakery crafts<br></br> each item to perfection using time-honored <br></br>techniques and the finest ingredients.
      </p>
      </div>
  
  </section>
  )
}

export default Hero