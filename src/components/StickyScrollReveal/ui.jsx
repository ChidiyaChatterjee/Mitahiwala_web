"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "../../utils/utils";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      return Math.abs(latest - breakpoint) < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  // Update background colors to the new specified color
  const backgroundColors = [
    "#000000", 
    "#000000",
    "#000000"
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))"
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[50rem] w-full overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 transition-all"
      ref={ref}
    >
      <div className="relative flex flex-col items-start px-4 max-w-5xl">
        {content.map((item, index) => (
          <div key={item.title + index} className="my-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
                x: activeCard === index ? 0 : -20
              }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-slate-100 mb-4"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
                x: activeCard === index ? 0 : -20
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-300 max-w-md"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
        <div className="h-40" />
      </div>

      <motion.div
        style={{ background: linearGradients[activeCard % linearGradients.length] }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden shadow-lg p-5",
          contentClassName
        )}
        initial={{ scale: 0.9 }}
        animate={{ scale: activeCard ? 1 : 0.9 }}
        transition={{ duration: 0.4 }}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
