import React from "react";

export function SimBeeHybrid({ size = 32 }) {
  const accent = "#fbbf24";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect x="8" y="8" width="16" height="16" rx="4" fill="#020617" stroke={accent} strokeWidth="1.5" />
      <circle cx="16" cy="12" r="2" fill={accent} />
      <circle cx="16" cy="20" r="2" fill={accent} />
      <line x1="12" y1="16" x2="20" y2="16" stroke={accent} strokeWidth="1.5" />
    </svg>
  );
}
