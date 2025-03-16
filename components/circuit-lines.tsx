'use client';

export function CircuitLines() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#eb4034" stopOpacity="0">
              <animate
                attributeName="offset"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#eb4034" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#eb4034" stopOpacity="0">
              <animate
                attributeName="offset"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <path
          d="M10,30 Q30,30 40,15 T70,15"
          stroke="url(#line-gradient)"
          fill="none"
          strokeWidth="0.5"
        />
        <path
          d="M30,50 Q50,50 60,35 T90,35"
          stroke="url(#line-gradient)"
          fill="none"
          strokeWidth="0.5"
        />
        <path
          d="M20,70 Q40,70 50,55 T80,55"
          stroke="url(#line-gradient)"
          fill="none"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}