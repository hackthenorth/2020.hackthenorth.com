import { css } from "styled-components";

export const hoverStyles = css`
  transition: opacity 250ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
