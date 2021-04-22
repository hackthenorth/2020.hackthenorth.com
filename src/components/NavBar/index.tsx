import { UnstyledButton } from "@hackthenorth/north";
import debounce from "lodash.debounce";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ContentWrapper from "src/components/wrappers/ContentWrapper";
import { LogoIconDarkIcon } from "src/static";
import { hoverStyles } from "src/theme/sharedStyles";
import { useScrollDirection, useWindowSize } from "src/utils";
import { ScrollDirection } from "src/utils/hooks/useScrollDirection";

import { NavBarProps } from "./constants";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export interface ContainerProps {
  isScrolledDown: boolean;
  isHidden: boolean;
}

export const NAVBAR_HEIGHT_PX = 60;

const Container = styled.nav.attrs<ContainerProps>(
  ({ isScrolledDown, isHidden, theme }) => ({
    style: {
      backgroundColor: isScrolledDown
        ? theme.globalConstants.color.creamSecondary
        : "transparent",
      transform: isHidden
        ? `translateY(-${NAVBAR_HEIGHT_PX}px)`
        : "translateY(0)",
    },
  })
)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  width: 100%;
  height: ${NAVBAR_HEIGHT_PX}px;
  z-index: 99;

  transition: background-color 250ms, transform 250ms;
`;

const InternalWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogoButton = styled(UnstyledButton)`
  cursor: pointer;
  ${hoverStyles}

  &:focus {
    opacity: 0.5;
  }
`;

const NavLogoImg = styled.img`
  width: 30px;
  height: 30px;
`;

const NavBar: React.FC<NavBarProps> = (props) => {
  const scrollDirection = useScrollDirection({
    initialDirection: ScrollDirection.DOWN,
    thresholdPixels: 10,
  });
  const { windowWidth } = useWindowSize();
  const isTabletOrSmaller = windowWidth <= 768;

  const [isScrolledDown, setScrolledDown] = useState(false);

  /**
   * Change the appearance of the nav bar when a user
   * scrolls down the page.
   */
  const checkScrolledDown = () => {
    const hasScrolledDown = window.scrollY > 0;
    setScrolledDown(hasScrolledDown);
  };

  const debouncedCheckScrollDown = debounce(checkScrolledDown, 250);

  useEffect(() => {
    window.addEventListener("scroll", debouncedCheckScrollDown);
    checkScrolledDown();

    return () => window.removeEventListener("scroll", debouncedCheckScrollDown);
  }, [debouncedCheckScrollDown]);

  const isHidden = isScrolledDown && scrollDirection === ScrollDirection.DOWN;
  return (
    <Container isHidden={isHidden} isScrolledDown={isScrolledDown}>
      <InternalWrapper aria-hidden={isHidden ? "true" : undefined}>
        <NavLogoButton
          onClick={() => window.scrollTo(0, 0)}
          tabIndex={isHidden ? -1 : 0}
          aria-label="Hack The North Logo"
        >
          <NavLogoImg alt="" src={LogoIconDarkIcon} />
        </NavLogoButton>

        {isTabletOrSmaller ? (
          <MobileMenu {...props} isHidden={isHidden} />
        ) : (
          <Menu {...props} isHidden={isHidden} />
        )}
      </InternalWrapper>
    </Container>
  );
};

export default NavBar;
