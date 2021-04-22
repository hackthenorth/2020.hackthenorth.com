import { ThemeDefinition } from "@hackthenorth/north";
import { css } from "styled-components";

export const textStyles: ThemeDefinition["text"] = {
  sharedStyles: css`
    font-family: ${({ theme }) => theme.globalConstants.fontFamily.body};
    color: ${({ theme }) => theme.globalConstants.color.textDark};
    margin: 0;
  `,
  modifiers: {
    heading: css`
      font-family: ${({ theme }) => theme.globalConstants.fontFamily.heading};
    `,
    italic: css`
      font-style: italic;
    `,
    link: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyM}px;
      font-weight: bold;
      color: ${({ theme }) => theme.globalConstants.color.bluePrimaryM};

      cursor: pointer;
    `,
    h1: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.h1}px;
      ${({ theme }) => theme.mediaQueries.largeMobile`
        font-size: ${theme.globalConstants.fontSize.hmobile}px;
      `};
    `,
    h2: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.h2}px;
      line-height: 1.5;

      ${({ theme }) => theme.mediaQueries.largeMobile`
        line-height: 40px;
        font-size: ${theme.globalConstants.fontSize.hmobile}px;
      `};
    `,
    hmobile: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.hmobile}px;
    `,
    h3: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.h3}px;
    `,
    large: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyL}px;
    `,
    medium: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyM}px;
      line-height: 29px;
    `,
    small: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyS}px;
      line-height: 1.4;
    `,
    xSmall: css`
      font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyXs}px;
    `,
    bold: css`
      font-weight: bold;
    `,
    center: css`
      text-align: center;
    `,
    white: css`
      color: ${(props) => props.theme.globalConstants.color.white};
    `,
    noOutline: css`
      outline: none;
    `,
  },
};
