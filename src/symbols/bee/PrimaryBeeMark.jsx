import React from "react";

export function PrimaryBeeMark({ size = 32 }) {
  const accent = "#facc15";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="12" fill="#020617" stroke={accent} strokeWidth="2" />
      <ellipse cx="16" cy="16" rx="6" ry="10" fill="none" stroke={accent} strokeWidth="1.5" />
      <line x1="10" y1="16" x2="22" y2="16" stroke={accent} strokeWidth="1.5" />
      <circle cx="16" cy="10" r="2" fill={accent} />
    </svg>
  );
}
