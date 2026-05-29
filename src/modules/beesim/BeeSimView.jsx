import React, { useEffect, useState } from "react";
import { PrimaryBeeMark } from "../../symbols/bee/PrimaryBeeMark.jsx";
import { SwarmLogicMark } from "../../symbols/bee/SwarmLogicMark.jsx";

export function BeeSimView() {
 const [state, setState] = useState(null);

  useEffect(() => {
    const mod = window.Portal.modules.beesim;
    setState(mod.getState());

    const id = setInterval(() => {
      mod.tick();
      setState(mod.getState());
    }, 1200);

    return () => clearInterval(id);
  }, []);

  if (!state) return null;

  const mod = window.Portal.modules.beesim;

  return (
    <div className="module-root">
      <div className="module-header">
        <PrimaryBeeMark />
        <h1>Bee‑SIM</h1>
      </div>

      <p className="module-subtitle">
        Micro‑simulation of agents: energy, focus, and swarm state.
      </p>

      <div className="beesim-meta">
        <SwarmLogicMark size={22} />
        <span>Ticks: {state.ticks}</span>
      </div>

      <div className="beesim-list">
        {state.bees.map((bee) => (
          <div key={bee.id} className="beesim-item">
            <div className="beesim-label">{bee.label}</div>
            <div className="beesim-bars">
              <div className="beesim-bar">
                <span>Energy</span>
                <div className="beesim-track">
                  <div
                    className="beesim-fill energy"
                    style={{ width: `${bee.energy * 100}%` }}
                  />
                </div>
              </div>
              <div className="beesim-bar">
                <span>Focus</span>
                <div className="beesim-track">
                  <div
                    className="beesim-fill focus"
                    style={{ width: `${bee.focus * 100}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="beesim-controls">
              <button onClick={() => { mod.nudge(bee.id, 0.1, 0); setState(mod.getState()); }}>+E</button>
              <button onClick={() => { mod.nudge(bee.id, 0, 0.1); setState(mod.getState()); }}>+F</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
