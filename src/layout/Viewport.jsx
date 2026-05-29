import { IdentityView } from "../modules/identity/IdentityView.jsx";
import { PatternView } from "../modules/pattern/PatternView.jsx";
import { MemoryView } from "../modules/memory/MemoryView.jsx";
import { BeeSimView } from "../modules/beesim/BeeSimView.jsx";
import { ModuleInspector } from "../ModuleInspector.jsx";




export function Viewport({ current }) {
  switch (current) {
   case "inspector": return <ModuleInspector />;

    case "identity": return <IdentityView />;
    case "pattern": return <PatternView />;
    case "memory": return <MemoryView />;
    case "beesim": return <BeeSimView />;
    default: return null;
  }
}
