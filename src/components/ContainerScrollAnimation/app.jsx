"use client";
import React from "react";
import { ContainerScroll } from "../ContainerScrollAnimation/ui";
import Image from "../../assets/xx.png";

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-red-200">
              Get into Some Best Ui Stuff <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                 with Taste
              </span>
            </h1>
          </>
        }>
        <img
          src={Image}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
