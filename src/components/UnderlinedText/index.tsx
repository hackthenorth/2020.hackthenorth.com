import { Text, TextProps } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

interface UnderlinedTextProps extends Omit<TextProps, "theme"> {
  underlined?: boolean;
  underlineOnHover?: boolean;
  /**
   * Underline color - must be defined in theme.globalConstants.color
   */
  lineColor?: string;
}

// source: https://codepen.io/mteplitski/pen/NWGQRZV
const UnderlineWrapper = styled.span<UnderlinedTextProps>`
  outline: none;
  width: fit-content;

  background-image: linear-gradient(
    to right,
    transparent 50%,
    ${({ theme, lineColor = "redPrimaryM" }) =>
        lineColor
          ? theme.globalConstants.color[lineColor]
          : theme.globalConstants.color.redPrimaryM}
      50%
  );
  background-origin: 0;
  background-size: 200% 30%;
  background-repeat: repeat-x;
  background-position: 0 100%;
  transition: background-position 0.5s, opacity 250ms ease-in-out;

  ${({ underlined }) => (underlined ? "background-position: -100% 100%;" : "")}

  &:hover,
  &:focus {
    background-position: ${({ underlineOnHover }) =>
      underlineOnHover ? "-100% 100%" : ""};
    cursor: pointer;
  }
`;

const StyledText = styled(Text)`
  outline: none;
`;

const UnderlinedText: React.FC<UnderlinedTextProps> = ({
  children,
  underlined = true,
  underlineOnHover = true,
  lineColor,
  ...rest
}) => (
  <StyledText {...rest}>
    <UnderlineWrapper
      underlined={underlined}
      underlineOnHover={underlineOnHover}
      lineColor={lineColor}
    >
      {children}
    </UnderlineWrapper>
  </StyledText>
);

export default UnderlinedText;
