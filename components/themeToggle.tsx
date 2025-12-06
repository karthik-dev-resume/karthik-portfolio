"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleButtonProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

export default function ThemeToggleButton({
  isDarkMode,
  setIsDarkMode,
}: ThemeToggleButtonProps) {
  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border dark:border-zinc-200 border-gray-800"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}


