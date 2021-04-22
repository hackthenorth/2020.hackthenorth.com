import { UnstyledLink, Flex, Spacer } from "@hackthenorth/north";
import React, { useState } from "react";
import styled from "styled-components";

import GradientText from "src/components/GradientText";
import Icon from "src/components/Icon";
import { SOCIALS } from "src/constants";

import { SECTIONS, LAST_YEAR, NOT_MAIN_LINKS, NavBarProps } from "./constants";
import MobileMenuHamburger from "./MobileMenuHamburger";

export interface MobileMenuProps extends NavBarProps {
  isHidden: boolean;
}

const DELAY_S = 0.1;

const MenuOpenContentContainer = styled(Flex).attrs({
  column: true,
  align: "start",
  justify: "center",
})<{ show?: boolean }>`
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  padding: 0 25%;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
`;

const Background = styled.div`
  border-radius: 50%;
  position: absolute;
  z-index: 0;
  top: 10px;
  right: 15px;
  width: 1vw;
  height: 1vw;
  background: ${({ theme }) => theme.globalConstants.color.creamSecondary};

  opacity: 0;
  transition: transform 300ms cubic-bezier(0, 0.995, 0.99, 1),
    opacity 300ms cubic-bezier(0, 0.995, 0.99, 1);

  &.expanded {
    opacity: 1;
    transform: scale(600);
  }
`;

const StyledLink = styled(UnstyledLink)<{ show: boolean; delayN: number }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 1250ms cubic-bezier(0, 0.995, 0.99, 1);
  transition-delay: ${({ delayN }) => delayN * DELAY_S}s;
`;

/**
 * Mobile menu for links in the navbar
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ isHidden, notMainPage }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      <Flex align="center" justify="end">
        <MobileMenuHamburger
          onClick={toggleMobileMenu}
          isOpen={isMobileMenuOpen}
          tabIndex={isHidden ? -1 : 0}
          aria-hidden={isHidden ? "true" : undefined}
          aria-label="Hamburger Menu Icon"
        />
        <Background className={isMobileMenuOpen ? "expanded" : undefined} />
      </Flex>
      <MenuOpenContentContainer show={isMobileMenuOpen}>
        {Object.entries(notMainPage ? NOT_MAIN_LINKS : SECTIONS).map(
          ([id, name], i) => {
            const linkHref =
              id === LAST_YEAR ? "http://2019.hackthenorth.com/" : `/#${id}`;

            return (
              <StyledLink
                key={id}
                href={linkHref}
                onClick={toggleMobileMenu} // menu should close after section is clicked
                show={isMobileMenuOpen}
                delayN={i}
                tabIndex={isHidden ? -1 : 0}
                aria-hidden={isHidden ? "true" : undefined}
              >
                <GradientText
                  className="section-link"
                  mods="heading h3"
                  gradient="gradientRedBlue135"
                >
                  {name}
                </GradientText>
                <Spacer height={25} />
              </StyledLink>
            );
          }
        )}

        <Spacer height={30} />

        <Flex align="start" justify="space-between">
          {Object.entries(SOCIALS).map(([id, { iconSrc, link }]) => (
            <React.Fragment key={id}>
              <StyledLink
                href={link}
                newTab
                show={isMobileMenuOpen}
                delayN={Object.keys(SECTIONS).length}
                tabIndex={isHidden ? -1 : 0}
                aria-hidden={isHidden ? "true" : undefined}
              >
                <Icon src={iconSrc} alt="" />
              </StyledLink>
              <Spacer width={15} />
            </React.Fragment>
          ))}
        </Flex>
      </MenuOpenContentContainer>
    </>
  );
};

export default MobileMenu;
