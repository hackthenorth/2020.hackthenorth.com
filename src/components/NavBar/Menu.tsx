import { UnstyledLink, Flex, Spacer, Text } from "@hackthenorth/north";
import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import styled from "styled-components";

import Icon from "src/components/Icon";
import { Section, SOCIALS, SocialPlatforms } from "src/constants";
import { animatedUnderlineStyles } from "src/theme/componentStyles/link";
import { hoverStyles } from "src/theme/sharedStyles";

import { SECTIONS, NOT_MAIN_LINKS, LAST_YEAR, NavBarProps } from "./constants";

export interface MenuProps extends NavBarProps {
  isHidden: boolean;
}

const JustifyEndFlex = styled(Flex).attrs({
  align: "center",
  justify: "end",
})``;

const StyledLink = styled(UnstyledLink)<{
  underlineOnHover?: boolean;
  underlined?: boolean;
}>`
  display: flex;
  margin-left: 20px;

  &.navbar-text {
    outline: none;
  }

  ${hoverStyles}
  ${animatedUnderlineStyles}

  &:after {
    background: ${({ theme }) => theme.globalConstants.color.redPrimaryM};
    left: -6px;
    bottom: 5px;
    height: 9px;
    width: ${({ underlined, underlineOnHover }) =>
      underlined && !underlineOnHover ? `calc(100% + 12px)` : "0"};
  }

  ${({ underlineOnHover }) =>
    underlineOnHover &&
    `
    &:hover:after,
    &:focus:after {
      width: calc(100% + 12px);
    }
  `}
`;

/**
 * The non-mobile menu portion of the navbar.
 */
const Menu: React.FC<MenuProps> = ({ isHidden, notMainPage }) => {
  const [curSection, setCurSection] = useState<string>();

  const onScrollSpyUpdate = (el: string) =>
    setCurSection(((el as unknown) as HTMLElement)?.id); // types for react-scrollspy are incorrect

  return (
    <JustifyEndFlex>
      <Scrollspy
        items={Object.values(Section)}
        currentClassName=""
        componentTag={JustifyEndFlex}
        onUpdate={onScrollSpyUpdate}
      >
        {Object.entries(notMainPage ? NOT_MAIN_LINKS : SECTIONS).map(
          ([id, name]) => {
            const isCurSection = curSection === id;
            const linkHref =
              id === LAST_YEAR ? "http://2019.hackthenorth.com/" : `/#${id}`;

            return (
              <StyledLink
                key={id}
                href={linkHref}
                tabIndex={isHidden ? -1 : 0}
                aria-hidden={isHidden ? "true" : undefined}
                underlineOnHover={!isCurSection}
                underlined={isCurSection}
                className="navbar-text"
              >
                <Text mods="medium noOutline">{name}</Text>
              </StyledLink>
            );
          }
        )}
      </Scrollspy>
      <Spacer width={5} />

      {Object.values(SocialPlatforms).map((platform, id) => (
        <StyledLink
          key={id}
          href={SOCIALS[platform].link}
          newTab
          tabIndex={isHidden ? -1 : 0}
          aria-hidden={isHidden ? "true" : undefined}
          aria-label={`${platform} Icon`}
        >
          <Icon src={SOCIALS[platform].iconSrc} size={18} alt="" />
        </StyledLink>
      ))}
    </JustifyEndFlex>
  );
};

export default Menu;
