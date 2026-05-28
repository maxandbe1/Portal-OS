import React, { useEffect, useState } from "react";
import { IdentityMark } from "../../symbols/IdentityMark.jsx";

export function IdentityView() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const mod = window.Portal.modules.identity;
    setState(mod.getState());
  }, []);

  if (!state) return null;

  const mod = window.Portal.modules.identity;

  return (
    <div className="module-root">
      <div className="module-header">
        <IdentityMark />
        <h1>Identity</h1>
      </div>

      <p className="module-subtitle">Core self‑representation.</p>

      <div className="id-section">
        <h2>Name</h2>
        <input
          value={state.name}
          onChange={(e) => {
            mod.setName(e.target.value);
            setState(mod.getState());
          }}
        />
      </div>
    </div>
  );
}
