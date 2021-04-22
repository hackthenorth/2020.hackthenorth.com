import { Theme, MediaQueryTemplates } from "@hackthenorth/north";

import { buttonStyles } from "./componentStyles/button";
import { linkStyles } from "./componentStyles/link";
import { textStyles } from "./componentStyles/text";
import { textInputStyles } from "./componentStyles/textInput";
import { deviceBreakpoints } from "./deviceBreakpoints";
import { globalConstants } from "./globalConstants";
import { globalStyles } from "./globalStyles";

/**
 * This merges our theme's interface with the default theme interface
 * and other declarations in styled-components, which provides
 * correct typing for the theme object in styled-components' ThemeProvider
 * (see https://www.styled-components.com/docs/api#typescript)
 */
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    globalConstants: {
      color: {
        redPrimaryL: string;
        redPrimaryM: string;
        redPrimaryD: string;

        bluePrimaryL: string;
        bluePrimaryM: string;
        bluePrimaryD: string;

        roseSecondary: string;
        tealSecondary: string;
        navySecondary: string;
        goldSecondary: string;
        aquaSecondary: string;
        creamSecondary: string;
        greySecondary: string;
        powderBlueSecondary: string;
        tanSecondary: string;
        lightBlueSecondary: string;

        gradientRedBlue135: string;
        gradientRedBlue172: string;
        gradientWhiteTan: string;

        white: string;
        textLight: string;
        textDark: string;
        textGrey: string;
      };
      fontFamily: {
        heading: string;
        body: string;
      };
      fontSize: {
        h1: number;
        h2: number;
        hmobile: number;
        h3: number;
        bodyL: number;
        bodyM: number;
        bodyS: number;
        bodyXs: number;
      };
    };
    mediaQueries: MediaQueryTemplates;
  }
}

const themeDef = {
  globalStyles,
  globalConstants,
  deviceBreakpoints,
  button: buttonStyles,
  link: linkStyles,
  text: textStyles,
  textInput: textInputStyles,
};

export default themeDef;
