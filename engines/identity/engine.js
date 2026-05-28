let identityState = {
  name: "Max",
  stability: 0.82,
  coherence: 0.74
};

export function getIdentityState() {
  return identityState;
}

export function setName(name) {
  identityState = { ...identityState, name };
  return identityState;
}
