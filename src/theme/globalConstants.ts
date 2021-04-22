import { GlobalConstants } from "@hackthenorth/north";

const WHITE = "#FFFFFF";

export const globalConstants: GlobalConstants = {
  color: {
    redPrimaryL: "#F8D7D0",
    redPrimaryM: "#F4AC9E",
    redPrimaryD: "#F3675A",

    bluePrimaryL: "#CAEEFD",
    bluePrimaryM: "#43AFDE",
    bluePrimaryD: "#008AC4",

    roseSecondary: "#F2445B",
    tealSecondary: "#5ABCAA",
    navySecondary: "#004D85",
    goldSecondary: "#FFB45C",
    aquaSecondary: "#1DC1CC",
    creamSecondary: "#FCEEE1",
    greySecondary: "#EEF2F2",
    powderBlueSecondary: "#CDE8E8",
    tanSecondary: "#FFF6EE",
    lightBlueSecondary: "#6691AF",

    gradientRedBlue135: "linear-gradient(135deg, #F3625B 0%, #024B85 100%)",
    gradientRedBlue172: "linear-gradient(172.17deg, #F3625B 0%, #024B85 100%)",
    gradientWhiteTan: "linear-gradient(180deg, #FFFFFF 0%, #FFF6EE 100%)",

    white: WHITE,
    textLight: WHITE,
    textDark: "#0E3460",
    textGrey: "#1E324A",
  },
  fontFamily: {
    heading:
      "Castledown, -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    body:
      "Inter, -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  fontSize: {
    h1: 64,
    h2: 40,
    hmobile: 32,
    h3: 24,
    bodyL: 18,
    bodyM: 16,
    bodyS: 12,
    bodyXs: 10,
  },
  borderRadius: {
    input: 100,
  },
  padding: {
    input: "12px 24px",
  },
};
