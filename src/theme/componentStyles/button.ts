import { ThemeDefinition } from "@hackthenorth/north";
import { css } from "styled-components";

export const buttonStyles: ThemeDefinition["button"] = {
  sharedStyles: css`
    font-family: ${({ theme }) => theme.globalConstants.fontFamily.body};
    font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyM};
    font-weight: 500;
    color: ${({ theme }) => theme.globalConstants.color.textLight};

    background: ${({ theme }) => theme.globalConstants.color.bluePrimaryD};
  `,
  modifiers: {
    primary: css`
      border-radius: 88px;
      padding: 10px 24px;
    `,
    secondary: css`
      border: 3px solid ${({ theme }) => theme.globalConstants.color.textDark};
      background-color: transparent;
      color: ${({ theme }) => theme.globalConstants.color.textDark};
      border-radius: 27px;
      padding: 10px 24px;

      &:hover,
      &:focus {
        cursor: pointer;
        outline: none;
        background-color: ${({ theme }) =>
          theme.globalConstants.color.bluePrimaryL};
      }
    `,
    round: css`
      border-radius: 50%;
      padding: 10px;
    `,
    noBg: css`
      background: none;
    `,
  },
};
