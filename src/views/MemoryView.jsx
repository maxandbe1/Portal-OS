import React from "react";

export default function MemoryView() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>Memory Module</h1>
      <p style={{ opacity: 0.8 }}>
        Displays your Portal‑OS memory stack, recall vectors, and pattern
        retention once the Memory Engine is connected.
      </p>

      <pre
        style={{
          background: "#111",
          color: "#0ff",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "1.5rem",
        }}
      >
{`{
  "status": "Memory module loaded",
  "engine": "awaiting memory-engine",
  "stack": [],
  "recall": null
}`}
      </pre>
    </section>
  );
}
