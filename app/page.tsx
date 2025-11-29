"use client";

import Experience from "./sections/experience";
import Education from "./sections/education";
import About from "./sections/about";
import LandingPage from "./sections/landing";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <main className="w-full">
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          <LandingPage />
        </div>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          <About />
        </div>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          <Experience />
        </div>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          <Education />
        </div>
        <div className="my-12 sm:my-28 flex flex-col justify-center items-center">
          <Projects />
        </div>
      </main>
    </div>
  );
}
