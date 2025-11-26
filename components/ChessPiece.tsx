// components/ChessPiece.tsx
export function ChessPiece({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id="purpleOrangeGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#5a14c0" />
          <stop offset="100%" stopColor="#ffb380" />
        </linearGradient>
      </defs>

      {/* Crown */}
      <path
        d="M60 40L80 20L100 40L120 20L140 40L130 70H70L60 40Z"
        fill="url(#purpleOrangeGradient)"
      />
      {/* Head */}
      <circle cx="100" cy="90" r="30" fill="url(#purpleOrangeGradient)" />
      {/* Neck */}
      <rect x="80" y="120" width="40" height="25" fill="url(#purpleOrangeGradient)" />
      {/* Body */}
      <path
        d="M65 145H135L145 210H55L65 145Z"
        fill="url(#purpleOrangeGradient)"
      />
      {/* Body highlight */}
      <path
        d="M80 150H120L125 205H75L80 150Z"
        fill="#000"
        opacity="0.35"
      />
      {/* Base */}
      <ellipse
        cx="100"
        cy="235"
        rx="55"
        ry="15"
        fill="url(#purpleOrangeGradient)"
        opacity="0.8"
      />
      <rect
        x="45"
        y="235"
        width="110"
        height="30"
        fill="url(#purpleOrangeGradient)"
        opacity="0.7"
      />
      <ellipse cx="100" cy="265" rx="65" ry="18" fill="url(#purpleOrangeGradient)" />
      {/* Accent lines */}
      <line
        x1="75"
        y1="170"
        x2="125"
        y2="170"
        stroke="#b8c709"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="72"
        y1="190"
        x2="128"
        y2="190"
        stroke="#b8c709"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
}
