import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';


function App() {
  return (
<>
  <main className='overflow-x-hidden'>
   <Navbar/>
   <Hero/>
  </main>
</>
  );    
}

export default App;