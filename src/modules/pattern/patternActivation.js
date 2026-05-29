// Pattern Activation Engine
export const patternActivation = {
  state: {
    resonance: 0,
    mode: "idle",
    lastSource: null,
    lastIntensity: 0,
  },

  feed(source, intensity) {
    // Update resonance
    this.state.resonance =
      this.state.resonance * 0.85 + intensity * 0.15;

    // Mode switching
    if (intensity > 0.82) {
      this.state.mode = "lock-on";
    } else if (intensity > 0.55) {
      this.state.mode = "tracking";
    } else {
      this.state.mode = "idle";
    }

    this.state.lastSource = source;
    this.state.lastIntensity = intensity;
  },

  getState() {
    return { ...this.state };
  },
};
