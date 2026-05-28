import {
  getIdentityState,
  setName
} from "../../engines/identity/engine.js";

export function loadIdentityModule(runtime) {
  const api = {
    getState: getIdentityState,
    setName
  };

  runtime.modules.identity = api;
  runtime.registry.identity = {
    key: "identity",
    label: "Identity"
  };

  return { api };
}
