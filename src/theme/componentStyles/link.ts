import { ThemeDefinition } from "@hackthenorth/north";
import { css } from "styled-components";

export const animatedUnderlineStyles = css`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: width 250ms;
  }
`;

export const linkStyles: ThemeDefinition["link"] = {
  sharedStyles: css`
    ${animatedUnderlineStyles}
    outline: none;

    font-family: ${({ theme }) => theme.globalConstants.fontFamily.body};
    font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyM}px;
    font-weight: bold;
    color: ${({ theme }) => theme.globalConstants.color.bluePrimaryM};

    cursor: pointer;

    &:after {
      left: -6px;
      bottom: 0px;
      background: ${({ theme }) => theme.globalConstants.color.goldSecondary};
      width: 0px;
      height: 6px;
    }

    &:hover:after,
    .focus-visible:after {
      width: calc(100% + 12px);
    }
  `,
  modifiers: {
    redPrimaryM: css`
      color: ${({ theme }) => theme.globalConstants.color.redPrimaryM};
    `,
  },
};
