import React from "react";

const items = [
  { key: "identity", label: "Identity" },
  { key: "pattern", label: "Pattern" },
  { key: "memory", label: "Memory" },
  { key: "beesim", label: "Bee‑SIM" }
];

export function NavRail({ current, onChange }) {
  return (
    <div className="nav-rail">
      {items.map((item) => (
        <button
          key={item.key}
          className={current === item.key ? "active" : ""}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
