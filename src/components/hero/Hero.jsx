import React from 'react'

function Hero() {
  return ( 
  <section
    id="home"
    className="bg-lightyellow h-screen flex items-center justify-center pt-16"
  >
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Welcome to My Bakery
      </h1>
      <p className="text-lg md:text-xl mt-4 text-white">
        Delicious treats made just for you!
      </p>
    </div>
  </section>
  )
}

export default Hero