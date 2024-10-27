import React from "react";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { AnimatedTooltipPreview } from './components/AnimatedTooltip/app';
import { TabsDemo } from "./components/animatedtabs/app";
import { HeroScrollDemo } from './components/ContainerScrollAnimation/app';
import { TypewriterEffectSmoothDemo } from './components/TypewriterEffect/app';
import { LinkPreviewDemo } from './components/LinkPreview/app';
import {ParallaxScrollDemo}  from './components/ParallaxGridScroll/app';


function App() {
  return (
    <>
      <main className="overflow-x-hidden bg-gray-50 text-gray-800">
        <Navbar />
        <Hero />

        {/* Hero Scroll Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 my-12">
          <HeroScrollDemo />
        </section>

        {/* Team Section */}
        <section className="text-center  bg-gray-100 shadow-md rounded-lg ">
        <h1 className="text-7xl font-bold mb-8 text-gray-900">Discover Our Project</h1>
          <p className="text-lg text-gray-600 mb-6">Explore the features and innovations of our Mithaiwala.</p>
          <LinkPreviewDemo />
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h1>
          <p className="text-lg text-gray-600 mb-6">Get to know the people behind the scenes.</p>
          <AnimatedTooltipPreview />
        </section>

        {/* Features Section */}
        <section className="text-center w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-12">
        <h1 className="text-8xl font-bold mt-7 text-gray-900">Enhance Features</h1>
          <TabsDemo />
          <ParallaxScrollDemo/>
        </section>
        
      </main>
      
      <TypewriterEffectSmoothDemo />
    </>
  );
}

export default App;
