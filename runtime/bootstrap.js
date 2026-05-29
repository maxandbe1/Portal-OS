import { registerModule } from "./moduleRegistry.js";
import { loadIdentityModule } from "../modules/identity/index.js";
import { loadPatternModule } from "../modules/pattern/index.js";
import { loadMemoryModule } from "../modules/memory/index.js";

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

  // Load modules AFTER runtime exists
  const identity = loadIdentityModule(runtime);
  const pattern = loadPatternModule(runtime);
  const memory = loadMemoryModule(runtime);

  // Register modules
  registerModule("identity", { key: "identity", api: identity.api });
  registerModule("pattern", { key: "pattern", api: pattern.api });
  registerModule("memory", { key: "memory", api: memory.api });

  // Expose runtime globally
  window.Portal = runtime;
  return runtime;
}
