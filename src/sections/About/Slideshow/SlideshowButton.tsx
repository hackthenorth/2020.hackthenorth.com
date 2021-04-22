import React from "react";
import styled from "styled-components";

import { UnderlinedText } from "src/components";
import { hoverStyles } from "src/theme/sharedStyles";

import { TABLET_VIEW_BREAKPOINT } from "./constants";

// not using Button from North because of custom styling and the need to override background
interface SlideshowButtonProps {
  selected?: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}
const StyledUnderlinedText = styled(UnderlinedText)`
  ${hoverStyles}
  text-align: left;
  font-size: 26px;

  ${({ theme }) => theme.mediaQueries.large`
    font-size: ${theme.globalConstants.fontSize.h3}px;
  `}

  @media (max-width: ${TABLET_VIEW_BREAKPOINT}px) {
    font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyL}px;
    width: 100%;
  }

  opacity: ${({ underlined }) => (underlined ? "1" : "0.5")};

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const SlideshowButton: React.FC<SlideshowButtonProps> = ({
  selected = false,
  children,
  ...rest
}) => (
  <StyledUnderlinedText
    tabIndex={0}
    mods="bold h3"
    role="button"
    underlined={selected}
    lineColor="goldSecondary"
    underlineOnHover={false}
    {...rest}
  >
    {children}
  </StyledUnderlinedText>
);

export default SlideshowButton;
