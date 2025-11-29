"use client"

export default function InlineAnimatedSVG() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />
        <path
          d="M 200 50 L 200 200 L 250 200"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-primary animate-spin"
          style={{ transformOrigin: "200px 200px" }}
        />
      </svg>
    </div>
  )
}

