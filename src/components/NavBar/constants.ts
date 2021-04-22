import { Section } from "src/constants";
import { Route } from "src/constants";

export interface NavBarProps {
  notMainPage?: boolean;
}

export const LAST_YEAR = "last-year";
// on pages that aren't `/`, we want to show a link to main page instead of the sections on main page
export const NOT_MAIN_LINKS = {
  [Route.MAIN]: "Home",
};

export const SECTIONS = {
  [Section.ABOUT]: "About",
  [Section.KEYNOTE_SPEAKERS]: "Keynote",
  [Section.JUDGES]: "Judges",
  [Section.SPONSORS]: "Sponsors",
  [Section.FAQ]: "FAQ",
  [LAST_YEAR]: "2019",
};
