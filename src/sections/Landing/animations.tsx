import React from "react";
import styled, { css } from "styled-components";

import { Animation } from "src/components";
import {
  GearPlatformJson,
  HLandingPageJson,
  LandingPagePeachPlatformJson,
  NLandingPageJson,
  TLandingPageJson,
} from "src/static";

interface Breakpoint {
  top: number;
  offset: number;
  width: number;
}

interface PositionProps {
  ultrawide: Breakpoint;
  large: Breakpoint;
  tablet: Breakpoint;
  mobile: Breakpoint;
}

const setStyling = ({ ultrawide, large, tablet, mobile }: PositionProps) => css`
  top: ${ultrawide.top}px;
  left: calc(50% + ${ultrawide.offset}px);
  width: ${ultrawide.width}px;

  ${({ theme }) => theme.mediaQueries.large`
    top: ${large.top}px;
    left: calc(50% + ${large.offset}px);
    width: ${large.width}px;
  `};
  ${({ theme }) => theme.mediaQueries.tablet`
    top: ${tablet.top}px;
    left: calc(50% + ${tablet.offset}px);
    width: ${tablet.width}px;
  `};
  ${({ theme }) => theme.mediaQueries.mobile`
    top: ${mobile.top}px;
    left: calc(50% + ${mobile.offset}px);
    width: ${mobile.width}px;
  `};
`;

const Container = styled.div`
  position: absolute;
  z-index: 1;

  transition: transform 250ms;
  &:hover {
    transform: scale(1.02);
  }

  /* smartphones, touchscreens */
  @media (hover: none) and (pointer: coarse) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
  /* stylus-based screens */
  @media (hover: none) and (pointer: fine) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const PeachPlatform = styled(Container)`
  ${setStyling({
    ultrawide: { top: 64, offset: 286, width: 249 },
    large: { top: 66, offset: 156, width: 192 },
    tablet: { top: 38, offset: -24, width: 156 },
    mobile: { top: 76, offset: -30, width: 115 },
  })}
`;

const GearPlatform = styled(Container)`
  ${setStyling({
    ultrawide: { top: 611, offset: -444, width: 330 },
    large: { top: 479, offset: -356, width: 225 },
    tablet: { top: 655, offset: -32, width: 250 },
    mobile: { top: 503, offset: -17, width: 180 },
  })}
`;

const LogoH = styled(Container)`
  ${setStyling({
    ultrawide: { top: 95, offset: -608, width: 375 },
    large: { top: 80, offset: -523, width: 250 },
    tablet: { top: 86, offset: -278, width: 262 },
    mobile: { top: 122, offset: -162, width: 145 },
  })}
`;

const LogoT = styled(Container)`
  ${setStyling({
    ultrawide: { top: 242, offset: 454, width: 397 },
    large: { top: 208, offset: 304, width: 279 },
    tablet: { top: 130, offset: 74, width: 270 },
    mobile: { top: 162, offset: 32, width: 140 },
  })}
`;

const LogoN = styled(Container)`
  ${setStyling({
    ultrawide: { top: 510, offset: -740, width: 360 },
    large: { top: 392, offset: -569, width: 252 },
    tablet: { top: 665, offset: -258, width: 265 },
    mobile: { top: 540, offset: -159, width: 170 },
  })}
`;

const Animations = () => (
  <>
    <LogoH>
      <Animation
        className="animation--h"
        config={{
          animationData: HLandingPageJson,
        }}
        isPaused
      />
    </LogoH>
    <LogoT>
      <Animation
        className="animation--t"
        config={{
          animationData: TLandingPageJson,
        }}
        isPaused
      />
    </LogoT>
    <LogoN>
      <Animation
        className="animation--n"
        config={{
          animationData: NLandingPageJson,
        }}
        isPaused
      />
    </LogoN>
    <GearPlatform>
      <Animation
        className="animation--gear"
        config={{ animationData: GearPlatformJson }}
      />
    </GearPlatform>
    <PeachPlatform>
      <Animation
        className="animation--peach"
        config={{
          animationData: LandingPagePeachPlatformJson,
        }}
      />
    </PeachPlatform>
  </>
);

export default React.memo(Animations);
