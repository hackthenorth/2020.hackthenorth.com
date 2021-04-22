import { createGlobalStyle } from "styled-components";

/*
 * Castledown Web Fonts from colophon-foundry.org
 *
 * The fonts included in this stylesheet are subject to the End User License purchased
 * from Colophon Foundry. The fonts are protected under domestic and international trademark and
 * copyright law. You are prohibited from modifying, reverse engineering, duplicating, or
 * distributing this font software.
 *
 * (c) 2019 Colophon Foundry
 *
 * Licenced to Stanley Huang, Techyon
 */

import {
  FontCastledownEOT,
  FontCastledownTTF,
  FontCastledownWOFF,
  FontCastledownWOFF2,
  FontInterBoldWOFF,
  FontInterBoldWOFF2,
  FontInterMediumWOFF,
  FontInterMediumWOFF2,
  FontInterRegularWOFF,
  FontInterRegularWOFF2,
} from "src/static";

export const globalStyles = createGlobalStyle`
  @font-face {
      font-family: "Castledown";
      src: url(${FontCastledownEOT});
      src: url(${FontCastledownEOT}#iefix) format("embedded-opentype"),
           url(${FontCastledownWOFF2}) format("woff2"),
           url(${FontCastledownWOFF}) format("woff"),
           url(${FontCastledownTTF}) format("truetype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: "Inter";
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url(${FontInterRegularWOFF2}) format("woff2"),
         url(${FontInterRegularWOFF}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url(${FontInterMediumWOFF2}) format("woff2"),
         url(${FontInterMediumWOFF}) format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url(${FontInterBoldWOFF2}) format("woff2"),
         url(${FontInterBoldWOFF}) format("woff");
  }

  html {
    height: 100%;
    margin: 0;
    padding: 0;
    --scroll-behavior: smooth;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  .plyr__poster {
    display: none;
  }
  .plyr{
    --plyr-color-main: transparent;
    --plyr-font-family: "Inter"
  }
`;
