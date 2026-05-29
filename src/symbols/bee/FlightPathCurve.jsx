import React from "react";

export function FlightPathCurve({ size = 32 }) {
  const accent = "#fef9c3";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <path
        d="M6 24 C10 8, 22 8, 26 24"
        stroke={accent}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="6" cy="24" r="2" fill={accent} />
      <circle cx="26" cy="24" r="2" fill={accent} />
    </svg>
  );
}
