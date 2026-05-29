import {
  getMemoryState,
  addMemory,
  adjustMemoryWeight
} from "../../engines/memory/engine.js";

export function loadMemoryModule(runtime) {
  const api = {
    getState: getMemoryState,
    addMemory,
    adjustMemoryWeight
  };

  runtime.modules.memory = api;
  runtime.registry.memory = {
    key: "memory",
    label: "Memory"
  };

  return { api };
}
