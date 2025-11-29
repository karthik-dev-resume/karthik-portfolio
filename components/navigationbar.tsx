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
      className="flex flex-row mb-10 sm:flex-row justify-between w-full px-10 py-4 sm:px-24 sm:py-6 items-center border-b dark:border-zinc-800 border-zinc-200 sticky top-0 bg-background/80 backdrop-blur-sm z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/">
          <div className="text-4xl font-bold tracking-wider font-pirataOne cursor-pointer">
            K3RTHIK
          </div>
        </Link>
      </motion.div>
      <div className="hidden sm:flex flex-row justify-between gap-10 items-center">
        <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        <a href="#experience" className="hover:opacity-70 transition-opacity">Experience</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
        <a href="#education" className="hover:opacity-70 transition-opacity">Education</a>
      </div>
      <div className="flex flex-row justify-around gap-4">
        <div className="sm:hidden">
          <button onClick={toggleDrawer} className="p-2">
            <Menu />
          </button>
        </div>
        <div className="hidden sm:block">
          <ThemeToggleButton
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </div>
      </div>
      {/* Drawer */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent
          className={`pb-3 pt-3 px-2 ${isDarkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="w-full flex justify-around mt-6 items-center mb-4">
            <a href="#" onClick={() => setOpen(false)}>
              <Home fontSize="28px" />
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              <User fontSize="28px" />
            </a>
            <a href="#experience" onClick={() => setOpen(false)}>
              <Building2 fontSize="28px" />
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              <ComputerIcon fontSize="28px" />
            </a>
            <a href="#education" onClick={() => setOpen(false)}>
              <GraduationCap fontSize="28px" />
            </a>

            <div>
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
