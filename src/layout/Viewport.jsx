import React from "react";
import { IdentityView } from "./IdentityView.jsx";
import { MemoryView } from "./MemoryView.jsx";
import { BeeSimView } from "./BeeSimView.jsx";
import { PatternView } from "./PatternView.jsx";

export function Viewport({ active }) {
  // Fallback if module or view is missing
  const safe = (component) => {
    try {
      return component;
    } catch (e) {
      return (
        <div className="module-root">
          <h1>Module Error</h1>
          <p className="module-subtitle">
            This module failed to load or is not registered.
          </p>
        </div>
      );
    }
  };

  switch (active) {
    case "identity":
      return safe(<IdentityView />);

    case "memory":
      return safe(<MemoryView />);

    case "beesim":
      return safe(<BeeSimView />);

    case "pattern":
      return safe(<PatternView />);

    default:
      return (
        <div className="module-root">
          <h1>Portal OS</h1>
          <p className="module-subtitle">Select a module from the left.</p>
        </div>
      );
  }
}
