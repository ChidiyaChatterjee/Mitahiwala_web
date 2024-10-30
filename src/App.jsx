import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { AnimatedTooltipPreview } from './components/AnimatedTooltip/app';
import { TabsDemo } from "./components/animatedtabs/app";
import { HeroScrollDemo } from './components/ContainerScrollAnimation/app';
import { TypewriterEffectSmoothDemo } from './components/TypewriterEffect/app';
import { LinkPreviewDemo } from './components/LinkPreview/app';
import { ParallaxScrollDemo } from './components/ParallaxGridScroll/app';
import { LampDemo } from "./components/LampSectionHeader/app";

function App() {
  const [isPhone, setIsPhone] = useState(false);

  // Check screen width to conditionally render TabsDemo
  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768); // Treat width <= 768px as "phone"
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <>
      <main id="home" className="overflow-x-hidden bg-gray-50 text-gray-800">
        <Navbar />
        <Hero />

        {/* Hero Scroll Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 my-12">
          <HeroScrollDemo />
        </section>

        {/* Team Section */}
        <section id="about" className="text-center bg-gray-100 shadow-md rounded-lg p-6 md:p-12">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gray-900">Discover Our Project</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">Explore the features and innovations of our Mithaiwala.</p>
          <LinkPreviewDemo />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Meet Our Team</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">Get to know the people behind the scenes.</p>
          <AnimatedTooltipPreview />
        </section>

        {/* Features Section */}
        <section id="features" className="text-center w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mt-7 text-gray-900">Enhance Features</h1>
          {/* Conditionally render TabsDemo based on screen size */}
          {!isPhone && <TabsDemo />}
          <ParallaxScrollDemo />
        </section>
      </main>

      {/* Contact Section */}
      <section id="contact" className="p-6 md:p-12">
        <TypewriterEffectSmoothDemo />
      </section>
    </>
  );
}

export default App;
