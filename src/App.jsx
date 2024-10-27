import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Test from './components/test/test';

function App() {
  return (
<>
  <main className='overflow-x-hidden'>
   <Navbar/>
   <Hero/>
   <Test/>
  </main>
</>
  );    
}

export default App;