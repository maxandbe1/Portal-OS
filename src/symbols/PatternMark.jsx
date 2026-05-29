import React from "react";

export function PatternMark({ size = 28 }) {
  const accent = "#38bdf8";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect x="6" y="6" width="20" height="20" rx="4" fill="#020617" stroke={accent} strokeWidth="1.4" />
      <circle cx="12" cy="12" r="2" fill={accent} />
      <circle cx="20" cy="12" r="2" fill={accent} />
      <circle cx="12" cy="20" r="2" fill={accent} />
      <circle cx="20" cy="20" r="2" fill={accent} />
    </svg>
  );
}
