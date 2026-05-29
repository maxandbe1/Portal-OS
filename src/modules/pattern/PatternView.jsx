import React, { useEffect, useState } from "react";

export function PatternView() {
  const [state, setState] = useState({
    signals: [],
    activation: {
      resonance: 0,
      mode: "idle",
      lastSource: null,
      lastIntensity: 0,
    },
  });

  useEffect(() => {
    const pattern = window.Portal?.modules?.pattern;
    if (!pattern?.getState) return;

    // Pull state every 800ms
    const update = () => {
      const snapshot = pattern.getState();
      setState(snapshot);
    };

    update();
    const id = setInterval(update, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="module-root">
      <h1>Pattern</h1>
      <p className="module-subtitle">Swarm-linked pattern engine.</p>

      {/* Activation Panel */}
      <div className="pattern-activation">
        <div className="activation-label">Mode:</div>
        <div className="activation-value">{state.activation.mode}</div>

        <div className="activation-label">Resonance:</div>
        <div className="activation-value">
          {state.activation.resonance.toFixed(3)}
        </div>

        <div className="activation-label">Last Source:</div>
        <div className="activation-value">
          {state.activation.lastSource || "—"}
        </div>

        <div className="activation-label">Last Intensity:</div>
        <div className="activation-value">
          {state.activation.lastIntensity.toFixed(3)}
        </div>
      </div>

      {/* Signals */}
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
