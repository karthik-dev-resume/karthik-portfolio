"use client";

import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  Store, 
  BarChart3, 
  Building2, 
  UtensilsCrossed,
  Briefcase
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Aura Shopping Website",
    description:
      "A user-friendly online shopping web application with a clean and minimalistic interface. Simplifies the user's experience while enabling them to effortlessly monitor their online shopping endeavors.",
    logo: null,
    icon: Sparkles,
    link: "https://aura.ordrio.com/",
    category: "E-commerce",
    tech: ["React", "Next.js", "TypeScript"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Grocbay",
    description:
      "Your go-to online grocery store, offering fresh produce and essential household items with convenient home delivery. Experience easy navigation and quick service.",
    logo: null,
    icon: Store,
    link: "https://grocbay.ordrio.com",
    category: "E-commerce",
    tech: ["React", "Redux", "Node.js"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Nadi Ecommerce Dashboard",
    description:
      "A comprehensive dashboard for managing ecommerce stores. Manage products, orders, customers, and inventory with ease.",
    logo: null,
    icon: BarChart3,
    link: "https://nadi.ordrio.com/",
    category: "Dashboard",
    tech: ["React", "TypeScript", "Chart.js"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Archicraft",
    description:
      "A company website providing design and construction services for residential and commercial projects with a modern interface.",
    logo: null,
    icon: Building2,
    link: "https://www.archicraftdesignstudio.in/",
    category: "Business",
    tech: ["React", "Next.js", "Tailwind"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Twisted Tiffin",
    description:
      "A food delivery service providing a wide range of Indian cuisine to your doorstep with an intuitive ordering system.",
    logo: null,
    icon: UtensilsCrossed,
    link: "https://twistedtiffin.com/",
    category: "Food Delivery",
    tech: ["React", "JavaScript", "CSS"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Cree8",
    description:
      "A comprehensive project management system that tracks work progress, monitors attendance, and efficiently manages payroll.",
    logo: "/assets/Cree8.svg",
    icon: Briefcase,
    link: "https://login.am8.com.au/",
    category: "SaaS",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous mb-4"
      >
        Projects
      </motion.div>
      
      <BlurFade className="px-10 sm:px-24 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl dark:text-zinc-400 text-zinc-600 mb-12 max-w-3xl leading-relaxed"
        >
          I&apos;ve worked on tons of projects over the years, but these are the ones I&apos;m most proud of. 
          Each one represents a unique challenge and learning experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Header with logo/icon and external link */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl p-2 flex items-center justify-center shadow-sm bg-gradient-to-br ${project.gradient} opacity-90`}>
                        {project.logo ? (
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        ) : project.icon ? (
                          <project.icon 
                            size={24} 
                            className="text-white dark:text-white"
                          />
                        ) : null}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold dark:text-zinc-100 text-zinc-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                          {project.name}
                        </h3>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 inline-block">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      <ExternalLink 
                        size={18} 
                        className="text-zinc-600 dark:text-zinc-300 group-hover:text-white transition-colors duration-300" 
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-sm sm:text-base dark:text-zinc-300 text-zinc-700 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="relative z-10 flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project link */}
                  <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    <span>View Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-bl-full`} />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
