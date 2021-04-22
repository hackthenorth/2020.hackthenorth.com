import { ThemeDefinition } from "@hackthenorth/north";
import { css } from "styled-components";

export const textInputStyles: ThemeDefinition["textInput"] = {
  sharedStyles: css`
    color: ${({ theme }) => theme.globalConstants.color.bluePrimaryM};

    border: 1px solid ${({ theme }) => theme.globalConstants.color.bluePrimaryM};
    background: ${({ theme }) => theme.globalConstants.color.white};
    border-radius: 100px;

    padding: 10px 24px;
  `,
};
