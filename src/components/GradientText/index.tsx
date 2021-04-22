import { Text, TextProps } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

interface GradientProps {
  gradient: string;
}

interface GradientTextProps extends GradientProps, Omit<TextProps, "theme"> {}

/* stylelint-disable */
const StyledText = styled(Text)<GradientProps>`
  display: inline-block;
  background: ${({ theme, gradient }) =>
    theme.globalConstants.color[gradient] || gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient,
  ...rest
}) => (
  <StyledText gradient={gradient} {...rest}>
    {children}
  </StyledText>
);

export default GradientText;
