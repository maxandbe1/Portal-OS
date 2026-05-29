import { registerModule } from "./moduleRegistry.js";
import { loadIdentityModule } from "../modules/identity/index.js";
import { loadPatternModule } from "../modules/pattern/index.js";
import { loadMemoryModule } from "../modules/memory/index.js";
import { loadBeeSimModule } from "../modules/beesim/index.js";

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
  const pattern = loadPatternModule(runtime);
  const memory = loadMemoryModule(runtime);
  const beesim = loadBeeSimModule(runtime);

  registerModule("identity", { key: "identity", api: identity.api });
  registerModule("pattern", { key: "pattern", api: pattern.api });
  registerModule("memory", { key: "memory", api: memory.api });
  registerModule("beesim", { key: "beesim", api: beesim.api });

  window.Portal = runtime;
  return runtime;
}
