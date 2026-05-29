import React from "react";

import IdentityView from "../views/IdentityView.jsx";
import MemoryView from "../views/MemoryView.jsx";
import PatternView from "../views/PatternView.jsx";
import BeeSimView from "../modules/beesim/BeeSimView.jsx";

export default function Viewport({ active }) {
  switch (active) {
    case "identity":
      return <IdentityView />;

    case "memory":
      return <MemoryView />;

    case "pattern":
      return <PatternView />;

    case "beesim":
      return <BeeSimView />;

    default:
      return (
        <div className="module-root">
          <h1>Portal OS</h1>
          <p className="module-subtitle">Select a module from the left.</p>
        </div>
      );
  }
}
