import { useState, useEffect } from "react";

/**
 * A hook that provides the dimensions
 * of the window. Responsive to window
 * resizes.
 */
export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { windowWidth: width, windowHeight: height };
};
