import {
  Lottie,
  ReactLottieConfig,
  ReactLottieEvent,
} from "@crello/react-lottie";
import React, { useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { useHoverEvents } from "src/utils";

export interface AnimationProps extends React.ComponentPropsWithoutRef<"div"> {
  config: ReactLottieConfig;
  height?: string | number;
  width?: string | number;
  isPaused?: boolean;
  loop?: boolean;
}

const convert = (n: string | number | undefined) =>
  typeof n === "string" || n === undefined ? n : `${n}px`;

const Container = styled.span`
  position: relative;
  display: inline-block;
`;

const Animation: React.FC<AnimationProps> = ({
  config,
  height,
  width,
  isPaused,
  loop = true,
  ...rest
}) => {
  const [ref, isInView] = useInView();
  const [isPlaying, setIsPlaying] = useState(!isPaused);
  const { onHoverStart, toggleHover } = useHoverEvents(setIsPlaying);

  const state = isInView ? (isPlaying ? "playing" : "paused") : "stopped";

  const lottieEventListeners: ReactLottieEvent[] = useMemo(
    () => [
      {
        name: "loopComplete",
        callback: () => {
          setIsPlaying(false);
        },
      },
    ],
    []
  );

  return (
    <Container
      aria-hidden
      onMouseEnter={!isPlaying ? onHoverStart : undefined}
      onClick={toggleHover}
      ref={ref}
      {...rest}
    >
      <Lottie
        playingState={state}
        config={{
          ...config,
          loop,
          rendererSettings: {
            progressiveLoad: true,
          },
        }}
        height={convert(height)}
        width={convert(width)}
        lottieEventListeners={lottieEventListeners}
      />
    </Container>
  );
};

export default React.memo(Animation);
