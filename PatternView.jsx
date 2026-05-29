import React, { useEffect, useState } from "react";

export function PatternView() {
  const [state, setState] = useState({ signals: [] });

  useEffect(() => {
    const mod = window.Portal?.modules?.pattern;
    if (!mod) return;

    const update = () => setState(mod.getState());
    update();

    const id = setInterval(update, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="module-root">
      <h1>Pattern</h1>
      <p className="module-subtitle">Active signals and swarm links.</p>

      <div className="pattern-grid">
        {state.signals.map((s) => (
          <div key={s.id} className="pattern-card">
            <div className="pattern-label">{s.source}</div>
            <div className="pattern-value">
              {s.payload.mode} · {s.payload.intensity.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
