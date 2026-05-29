import React, { useState, useEffect } from "react";

export function MemoryView() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const mod = window.Portal.modules.memory;
    if (!mod) return;
    setState(mod.getState());
  }, []);

  if (!state) return null;

  return (
    <div className="module-root">
      <h1>Memory</h1>
      <p className="module-subtitle">Internal memory entries and weights.</p>

      <div className="memory-list">
        {state.entries.map((m) => (
          <div key={m.id} className="memory-item">
            <div className="memory-text">{m.text}</div>
            <div className="memory-weight">Weight: {m.weight.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
