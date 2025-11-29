"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
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
  default_velocity = 2,
  className 
}: VelocityScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = containerRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [])

  const content = text || children
  const duplicatedContent = `${content} • ${content}`

  return (
    <div 
      ref={containerRef}
      className={cn("overflow-hidden whitespace-nowrap", className)}
    >
      <div 
        className={cn(
          "inline-block",
          isVisible && "animate-scroll"
        )}
        style={{
          animationDuration: `${20 / default_velocity}s`,
        }}
      >
        {duplicatedContent}
      </div>
    </div>
  )
}

