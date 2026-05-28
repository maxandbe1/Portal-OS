import React from "react";

export function IdentityMark({ size = 28 }) {
  const accent = "#FFD54F";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="12" fill="#020617" stroke={accent} strokeWidth="1.4" />
      <circle cx="16" cy="16" r="4" fill={accent} />
    </svg>
  );
}
