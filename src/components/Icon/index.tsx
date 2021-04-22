import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export interface IconProps extends ComponentPropsWithoutRef<"img"> {
  /**
   * The path to where the icon can be found.
   */
  src: string;
  /**
   * The size of the icon in `px` (or otherwise if you specified a string). Defaults to `24px`.
   */
  size?: number | string;
}

const DEFAULT_ICON_SIZE = 24;

const IconContainer = styled.img<{
  size: number | string;
}>`
  width: ${({ size }) => (typeof size === "number" ? size + "px" : size)};
  height: ${({ size }) => (typeof size === "number" ? size + "px" : size)};
`;

const Icon: React.FC<IconProps> = ({
  src,
  size = DEFAULT_ICON_SIZE,
  ...rest
}) => <IconContainer src={src} size={size} {...rest} />;

export default Icon;
