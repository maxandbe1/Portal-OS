import { registerModule } from "./moduleRegistry.js";
import { loadIdentityModule } from "../modules/identity/index.js";

export function bootstrapPortal() {
  const runtime = {
    modules: {},
    registry: {},
    premium: {
      accent: "#FFD54F",
      surface: "#111827",
      glow: "0 0 20px rgba(255,213,79,0.25)"
    }
  };

  const identity = loadIdentityModule(runtime);
  registerModule("identity", { key: "identity", api: identity.api });

  window.Portal = runtime;
  return runtime;
}
