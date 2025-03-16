'use client';

export function RadarAnimation() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <radialGradient id="radar-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#eb4034" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#eb4034" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="none" stroke="#eb4034" strokeWidth="0.5" opacity="0.3" />
        <path
          d="M 50 50 L 95 50 A 45 45 0 0 1 85 85"
          fill="url(#radar-gradient)"
          opacity="0.6"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}