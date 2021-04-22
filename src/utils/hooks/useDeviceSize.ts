import { deviceBreakpoints, DeviceType } from "src/theme/deviceBreakpoints";

import { useWindowSize } from "./useWindowSize";

/**
 * A hook to determine the type of device the app is running on, based on the screen size.
 * @returns whether or not the screen is of type `device` or a list of all possible devices sorted descending by size
 */
export function useDeviceSize(device: DeviceType): boolean;
export function useDeviceSize(): DeviceType[];
export function useDeviceSize(device?: DeviceType) {
  const { windowWidth } = useWindowSize();

  if (device) {
    return windowWidth <= deviceBreakpoints[device];
  }

  return Object.entries(deviceBreakpoints)
    .filter(([, width]) => width <= windowWidth)
    .map(([device]) => device) as DeviceType[];
}
