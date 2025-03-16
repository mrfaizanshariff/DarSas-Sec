'use client';

export function FuturisticGrid() {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eb4034" stopOpacity="0.2">
              <animate
                attributeName="stopOpacity"
                values="0.2; 0.4; 0.2"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#000000" stopOpacity="0.1">
              <animate
                attributeName="stopOpacity"
                values="0.1; 0.3; 0.1"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path
              d="M 4 0 L 0 0 0 4"
              fill="none"
              stroke="url(#grid-gradient)"
              strokeWidth="0.5"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="4 0"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}