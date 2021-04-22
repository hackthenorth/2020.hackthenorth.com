export const isTouchOrStylusBasedScreen =
  window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
  window.matchMedia("(hover: none) and (pointer: fine)").matches;
