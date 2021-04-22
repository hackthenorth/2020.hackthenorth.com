import React, { useState, useMemo } from "react";
import styled, { keyframes } from "styled-components";

import Icon from "src/components/Icon";
import { CoralGearImg, MustardGearImg, TealGearImg } from "src/static";

export enum GearColors {
  CORAL = "Coral",
  MUSTARD = "Mustard",
  TEAL = "Teal",
}

interface RotatingGearProps {
  color: GearColors;
  size?: number;
  isClockwise?: boolean;
  isPaused?: boolean;
}

const rotateClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateCounterClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const GearWrapper = styled(Icon)<{
  isClockwise?: boolean;
  show: boolean;
  isPaused: boolean;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${({ isClockwise }) =>
      isClockwise ? rotateClockwise : rotateCounterClockwise}
    5s infinite linear;

  @media (prefers-reduced-motion) {
    animation: none;
  }

  transition: opacity 250ms;
  opacity: ${({ show }) => (show ? 1 : 0)};
  animation-play-state: ${({ isPaused }) => (isPaused ? "paused" : "running")};
`;

const RotatingGear: React.FC<RotatingGearProps> = ({
  color,
  size = 80,
  isClockwise = false,
  isPaused = false,
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const image = useMemo(() => {
    switch (color) {
      case GearColors.CORAL:
        return CoralGearImg;
      case GearColors.MUSTARD:
        return MustardGearImg;
      default:
        return TealGearImg;
    }
  }, [color]);

  return (
    <GearWrapper
      onLoad={() => setLoaded(true)}
      isClockwise={isClockwise}
      src={image}
      size={size}
      isPaused={isPaused}
      show={isLoaded}
      alt={`${color} Gear`}
    />
  );
};

export default React.memo(RotatingGear);
