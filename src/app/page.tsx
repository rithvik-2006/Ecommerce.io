"use client";
import Image from "next/image";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
 

export default function Home() {
  return (
    <div className="dark ">
      <BackgroundBeamsWithCollision>
      <h2 className="relative z-20 font-bold text-center text-black dark:text-white font-sans tracking-tight ">
        <div className="text-5xl md:text-5xl lg:text-6xl">
        Explore our exclusive range of shoes and apparel now.   <br/>
        <div className="relative my-10 mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ">
            <span className="">Step into the future of fashion!</span>
          </div>
          <Link href="/MainPage">
         <button className="inline-flex h-12 text-[1.025rem] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#9333ea,45%,#d946ef,55%,#f472b6)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:bg-[length:300%_100%] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                See the products
              </button>
              </Link>
          </div>
          
          
        </div>
      </h2>
      
     
      
      
    </BackgroundBeamsWithCollision>
    
    </div>
  );
}
