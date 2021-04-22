import React, { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";

import { TABLET_VIEW_BREAKPOINT } from "./constants";

interface SlideshowImageProps extends ComponentPropsWithoutRef<"img"> {
  position: "vertical" | "top" | "bottom";
}

const backgroundStyles = css`
  position: relative;
  border-radius: 14px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const VerticalImageContainer = styled.div<{ backgroundImage: string }>`
  ${backgroundStyles}
  ${({ backgroundImage }) => `background-image: url(${backgroundImage});`}
  margin: 26px 26px 0px 0px;
  width: 186px;
  height: 310px;
  ${({ theme }) => theme.mediaQueries.tablet`
    width: 155px;
    height: 258px;
  `}
  @media (max-width: ${TABLET_VIEW_BREAKPOINT}px) {
    margin: 0px 10px 0px 0px;
    height: 231px;
    width: 100%;
  }
`;

const HorizontalImageContainer = styled.div<{ backgroundImage: string }>`
  ${backgroundStyles}
  ${({ backgroundImage }) => `background-image: url(${backgroundImage});`}
  width: 289px;
  height: 192px;
  margin-right: 26px;
  ${({ theme }) => theme.mediaQueries.large`
    width: 280px;
  `}
  ${({ theme }) => theme.mediaQueries.tablet`
    width: 241px;
    height: 160px;
  `}
  @media (max-width: ${TABLET_VIEW_BREAKPOINT}px) {
    width: 100%;
    height: 163px;
    margin: 18px 0px 0px 0px;
  }
`;

const Overlay = styled.div<{ position: string }>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme, position }) =>
    position === "vertical"
      ? theme.globalConstants.color.goldSecondary
      : position === "top"
      ? theme.globalConstants.color.aquaSecondary
      : `linear-gradient(148.35deg, ${theme.globalConstants.color.roseSecondary} 0%, rgba(255, 255, 255, 0) 100%), ${theme.globalConstants.color.redPrimaryM}`};
  opacity: 0.2;
  width: 100%;
  height: 100%;
`;

const SlideshowImage: React.FC<SlideshowImageProps> = ({
  position,
  src = "",
}) => {
  const ImageContainer =
    position === "vertical" ? VerticalImageContainer : HorizontalImageContainer;
  return (
    <ImageContainer backgroundImage={src} className="slideshow-image">
      <Overlay position={position} />
    </ImageContainer>
  );
};

export default SlideshowImage;
