import {
  getBeeSimState,
  tickBeeSim,
  nudgeBee
} from "../../engines/beesim/engine.js";

export function loadBeeSimModule(runtime) {
  const api = {
    getState: getBeeSimState,
    tick: tickBeeSim,
    nudge: nudgeBee
  };

  runtime.modules.beesim = api;
  runtime.registry.beesim = {
    key: "beesim",
    label: "Bee‑SIM"
  };

  return { api };
}
