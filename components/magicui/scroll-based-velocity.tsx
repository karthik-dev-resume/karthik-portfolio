"use client"

import { ReactNode } from "react"
import { cn } from "../../lib/utils"

interface VelocityScrollProps {
  children?: ReactNode
  text?: string
  default_velocity?: number
  className?: string
}

export function VelocityScroll({ 
  children, 
  text, 
  default_velocity = 1,
  className 
}: VelocityScrollProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div className="inline-block animate-scroll">
        {text || children}
      </div>
    </div>
  )
}

