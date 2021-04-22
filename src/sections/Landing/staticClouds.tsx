import React from "react";
import styled, { css } from "styled-components";

import { LeftCloudImg, RightCloudImg } from "src/static";

interface Breakpoint {
  top: number;
  width: number;
  offset: number;
}

interface StyleProps {
  ultrawide: Breakpoint;
  large: Breakpoint;
  tablet: Breakpoint;
  mobile: Breakpoint;
  opacity: number;
}

const setStyling = ({
  ultrawide,
  large,
  tablet,
  mobile,
  opacity,
}: StyleProps) => css`
  top: ${ultrawide.top}px;
  width: ${ultrawide.width}px;
  left: calc(50% + ${ultrawide.offset}px);
  opacity: ${opacity};
  position: absolute;
  pointer-events: none;

  ${({ theme }) => theme.mediaQueries.large`
    top: ${large.top}px;
    width: ${large.width}px;
    left: calc(50% + ${large.offset}px);
  `};
  ${({ theme }) => theme.mediaQueries.tablet`
    top: ${tablet.top}px;
    width: ${tablet.width}px;
    left: calc(50% + ${tablet.offset}px);
  `};
  ${({ theme }) => theme.mediaQueries.mobile`
    top: ${mobile.top}px;
    width: ${mobile.width}px;
    left: calc(50% + ${mobile.offset}px);
  `};
`;

const Cloud1Large = styled.img.attrs({ src: LeftCloudImg, alt: "" })`
  ${setStyling({
    ultrawide: { top: 248, offset: -1232, width: 675 },
    large: { top: 151, offset: -885, width: 500 },
    tablet: { top: 0, offset: 0, width: 0 },
    mobile: { top: 0, offset: 0, width: 0 },
    opacity: 0.5,
  })}
  ${({ theme }) => theme.mediaQueries.tablet`
    display: none;
  `};
`;

const Cloud1Tablet = styled.img.attrs({ src: RightCloudImg, alt: "" })`
  ${setStyling({
    ultrawide: { top: 0, offset: 0, width: 0 },
    large: { top: 0, offset: 0, width: 0 },
    tablet: { top: 151, offset: -495, width: 390 },
    mobile: { top: 198, offset: -300, width: 300 },
    opacity: 0.5,
  })}

  display: none;
  ${({ theme }) => theme.mediaQueries.tablet`
    display: block;
  `};
`;

const Cloud2 = styled.img.attrs({ src: RightCloudImg, alt: "" })`
  ${setStyling({
    ultrawide: { top: 540, offset: -715, width: 600 },
    large: { top: 318, offset: -601, width: 540 },
    tablet: { top: 539, offset: -462, width: 410 },
    mobile: { top: 449, offset: -270, width: 350 },
    opacity: 0.7,
  })}

  ${({ theme }) => theme.mediaQueries.tablet`
    opacity: 1;
  `};
`;

const Cloud3 = styled.img.attrs({ src: LeftCloudImg, alt: "" })`
  ${setStyling({
    ultrawide: { top: 126, offset: -330, width: 370 },
    large: { top: 58, offset: -327, width: 370 },
    tablet: { top: 44, offset: -136, width: 230 },
    mobile: { top: 78, offset: -99, width: 135 },
    opacity: 0.3,
  })}

  ${({ theme }) => theme.mediaQueries.tablet`
    opacity: 0.35;
  `};
`;

const Cloud4 = styled.img.attrs({ src: RightCloudImg, alt: "" })`
  ${setStyling({
    ultrawide: { top: 55, offset: 331, width: 750 },
    large: { top: 55, offset: 97, width: 475 },
    tablet: { top: 82, offset: 48, width: 400 },
    mobile: { top: 102, offset: 28, width: 230 },
    opacity: 0.5,
  })}
`;

const Cloud5 = styled.img.attrs({ src: RightCloudImg, alt: "" })`
  ${setStyling({
    ultrawide: { top: 592, offset: 175, width: 830 },
    large: { top: 427, offset: 8, width: 580 },
    tablet: { top: 702, offset: 62, width: 400 },
    mobile: { top: 616, offset: -106, width: 330 },
    opacity: 0.75,
  })}

  ${({ theme }) => theme.mediaQueries.large`
    opacity: 0.7;
  `};
  ${({ theme }) => theme.mediaQueries.tablet`
    opacity: 0.75;
  `};
`;

const Cloud6 = styled.img.attrs({ src: LeftCloudImg, alt: "" })`
  ${setStyling({
    ultrawide: { top: 446, offset: 791, width: 475 },
    large: { top: 226, offset: 477, width: 550 },
    tablet: { top: 358, offset: 139, width: 400 },
    mobile: { top: 336, offset: 26, width: 250 },
    opacity: 0.5,
  })}
`;

const StaticClouds = () => (
  <>
    <Cloud1Large aria-hidden />
    <Cloud1Tablet aria-hidden />
    <Cloud2 aria-hidden />
    <Cloud3 aria-hidden />
    <Cloud4 aria-hidden />
    <Cloud5 aria-hidden />
    <Cloud6 aria-hidden />
  </>
);

export default StaticClouds;
