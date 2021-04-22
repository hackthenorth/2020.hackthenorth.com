import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface AvatarProps extends ComponentPropsWithoutRef<"img"> {
  name: string;
  size?: number;
  isSquare?: boolean;
  backgroundNum?: number;
}

const BACKGROUND_COLOURS = [
  "aquaSecondary",
  "redPrimaryM",
  "textDark",
  "goldSecondary",
  "tealSecondary",
];

const AvatarWrapper = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const AvatarImage = styled.img<{ isSquare: boolean; backgroundColour: string }>`
  width: 100%;
  height: 100%;
  border-radius: ${({ isSquare }) => (isSquare ? "5px" : "50%")};
  background-color: ${({ theme, backgroundColour }) =>
    theme.globalConstants.color[backgroundColour]};
`;

const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  name,
  size = 100,
  isSquare = false,
  backgroundNum = 0,
  ...rest
}) => (
  <AvatarWrapper className={className} size={size} {...rest}>
    <AvatarImage
      src={src}
      isSquare={isSquare}
      backgroundColour={BACKGROUND_COLOURS[backgroundNum]}
      alt={`Headshot of ${name}`}
    />
  </AvatarWrapper>
);

export default Avatar;
