import { patternActivation } from "./patternActivation.js";

if (!window.Portal) window.Portal = {};
if (!window.Portal.modules) window.Portal.modules = {};

const state = {
  signals: [],
};

function registerSignal(source, payload) {
  state.signals.push({
    id: crypto.randomUUID(),
    source,
    payload,
    ts: Date.now(),
  });

  // NEW: feed activation engine
  patternActivation.feed(source, payload.intensity);
}

function getState() {
  return {
    signals: [...state.signals].slice(-20),
    activation: patternActivation.getState(),
  };
}

window.Portal.modules.pattern = {
  registerSignal,
  getState,
};
