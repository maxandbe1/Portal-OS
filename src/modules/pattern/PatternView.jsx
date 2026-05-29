import React, { useEffect, useState } from "react";
import { PatternMark } from "../../symbols/PatternMark.jsx";

export function PatternView() {
  const [state, setState] = useState(null);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const mod = window.Portal.modules.pattern;
    setState(mod.getState());
  }, []);

  if (!state) return null;

  const mod = window.Portal.modules.pattern;

  return (
    <div className="module-root">
      <div className="module-header">
        <PatternMark />
        <h1>Pattern</h1>
      </div>

      <p className="module-subtitle">Cycles, recurrences, and behavioral rhythms.</p>

      <div className="pattern-add">
        <input
          placeholder="New pattern label"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button
          onClick={() => {
            if (!draft.trim()) return;
            mod.addPattern(draft.trim());
            setDraft("");
            setState(mod.getState());
          }}
        >
          Add
        </button>
      </div>

      <div className="pattern-list">
        {state.cycles.map((cycle) => (
          <div key={cycle.id} className="pattern-item">
            <div className="pattern-label">{cycle.label}</div>
            <div className="pattern-bar">
              <div
                className="pattern-fill"
                style={{ width: `${cycle.strength * 100}%` }}
              />
            </div>
            <div className="pattern-controls">
              <button onClick={() => { mod.adjustPatternStrength(cycle.id, -0.1); setState(mod.getState()); }}>−</button>
              <button onClick={() => { mod.adjustPatternStrength(cycle.id, 0.1); setState(mod.getState()); }}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
