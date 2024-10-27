"use client";;
import React from "react";
import { LinkPreview } from "./ui";

export function LinkPreviewDemo() {
  return (
    (<div className="flex justify-center items-center h-[15rem] flex-col px-4">
      <p
      
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Visit Our App's
        <LinkPreview url="https://github.com/AnkanaPanja/OnlineShoppingApp" className="font-bold">
          Repository
        </LinkPreview>{" "}
        and You Can also Visit Our Web {" "}
        <LinkPreview url="https://github.com/ChidiyaChatterjee/Mitahiwala_web" className="font-bold">
          Repository
        </LinkPreview>{" "}
        and See the Magic Of building modern websites.
      </p>
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://github.com/ChidiyaChatterjee/Mitahiwala_web"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          More
        </LinkPreview>{" "}
        of our amazing Works.
      </p>
    </div>)
  );
}
