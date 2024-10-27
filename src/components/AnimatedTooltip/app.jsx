"use client";
import React from "react";
import { AnimatedTooltip } from "../AnimatedTooltip/ui";
const people = [
  {
    id: 1,
    name: "Aman Jha",
    designation: "Leader/Dev",
    image:
      "https://avatars.githubusercontent.com/u/80311301?s=40&v=4",
  },
  {
    id: 2,
    name: "Sreya Chaterjee",
    designation: "Dev",
    image:
      "https://avatars.githubusercontent.com/u/170153408?v=4",
  },
  {
    id: 3,
    name: "Ankana Panja",
    designation: "Dev",
    image:
      "https://avatars.githubusercontent.com/u/163384334?v=4",
  }
];

export function AnimatedTooltipPreview() {
  return (
    (<div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>)
  );
}
