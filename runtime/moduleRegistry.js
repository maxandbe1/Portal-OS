export const registry = {};

export function registerModule(key, meta) {
  registry[key] = meta;
}
