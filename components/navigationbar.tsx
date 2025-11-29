"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggleButton from "./themeToggle";
import { Drawer, DrawerContent } from "./ui/drawer";
import logo from "../app/Assets/logo.svg";
import { FaLinesLeaning } from "react-icons/fa6";
import {
  Building2,
  ComputerIcon,
  FolderCog,
  Gitlab,
  GraduationCap,
  Home,
  LogOut,
  LucideOctagonX,
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
    <div className="flex flex-row mb-10 sm:flex-row justify-between w-full px-10 py-4 sm:px-24 sm:py-6 items-center border-b dark:border-zinc-800 border-zinc-200">
      <div>
        {" "}
        <Link href="/">
          <div className="text-4xl font-bold tracking-wider font-pirataOne ">
            K3RTHIK
          </div>
        </Link>
      </div>
      <div className="hidden sm:flex flex-row justify-between gap-10 items-center">
        <Link href="/pages/about">About</Link>
        <Link href="/pages/experience">Experience</Link>
        <Link href="/pages/projects">Projects</Link>
        <Link href="/pages/education">Education</Link>
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
            <Link href="/" onClick={() => setOpen(false)}>
              <Home fontSize="28px" />
            </Link>
            <Link href="/pages/about" onClick={() => setOpen(false)}>
              <User fontSize="28px" />
            </Link>
            <Link href="/pages/experience" onClick={() => setOpen(false)}>
              <Building2 fontSize="28px" />
            </Link>
            <Link href="/pages/projects" onClick={() => setOpen(false)}>
              <ComputerIcon fontSize="28px" />
            </Link>
            <Link href="/pages/education" onClick={() => setOpen(false)}>
              <GraduationCap fontSize="28px" />
            </Link>

            <div>
              <ThemeToggleButton
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
