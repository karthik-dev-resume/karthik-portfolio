"use client";

import { motion } from "framer-motion";
import InlineAnimatedSVG from "@/components/animatedIcon.js";
import BlurFade from "@/components/magicui/blur-fade";

import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Twitter,
} from "lucide-react";

export default function LandingPage() {
  const socialLinks = [
    {
      href: "https://github.com/karthik-dev-resume",
      icon: Github,
      label: "Github",
    },
    { href: "https://x.com/thugwiser", icon: Twitter, label: "Twitter" },
    {
      href: "https://www.linkedin.com/in/karthik-d-shetty-b85570244/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:karthik.shetty.resume@gmail.com",
      icon: Mail,
      label: "Email",
    },

    { href: "tel:+7026800874", icon: Phone, label: "Phone" },
  ];
  return (
    <BlurFade className="gap-12 flex flex-col sm:flex-row items-center justify-center px-6 sm:px-24 ">
      <div className=" items-left flex flex-col sm:flex-col justify-center gap-10 items-center">
        <div className="opacity-100 transform-none">
          <h1 className=" font-righteous font-semibold text-wrap tracking-wide text-4xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            Software Engineer, Frontend Enthusiast, Avid Learner, Optimist
          </h1>
          <p className="text-justify dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I&apos;m Karthik Shetty, an experienced frontend developer
            passionate about learning and building open-source software that is
            beneficial to developers and the world at large.
          </p>
        </div>

        <div className="flex justify-start items-start flex-row w-full flex-wrap  gap-2">
          {socialLinks.map(({ href, icon: Icon, label }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm inline-flex items-center gap-3 p-2 rounded-md border dark:border-zinc-200 border-gray-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Icon size={16} /> {label}
            </motion.a>
          ))}
        </div>
      </div>
      <div className=" w-full sm:7/12 justify-center items-center">
        <InlineAnimatedSVG />
      </div>
    </BlurFade>
  );
}
