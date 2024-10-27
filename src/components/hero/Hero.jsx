import React from 'react'

function Hero() {
  return ( 
  <section
    id="home"
    className="bg-[url(https://cdn.pixabay.com/photo/2024/03/25/18/34/ai-generated-8655316_1280.jpg)] bg-cover w-full h-screen items-center flex justify-center pt-16 "
  >
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Welcome to Our<span className='font-cursive text-6xl md:text-9xl text-lightbrown'> Bakery</span>
      </h1>
      <p className="text-lg md:text-xl mt-4 text-white">
        Delicious treats made just for you!
      </p>
    </div>
  </section>
  )
}

export default Hero