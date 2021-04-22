import React, { ComponentPropsWithoutRef } from "react";
import Parallax from "react-rellax";
import styled, { css } from "styled-components";

import { LeftCloudImg, RightCloudImg } from "src/static";
import { deviceBreakpoints } from "src/theme/deviceBreakpoints";
import { useWindowSize } from "src/utils";

interface ImageProps {
  left: number;
  bottom?: number;
  width: number;
  top?: number;
  zIndex?: number;
}

const style = {
  willChange: "transform",
  position: "absolute",
  zIndex: "4",
  width: "100%",
};

const CloudCurtain: React.FC<ComponentPropsWithoutRef<"svg">> = ({
  ...rest
}) => (
  <svg
    width="100%"
    height="1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...rest}
  >
    <rect width="100%" height="1000" fill="#FFF6EE" />
  </svg>
);

const cloudStyling = css<ImageProps>`
  position: absolute;
  width: ${({ width }) => width}%;
  left: ${({ left }) => left}%;
  z-index: ${({ zIndex }) => zIndex || 2};
  ${({ bottom }) => bottom !== undefined && `bottom: ${bottom}px;`}
  ${({ top }) => top !== undefined && `top: ${top}px;`}
  pointer-events: none;

  ${({ theme, width, left }) => theme.mediaQueries.large`
    width: ${(width / 100) * deviceBreakpoints.large}px;
    left: calc(${(left / 100) * deviceBreakpoints.large}px + 100% - ${
    deviceBreakpoints.large
  }px);
  `};

  ${({ theme, left }) => theme.mediaQueries.tablet`
    left: calc(${(left / 100) * deviceBreakpoints.large}px + ${
    deviceBreakpoints.tablet * 1.2 - deviceBreakpoints.large
  }px + 100% - ${deviceBreakpoints.tablet}px);
  `};

  ${({ theme, width, left }) => theme.mediaQueries.mobile`
    width: ${(width / 100) * deviceBreakpoints.tablet}px;
    left: calc(${(left / 100) * deviceBreakpoints.tablet}px + 140% - ${
    deviceBreakpoints.tablet
  }px);
  `};
`;

const StyledCloudCurtain = styled(CloudCurtain)<ImageProps>`
  ${cloudStyling}
`;

const Image = styled.img<ImageProps>`
  ${cloudStyling}
`;

const ParallaxWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;

  ${({ theme }) => theme.mediaQueries.tablet`
    margin-top: 50px;
  `};
  ${({ theme }) => theme.mediaQueries.mobile`
    margin-top: 0;
  `};
`;

const ParallaxCloudsContainer = styled.div`
  display: flex;
  > div {
    width: 50%;
  }
`;

const ParallaxClouds = () => {
  const { windowWidth, windowHeight } = useWindowSize();
  const curtainTopPosition =
    windowWidth <= deviceBreakpoints.mobile
      ? -90
      : windowWidth <= deviceBreakpoints.tablet
      ? -175
      : -150;

  const parallaxSpeed =
    (windowWidth <= deviceBreakpoints.mobile && windowHeight <= 505) ||
    (windowWidth <= deviceBreakpoints.tablet && windowHeight <= 736)
      ? 5
      : 10;

  return (
    <ParallaxWrapper>
      <Parallax speed={parallaxSpeed} style={style}>
        <Image
          alt=""
          aria-hidden
          src={RightCloudImg}
          width={46}
          left={-10}
          bottom={74}
          zIndex={4}
        />
        <Image
          alt=""
          aria-hidden
          src={LeftCloudImg}
          width={39}
          left={12}
          bottom={74}
          zIndex={5}
        />
        <Image
          alt=""
          aria-hidden
          src={RightCloudImg}
          width={42}
          left={30}
          bottom={22}
          zIndex={4}
        />
        <Image
          alt=""
          aria-hidden
          src={RightCloudImg}
          width={39}
          left={52}
          bottom={22}
          zIndex={3}
        />
        <Image
          alt=""
          aria-hidden
          src={LeftCloudImg}
          width={46}
          left={63}
          bottom={0}
          zIndex={4}
        />
        <StyledCloudCurtain width={100} left={0} top={curtainTopPosition} />
      </Parallax>
    </ParallaxWrapper>
  );
};

const DynamicClouds = () => {
  const { windowWidth } = useWindowSize();

  return windowWidth >= 2560 ? (
    <ParallaxCloudsContainer>
      <ParallaxClouds />
      <ParallaxClouds />
    </ParallaxCloudsContainer>
  ) : (
    <ParallaxClouds />
  );
};

export default DynamicClouds;
