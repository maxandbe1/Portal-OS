import React from "react";

export function HiveNodeConnector({ size = 32 }) {
  const accent = "#fefce8";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <circle cx="10" cy="16" r="3" fill={accent} />
      <circle cx="22" cy="16" r="3" fill={accent} />
      <line x1="13" y1="16" x2="19" y2="16" stroke={accent} strokeWidth="2" />
    </svg>
  );
}
