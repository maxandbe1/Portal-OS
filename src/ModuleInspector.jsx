import React, { useEffect, useState } from "react";

export function ModuleInspector() {
  const [mods, setMods] = useState([]);

  useEffect(() => {
    const portal = window.Portal;
    if (!portal?.modules) return;
    setMods(Object.keys(portal.modules));
  }, []);

  return (
    <div className="module-root">
      <h1>Module Inspector</h1>
      <p className="module-subtitle">Shows which modules successfully loaded.</p>

      <div style={{ fontSize: 13, marginTop: 12 }}>
        {mods.length === 0 && "No modules registered."}
        {mods.map((m) => (
          <div key={m}>{m}</div>
        ))}
      </div>
    </div>
  );
}
