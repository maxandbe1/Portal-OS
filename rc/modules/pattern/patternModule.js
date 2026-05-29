// src/modules/pattern/patternModule.js
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
}

function getState() {
  return {
    signals: [...state.signals].slice(-20), // last 20
  };
}

window.Portal.modules.pattern = {
  registerSignal,
  getState,
};
