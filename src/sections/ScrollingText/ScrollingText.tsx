import { Flex, Text, Spacer } from "@hackthenorth/north";
import React, { useMemo, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import {
  InfiniteCarousel,
  SectionWrapper,
  RotatingGear,
  GearColors,
} from "src/components";
import { CarouselDirection } from "src/components/InfiniteCarousel";
import { deviceBreakpoints } from "src/theme/deviceBreakpoints";
import { useWindowSize } from "src/utils";

import {
  TOP_SCROLLING_TEXT,
  MIDDLE_SCROLLING_TEXT,
  BOTTOM_SCROLLING_TEXT,
  ScrollingItemData,
} from "./constants";

interface GenerateCarouselArgs {
  speed: number;
  direction: CarouselDirection;
  data: ScrollingItemData[];
  name: string;
}

const StyledInfiniteCarousel = styled(InfiniteCarousel)`
  width: 100%;
  height: 104px;
  ${({ theme }) => theme.mediaQueries.large`
    height: 74px;
  `};
  ${({ theme }) => theme.mediaQueries.largeMobile`
    height: 39px;
  `};
`;

const StyledText = styled(Text)<{ isStats: boolean }>`
  color: ${({ theme, isStats }) =>
    isStats
      ? theme.globalConstants.color.navySecondary
      : theme.globalConstants.color.lightBlueSecondary};
  font-size: 55px;
  line-height: 82px;
  opacity: ${({ isStats }) => (isStats ? 1 : 0.6)};
  white-space: nowrap;

  ${({ theme }) => theme.mediaQueries.large`
    font-size: 48px;
    line-height: 72px;
  `};
  ${({ theme }) => theme.mediaQueries.largeMobile`
    font-size: 24px;
    line-height: 36px;
  `};
`;

const StyledSpacer = styled(Spacer)`
  height: 72px;
  ${({ theme }) => theme.mediaQueries.large`
    height: 60px;
  `};
  ${({ theme }) => theme.mediaQueries.largeMobile`
    height: 30px;
  `};
`;

const StyledSectionWrapper = styled(SectionWrapper)`
  z-index: auto;
`;

const ScrollingText = () => {
  const [containerRef, isInView] = useInView();

  const { windowWidth } = useWindowSize();
  const spacing = useMemo(
    () =>
      windowWidth <= deviceBreakpoints.largeMobile
        ? 18
        : windowWidth <= deviceBreakpoints.large
        ? 35
        : 48,
    [windowWidth]
  );
  const gearSize = useMemo(
    () =>
      windowWidth <= deviceBreakpoints.largeMobile
        ? 39
        : windowWidth <= deviceBreakpoints.large
        ? 74
        : 85,
    [windowWidth]
  );

  const generateInfiniteCarousel = useCallback(
    ({
      speed = 0,
      direction = "left",
      data = [],
      name,
    }: GenerateCarouselArgs) => (
      <StyledInfiniteCarousel
        name={`scrolling-text-carousel-${name}`}
        spacing={spacing}
        direction={direction}
        speed={speed}
        aria-label="Scrolling Text Carousel"
      >
        {data.map(({ content, type }, i) =>
          type === "gear" ? (
            <RotatingGear
              isPaused={!isInView}
              key={`${name}-${content}-gear-${i}`}
              color={content as GearColors}
              isClockwise={direction === "right"}
              size={gearSize}
            />
          ) : (
            <StyledText key={content} mods="heading" isStats={type === "stats"}>
              {content}
            </StyledText>
          )
        )}
      </StyledInfiniteCarousel>
    ),
    [spacing, gearSize, isInView]
  );

  return (
    <StyledSectionWrapper ref={containerRef}>
      <Flex column justify="center">
        {generateInfiniteCarousel({
          data: TOP_SCROLLING_TEXT,
          speed: 22,
          direction: "left",
          name: "top",
        })}
        <StyledSpacer />
        {generateInfiniteCarousel({
          data: MIDDLE_SCROLLING_TEXT,
          speed: 17,
          direction: "right",
          name: "middle",
        })}
        <StyledSpacer />
        {generateInfiniteCarousel({
          data: BOTTOM_SCROLLING_TEXT,
          speed: 20,
          direction: "left",
          name: "bottom",
        })}
      </Flex>
    </StyledSectionWrapper>
  );
};

export default ScrollingText;
