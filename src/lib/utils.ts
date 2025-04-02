export const sleep = (ms: number = 1_500) =>
  new Promise((r) => setTimeout(r, ms));
