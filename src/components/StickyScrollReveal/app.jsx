"use client";
import React from "react";
import { StickyScroll } from "../StickyScrollReveal/ui";
import Image from "../../assets/xx.png";

const content = [
  {
    title: "Sweet Selections",
    description:
      "Experience effortless shopping in our Cart section! View, modify, and manage your bakery favorites with ease, and enjoy a secure, quick checkout that satisfies your cravings with just a tap.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Sweet Selections
      </div>
    ),
  },
  {
    title: "Your Bakery Identity",
    description:
      "Your personal hub for managing account details, viewing transactions, and updating preferences. Experience a seamless and secure journey tailored just for you, making your convenience our top priority at every step!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Image}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Source Access",
    description:
      "We prioritize your security with our OTP verification system. This robust authentication process ensures that only authorized users access their accounts, safeguarding your personal information while you enjoy exploring our delightful baked goods.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title:"Baker's Buzz",
    description:
      "Stay in the loop with our bakery app's notification section! Get exclusive offers, discover new arrivals, and receive real-time updates on your orders for a seamless, personalized experience. Join us and savor every moment!",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    (<div className="p-10">
      <StickyScroll content={content} />
    </div>)
  );
}
