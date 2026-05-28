import React, { useState } from "react";
import { NavRail } from "./NavRail.jsx";
import { Viewport } from "./Viewport.jsx";

export function PortalShell() {
  const [current, setCurrent] = useState("identity");

  return (
    <div className="portal-shell">
      <NavRail current={current} onChange={setCurrent} />
      <Viewport current={current} />
    </div>
  );
}
