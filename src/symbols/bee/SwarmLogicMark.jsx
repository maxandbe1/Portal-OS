import React from "react";

export function SwarmLogicMark({ size = 32 }) {
  const accent = "#fde047";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <circle cx="10" cy="10" r="3" fill={accent} />
      <circle cx="22" cy="10" r="3" fill={accent} />
      <circle cx="16" cy="22" r="3" fill={accent} />
      <line x1="10" y1="10" x2="22" y2="10" stroke={accent} strokeWidth="1.5" />
      <line x1="10" y1="10" x2="16" y2="22" stroke={accent} strokeWidth="1.5" />
      <line x1="22" y1="10" x2="16" y2="22" stroke={accent} strokeWidth="1.5" />
    </svg>
  );
}
