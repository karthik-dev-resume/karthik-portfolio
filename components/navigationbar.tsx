"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggleButton from "./themeToggle";
import { Drawer, DrawerContent } from "./ui/drawer";
import {
  Building2,
  ComputerIcon,
  GraduationCap,
  Home,
  Menu,
  User,
} from "lucide-react";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row mb-4 sm:mb-6 md:mb-8 lg:mb-10 justify-between w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-3 sm:py-4 md:py-5 lg:py-6 items-center border-b dark:border-zinc-800 border-zinc-200 sticky top-0 bg-background/80 backdrop-blur-sm z-50"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider sm:tracking-widest notable-regular cursor-pointer">
            K3RTHIK
          </div>
        </Link>
      </motion.div>
      <div className="hidden md:flex flex-row justify-between gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
        <a
          href="#about"
          className="text-sm lg:text-base hover:opacity-70 transition-opacity"
        >
          About
        </a>
        <a
          href="#experience"
          className="text-sm lg:text-base hover:opacity-70 transition-opacity"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-sm lg:text-base hover:opacity-70 transition-opacity"
        >
          Projects
        </a>
        <a
          href="#education"
          className="text-sm lg:text-base hover:opacity-70 transition-opacity"
        >
          Education
        </a>
      </div>
      <div className="flex flex-row justify-around gap-2 sm:gap-3 md:gap-4 items-center">
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="p-1.5 sm:p-2 hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="hidden md:block">
          <ThemeToggleButton
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </div>
      </div>
      {/* Drawer */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent
          className={`pb-4 sm:pb-6 pt-4 sm:pt-6 px-4 sm:px-6 ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="w-full flex flex-wrap justify-center sm:justify-around gap-4 sm:gap-6 md:gap-8 mt-2 sm:mt-4 items-center mb-2 sm:mb-4">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Home"
            >
              <Home className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="About"
            >
              <User className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="#experience"
              onClick={() => setOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Experience"
            >
              <Building2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Projects"
            >
              <ComputerIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="#education"
              onClick={() => setOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Education"
            >
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>

            <div className="p-2">
              <ThemeToggleButton
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </motion.nav>
  );
}
