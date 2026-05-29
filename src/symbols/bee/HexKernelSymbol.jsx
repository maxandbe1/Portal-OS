import React from "react";

export function HexKernelSymbol({ size = 32 }) {
  const accent = "#fef08a";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <polygon
        points="16,6 24,11 24,21 16,26 8,21 8,11"
        fill="#020617"
        stroke={accent}
        strokeWidth="1.5"
      />
      <circle cx="16" cy="16" r="3" fill={accent} />
    </svg>
  );
}
