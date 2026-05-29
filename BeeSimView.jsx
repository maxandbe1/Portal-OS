import React, { useEffect } from "react";

export function BeeSimView() {
  useEffect(() => {
    const pattern = window.Portal?.modules?.pattern;
    if (!pattern?.registerSignal) return;

    const id = setInterval(() => {
      const intensity = 0.4 + Math.random() * 0.6;

      pattern.registerSignal("Bee‑SIM", {
        mode: intensity > 0.8 ? "swarm‑lock" : "scan",
        intensity,
      });
    }, 1200);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="module-root beesim-root">
      <div className="beesim-bars">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="beesim-bar" />
        ))}
      </div>

      <div className="beesim-casefile">
        <h2>Case File</h2>
        <p>Swarm is feeding live signals into Pattern.</p>
        <p>Check the Pattern module to see Bee‑SIM traces.</p>
      </div>
    </div>
  );
}
