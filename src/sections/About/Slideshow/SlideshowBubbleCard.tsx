import { Text } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import BubbleCard from "src/components/BubbleCard";

import { TABLET_VIEW_BREAKPOINT } from "./constants";

interface SlideshowBubbleCardProps {
  message: string;
}

const StyledBubble = styled(BubbleCard).attrs({
  className: "slideshow-bubble",
})`
  display: flex;
  align-items: center;
  border-radius: 24px;
  background: #ffece8;
  padding: 0px 32px;

  width: 187px;
  height: 300px;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 156px;
    height: 249px;
  `}

  @media (max-width: ${TABLET_VIEW_BREAKPOINT}px) {
    margin-left: 10px;
    height: 218px;
    width: 75%;
    padding: 16px;
  }

  &:after {
    border-radius: 14px;
    background: linear-gradient(
      0deg,
      #ffffff -110.94%,
      rgba(255, 255, 255, 0.312459) 55.12%,
      rgba(255, 255, 255, 0) 106.68%,
      rgba(255, 255, 255, 0.137458) 106.68%
    ),
    ${({ theme }) => theme.globalConstants.color.redPrimaryM};
  }
`;

const StyledText = styled(Text).attrs({ className: "slideshow-message" })`
  line-height: 29px;

  ${({ theme }) => theme.mediaQueries.tablet`
    line-height: 22px;
  `}

  @media (max-width: ${TABLET_VIEW_BREAKPOINT}px) {
    font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyS}px;
  }
`;

const SlideshowBubbleCard: React.FC<SlideshowBubbleCardProps> = ({
  message,
}) => {
  return (
    <StyledBubble>
      <StyledText>{message}</StyledText>
    </StyledBubble>
  );
};

export default SlideshowBubbleCard;
