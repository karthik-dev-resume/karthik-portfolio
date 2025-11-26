"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Cree8 from "../../Assets/Cree8.svg";
import Aura from "../../Assets/Aura.svg";
import Grocbay from "../../Assets/Grocbay.svg";
import { Link, Wind } from "lucide-react";

const projects = [
  {
    name: "Aura Shopping Website",
    description:
      "Aura is a user-friendly online shopping web application boasting a clean and minimalistic interface. It simplifies the user’s experience while enabling them to effortlessly monitor their online shopping endeavors",
    logo: Aura,
    link: "https://aura.ordrio.com/",
  },
  {
    name: "Grocbay",
    description:
      "Grocbay is your go-to online grocery store, offering fresh produce and essential household items with convenient home delivery. Experience easy navigation and quick service, making your daily shopping a breeze.",
    logo: Grocbay,
    link: "https://grocbay.ordrio.com",
  },
  {
    name: "Nadi Ecommerce Dashboard",
    description:
      "Nadi Ecommerce Dashboard is a comprehensive dashboard for managing the ecommerce store. It allows you to manage the products, orders, customers, and inventory.",
    logo: Grocbay,
    link: "https://nadi.ordrio.com/",
  },
  {
    name: "Archicraft",
    description:
      "Archicraft is a company that provides design and construction services for residential and commercial projects.",
    logo: Grocbay,
    link: "https://www.archicraftdesignstudio.in/",
  },
  {
    name: "Twisted Tiffin",
    description:
      "Twisted Tiffin is a food delivery service that provides a wide range of Indian cuisine to your doorstep.",
    logo: Grocbay,
    link: "https://twistedtiffin.com/",
  },
  {
    name: "Cree8",
    description:
      "Cree8 Construction is a comprehensive project management system that tracks the work progress of employees, monitors their attendance, and efficiently manages payrol",
    logo: Cree8,
    link: "https://login.am8.com.au/",
  },
];

export default function Projects() {
  return (
    <>
      <div className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous">
        Projects
      </div>
      <BlurFade className="flex flex-col gap-10 sm:flex-row items-start justify-start px-10 sm:px-24 overflow-hidden">
        <div className="w-full flex flex-col sm:flex-col gap-4 justify-start items-start mt-6">
          <section className=" dark:text-zinc-400 text-zinc-600 py-4">
            <div className="">
              <div className="mb-10">
                I&apos;ve worked on tons of little projects over the years but
                these are the ones that I&apos;m most proud of. Many of them are
                open-source, so if you see something that piques your interest,
                check out the code and contribute if you have ideas on how it
                can be improved.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="dark:bg-gray-600 bg-gray-200 rounded-lg shadow-lg p-6 "
                  >
                    <div className="flex flex-row justify-left items-center gap-3 mb-4">
                      {/* <Image
                      src={project?.logo}
                      className="dark:bg-zinc-400 bg-zinc-600 rounded-xl p-2 items-center"
                      alt={`${project} logo`}
                    /> */}
                      <div
                        className=" text-xl items-center flex justify-center dark:text-zinc-100 text-zinc-600 font-semibold"
                        onClick={() => {
                          window.open(project?.link, "_blank");
                        }}
                      >
                        {project?.name}
                      </div>
                      <div>
                        {" "}
                        <Link size={16} />
                      </div>
                    </div>
                    <div className="">{project?.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </BlurFade>
    </>
  );
}
