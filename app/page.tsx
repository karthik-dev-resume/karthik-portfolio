"use client";

import NavigationBar from "@/components/navigationbar";

import { useEffect, useState } from "react";
import Experience from "./pages/experience/page";
import Education from "./pages/education/page";
import About from "./pages/about/page";
import LandingPage from "./pages/landingPage/page";
import Projects from "./pages/projects/page";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <main>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          <LandingPage />
        </div>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          {/* <div className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous">
            About Me
          </div> */}
          <About />
        </div>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center ">
          {/* <div className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous">
            Experience
          </div> */}
          <Experience />
        </div>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          {/* <div className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous">
            Education
          </div> */}
          <Education />
        </div>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          {/* <div className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous">
            Projects
          </div> */}
          <Projects />
        </div>
      </main>
    </div>
  );
}
