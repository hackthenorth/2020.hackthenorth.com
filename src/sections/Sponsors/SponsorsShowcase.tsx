import { Icon, Flex, Text, Button } from "@hackthenorth/north";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";

import { BubbleCard } from "src/components";
import { randomize } from "src/utils";

import { SPONSORS_SHOWCASE, SPONSORS_SHOWCASE_LENGTH } from "./constants";
import SponsorsShowcaseItem from "./SponsorsShowcaseItem";

const AUTOPLAY_SLIDE_DURATION = 20000;

const randomizedSponsorsShowcase = randomize(SPONSORS_SHOWCASE);

const NavIcon = styled(Icon)`
  stroke: ${({ theme }) => theme.globalConstants.color.navySecondary};
  stroke-width: 5.13428;

  ${({ theme }) => theme.mediaQueries.tablet`
    stroke-width: 4;
    svg {
      width: 18;
      height: 18;
    }
  `};
`;

const NavButton = styled(Button)`
  :hover,
  :focus {
    svg {
      stroke: ${({ theme }) => theme.globalConstants.color.aquaSecondary};
      transition-duration: 250ms;
    }
  }
`;

const NavButtonContainer = styled(Flex)`
  > :not(:first-child) {
    margin-left: 18px;
  }

  ${({ theme }) => theme.mediaQueries.tablet`
    > :not(:first-child) {
      margin-left: 10px;
    }
  `};

  @media (max-width: 550px) {
    > :not(:first-child) {
      margin-left: 6px;
    }
  }
`;

const ProgressBarTrack = styled.div`
  flex: 1;
  height: 5.54px;
  background: rgba(23, 60, 103, 0.31);
`;

// progress is in ms
const ProgressBarLine = styled.div<{
  startProgressAt: number;
  inView: boolean;
  isHovering: boolean;
}>`
  width: ${({ startProgressAt }) =>
    (100 * startProgressAt) / AUTOPLAY_SLIDE_DURATION}%;
  height: 5.54px;
  background: ${({ theme }) => theme.globalConstants.color.aquaSecondary};
  ${({ inView, isHovering, startProgressAt }) =>
    inView && !isHovering
      ? `@keyframes progress-${startProgressAt} {
      from {
        width: ${(100 * startProgressAt) / AUTOPLAY_SLIDE_DURATION}%;
      }
      to {
        width: 100%;
      }
    }
    animation: ${AUTOPLAY_SLIDE_DURATION - startProgressAt}ms
      progress-${startProgressAt} linear infinite;
      
    animation-play-state: running; `
      : `animation-play-state: paused;`}

  @media (prefers-reduced-motion) {
    animation: none;
  }
`;

const NavContainer = styled(Flex)`
  margin: 20px 0;
  margin-left: 350px;

  > :not(:first-child) {
    margin-left: 36.85px;
  }

  ${({ theme }) => theme.mediaQueries.medium`
    margin-left: 200px;

    > :not(:first-child) {
      margin-left: 18px;
    }
  `};

  @media (max-width: 550px) {
    margin-left: 0;

    > :not(:first-child) {
      margin-left: 14px;
    }
  }
`;

const BubbleBackground = styled(BubbleCard)`
  position: absolute;
  top: 0;

  margin-left: 350px;
  width: calc(100% - 350px);
  height: 100%;

  ${({ theme }) => theme.mediaQueries.medium`
    margin-left: 190px;
    width: calc(100% - 200px);
    height: 100%;
  `};

  @media (max-width: 550px) {
    margin-left: 10px;
    width: calc(100% - 30px);
    margin-top: 125px;
    height: calc(100% - 120px);
  }
`;

const CarouselItem = styled.div`
  width: 100%;
  height: 100%;

  &:not(:first-child) {
    margin-left: -100%;
  }

  &.carousel-slide * .showcase-text {
    opacity: 0;
    transition-duration: 0.7s;
  }

  &.carousel-slide * .showcase-logo {
    opacity: 0;
    transition-property: all;
    transition-duration: 0.7s;
    margin-top: -125px;

    ${({ theme }) => theme.mediaQueries.tablet`
      margin-top: -75px;
    `};

    @media (max-width: 550px) {
      margin-top: -50px;
    }
  }

  &.carousel-slide-visible * .showcase-text {
    opacity: 1;
    transition-delay: 0.7s;
  }

  &.carousel-slide-visible * .showcase-logo {
    opacity: 1;
    transition-property: opacity;
    transition-delay: 0.7s;
    margin-top: 0;
  }

  &.carousel-slide-visible {
    z-index: 3;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: initial;
  }
`;

const CarouselItemsContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 50px;

  ${({ theme }) => theme.mediaQueries.tablet`
    margin-bottom: 35px;
  `};

  @media (max-width: 550px) {
    margin-bottom: 45px;
  }
`;

const CarouselContainer = styled.div`
  height: 100%;
  padding-top: 22px;

  ${({ theme }) => theme.mediaQueries.medium`
    padding: 40px 0;
  `};

  @media (max-width: 550px) {
    padding: 30px 0 0 0;
  }
`;

const Container = styled.div``;

const getNext = (currentSlide: number) =>
  (currentSlide + 1) % SPONSORS_SHOWCASE_LENGTH;
const getPrevious = (currentSlide: number) =>
  (currentSlide - 1 + SPONSORS_SHOWCASE_LENGTH) % SPONSORS_SHOWCASE_LENGTH;

const SponsorShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [autoplayStart, setAutoplayStart] = useState<number>(0);

  // we have isHoveringBuffer because we need to delay the first rerender of the progress bar
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isHoveringBuffer, setIsHoveringBuffer] = useState<boolean>(false);

  const autoplay = useRef<NodeJS.Timeout | null>(null);
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide(getNext(currentSlide)),
    onSwipedRight: () => setCurrentSlide(getPrevious(currentSlide)),
  });
  const [ref, isInView] = useInView();

  const setAutoplay = useCallback(
    (duration: number) => {
      autoplay.current = setTimeout(() => {
        setCurrentSlide(getNext);
        if (currentProgress !== 0) setCurrentProgress(0);
        setAutoplay(AUTOPLAY_SLIDE_DURATION);
      }, duration);
    },
    [currentProgress]
  );

  const onUserChange = useCallback((next: boolean) => {
    setCurrentSlide(next ? getNext : getPrevious);
  }, []);

  const onKeyEnter = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") onUserChange(true);
    },
    [onUserChange]
  );

  // stop n start autoplay according to visibility and hover
  useEffect(() => {
    if (isInView && !isHoveringBuffer) {
      setAutoplay(AUTOPLAY_SLIDE_DURATION - currentProgress);
      setAutoplayStart(new Date().getTime());
    } else {
      if (autoplay.current) {
        const curTime = new Date().getTime();
        setCurrentProgress(
          (curTime - autoplayStart + currentProgress) % AUTOPLAY_SLIDE_DURATION
        );
        clearTimeout(autoplay.current);
      }
    }
    setIsHovering(isHoveringBuffer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, isHoveringBuffer]);

  return (
    <Container>
      <Text mods="heading h3">Sponsor showcase</Text>
      <CarouselContainer
        onMouseEnter={() => setIsHoveringBuffer(true)}
        onMouseLeave={() => setIsHoveringBuffer(false)}
        role="region"
        aria-label="Sponsors Carousel"
        aria-live="polite"
        ref={ref}
      >
        <CarouselItemsContainer {...handlers} align="center">
          {randomizedSponsorsShowcase.map((sponsor, i) => (
            <CarouselItem
              key={sponsor.logo}
              className={
                (currentSlide === i ? "carousel-slide-visible" : "") +
                " carousel-slide"
              }
              onKeyDown={(e) => onKeyEnter(e)}
              tabIndex={currentSlide === i ? 0 : -1}
              aria-selected={currentSlide === i}
              aria-label={`${i + 1} of ${SPONSORS_SHOWCASE_LENGTH}`}
            >
              <SponsorsShowcaseItem
                {...sponsor}
                tabIndex={currentSlide === i ? 0 : -1}
              />
            </CarouselItem>
          ))}
          <BubbleBackground />
        </CarouselItemsContainer>

        <NavContainer align="center">
          <Text as="h3">
            {currentSlide + 1}/{SPONSORS_SHOWCASE_LENGTH}
          </Text>
          <ProgressBarTrack>
            <ProgressBarLine
              inView={isInView}
              isHovering={isHovering}
              startProgressAt={currentProgress}
            />
          </ProgressBarTrack>
          <NavButtonContainer>
            <NavButton
              mods="noBg"
              onClick={() => onUserChange(false)}
              aria-label="next"
            >
              <NavIcon name="ChevronLeft" />
            </NavButton>
            <NavButton
              mods="noBg"
              onClick={() => onUserChange(true)}
              aria-label="previous"
            >
              <NavIcon name="ChevronRight" />
            </NavButton>
          </NavButtonContainer>
        </NavContainer>
      </CarouselContainer>
    </Container>
  );
};

export default SponsorShowcase;
