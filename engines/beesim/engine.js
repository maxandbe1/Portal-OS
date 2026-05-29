let beeSimState = {
  ticks: 0,
  bees: [
    { id: 1, label: "Scout", energy: 0.7, focus: 0.8 },
    { id: 2, label: "Worker", energy: 0.5, focus: 0.6 },
    { id: 3, label: "Sentinel", energy: 0.9, focus: 0.4 }
  ]
};

export function getBeeSimState() {
  return beeSimState;
}

export function tickBeeSim() {
  beeSimState = {
    ...beeSimState,
    ticks: beeSimState.ticks + 1,
    bees: beeSimState.bees.map((b) => ({
      ...b,
      energy: clamp01(b.energy - 0.03 + Math.random() * 0.06),
      focus: clamp01(b.focus - 0.02 + Math.random() * 0.04)
    }))
  };
  return beeSimState;
}

export function nudgeBee(id, deltaEnergy, deltaFocus) {
  beeSimState = {
    ...beeSimState,
    bees: beeSimState.bees.map((b) =>
      b.id === id
        ? {
            ...b,
            energy: clamp01(b.energy + deltaEnergy),
            focus: clamp01(b.focus + deltaFocus)
          }
        : b
    )
  };
  return beeSimState;
}

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}
