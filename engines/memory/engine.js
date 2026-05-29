let memoryState = {
  entries: [
    { id: 1, text: "First anchor", weight: 0.7 },
    { id: 2, text: "Recurring thought", weight: 0.5 }
  ]
};

export function getMemoryState() {
  return memoryState;
}

export function addMemory(text) {
  const next = {
    id: Date.now(),
    text,
    weight: 0.5
  };
  memoryState = { ...memoryState, entries: [...memoryState.entries, next] };
  return memoryState;
}

export function adjustMemoryWeight(id, delta) {
  memoryState = {
    ...memoryState,
    entries: memoryState.entries.map((m) =>
      m.id === id
        ? {
            ...m,
            weight: Math.max(0, Math.min(1, m.weight + delta))
          }
        : m
    )
  };
  return memoryState;
}
