import { Flex, Spacer, Grid } from "@hackthenorth/north";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { Animation } from "src/components";
import { SlideshowAnimationJson } from "src/static";
import { deviceBreakpoints } from "src/theme/deviceBreakpoints";
import { useWindowSize } from "src/utils";

import {
  TABLET_VIEW_BREAKPOINT,
  AUTOPLAY_SLIDE_DURATION,
  SLIDES,
} from "./constants";
import SlideshowBubbleCard from "./SlideshowBubbleCard";
import SlideshowButton from "./SlideshowButton";
import SlideshowImage from "./SlideshowImage";

const ColumnButtonContainer = styled(Flex).attrs({
  column: true,
  justify: "space-between",
  align: "start",
})`
  height: 300px;
  margin: 26px 0px 0px 110px;

  ${({ theme }) => theme.mediaQueries.large`
    margin: 0px 0px 0px 32px;
    height: 410px;
  `}

  @media (max-width: ${TABLET_VIEW_BREAKPOINT}px) {
    margin: 0px 0px 34px 0px;
    height: 150px;
  }
`;

const GridButtonContainer = styled(Grid).attrs({
  rows: 2,
  columns: 2,
  columnGap: 20,
  rowGap: 12,
})`
  margin-bottom: 56px;
`;

const SlideshowAnimationContainer = styled.div`
  position: absolute;
  height: 130px;
  bottom: 8px;
  left: -74px;

  @media (max-width: ${TABLET_VIEW_BREAKPOINT}px) {
    bottom: -36px;
    left: -45px;
  }
`;

const SlideshowContentContainer = styled(Flex)`
  position: relative;
  width: fit-content;
  height: 100%;
`;

const SlideContainer = styled(Flex)`
  position: relative;
  width: 100%;
  height: 100%;

  &:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
  }

  &.slide > .slideshow-image,
  &.slide * .slideshow-image {
    opacity: 0;
    transition-duration: 1s;
  }

  &.slide * .slideshow-bubble {
    background: transparent;
    &:after {
      opacity: 0;
    }
  }

  &.slide * .slideshow-message {
    z-index: 4;
    opacity: 0;
    transition-property: all;
    transition-duration: 1s;
    transform: translateX(-16px);
  }

  &.slide-visible > .slideshow-image,
  &.slide-visible * .slideshow-image {
    opacity: 1;
    transition-property: opacity;
    transition-delay: 0.2s;
  }

  &.slide-visible * .slideshow-message {
    opacity: 1;
    transition-property: opacity;
    transition-delay: 0.7s;
    transform: none;
  }

  &.slide-visible * .slideshow-bubble {
    background: #ffece8;
    &:after {
      opacity: 1;
    }
  }

  &.slide-visible {
    z-index: 3;
  }
`;

const SlideshowAnimation = React.memo(() => (
  <>
    <SlideshowAnimationContainer>
      <Animation
        className="animation--slideshow"
        config={{ animationData: SlideshowAnimationJson }}
        width={150}
        loop={false}
      />
    </SlideshowAnimationContainer>
  </>
));

const Slideshow: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const isTabletView =
    windowWidth <= deviceBreakpoints.medium &&
    windowWidth > TABLET_VIEW_BREAKPOINT;
  const [ref, isInView] = useInView();
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const getNext = (selectedSlideIndex: number) =>
    (selectedSlideIndex + 1) % SLIDES.length;
  const autoplay = useRef<NodeJS.Timeout | null>(null);

  const setAutoplay = useCallback((duration: number) => {
    autoplay.current = setTimeout(() => {
      setSelectedSlideIndex(getNext);
    }, duration);
  }, []);

  const handleClick = (index: number) => {
    setSelectedSlideIndex(index);
    setIsHovering(true);
  };

  const handleMouseEnter = (index: number) => {
    if (selectedSlideIndex === index) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = (index: number) => {
    if (selectedSlideIndex === index) {
      setIsHovering(false);
    }
  };

  useEffect(() => {
    setAutoplay(AUTOPLAY_SLIDE_DURATION);

    return () => {
      if (autoplay.current) clearTimeout(autoplay.current);
    };
  }, [selectedSlideIndex, setAutoplay, isInView]);

  // stop autoplay when not visible or when hovering over selected button
  useEffect(() => {
    if (isInView && !isHovering) {
      setAutoplay(AUTOPLAY_SLIDE_DURATION);
    } else {
      if (autoplay.current) clearTimeout(autoplay.current);
    }
  }, [isInView, isHovering, setAutoplay]);

  // show slideshow buttons in a grid only in tablet view
  const SlideshowButtonContainer: React.FC = isTabletView
    ? GridButtonContainer
    : ColumnButtonContainer;

  // load different slideshow layouts for tablet and mobile views
  const SlideshowContent =
    windowWidth <= TABLET_VIEW_BREAKPOINT
      ? SLIDES.map((slide, i) => (
          <SlideContainer
            key={i}
            className={
              selectedSlideIndex === i ? "slide-visible slide" : " slide"
            }
            column
          >
            <Flex justify="space-between" style={{ position: "relative" }}>
              <SlideshowImage position="vertical" src={slide.images.vertical} />
              {selectedSlideIndex === i && <SlideshowAnimation />}
              <SlideshowBubbleCard message={slide.message} />
            </Flex>
            <SlideshowImage position="top" src={slide.images.horizTop} />
            <SlideshowImage position="bottom" src={slide.images.horizBottom} />
          </SlideContainer>
        ))
      : SLIDES.map((slide, i) => (
          <SlideContainer
            key={i}
            className={
              (selectedSlideIndex === i ? "slide-visible" : "") + " slide"
            }
          >
            <div>
              <SlideshowImage position="vertical" src={slide.images.vertical} />
              {selectedSlideIndex === i && <SlideshowAnimation />}
            </div>
            <Flex column>
              <SlideshowImage position="top" src={slide.images.horizTop} />
              <Spacer height={24} />
              <SlideshowImage
                position="bottom"
                src={slide.images.horizBottom}
              />
            </Flex>
            <div>
              <Spacer height={26} />
              <SlideshowBubbleCard message={slide.message} />
            </div>
          </SlideContainer>
        ));

  return (
    <Flex
      column={windowWidth <= deviceBreakpoints.medium}
      reverse={windowWidth > deviceBreakpoints.medium}
      align={isTabletView ? "center" : undefined}
      ref={ref}
    >
      <SlideshowButtonContainer>
        {SLIDES.map((slide, index) => (
          <SlideshowButton
            key={index}
            selected={selectedSlideIndex === index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedSlideIndex(index);
            }}
          >
            {slide.title}
          </SlideshowButton>
        ))}
      </SlideshowButtonContainer>
      <SlideshowContentContainer>{SlideshowContent}</SlideshowContentContainer>
    </Flex>
  );
};

export default Slideshow;
