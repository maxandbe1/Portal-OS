import React from "react";
import { IdentityView } from "../modules/identity/IdentityView.jsx";
import { PatternView } from "../modules/pattern/PatternView.jsx";
import { MemoryView } from "../modules/memory/MemoryView.jsx";
import { BeeSimView } from "../modules/beesim/BeeSimView.jsx";

export function Viewport({ current }) {
  return (
    <>
      {current === "identity" && <IdentityView />}
      {current === "pattern" && <PatternView />}
      {current === "memory" && <MemoryView />}
      {current === "beesim" && <BeeSimView />}
    </>
  );
}
