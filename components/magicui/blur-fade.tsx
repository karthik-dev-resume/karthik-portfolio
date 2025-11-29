"use client"

import { cn } from "../../lib/utils"
import { ReactNode } from "react"

interface BlurFadeProps {
  children: ReactNode
  className?: string
}

export default function BlurFade({ children, className }: BlurFadeProps) {
  return (
    <div className={cn("animate-in fade-in duration-700", className)}>
      {children}
    </div>
  )
}

