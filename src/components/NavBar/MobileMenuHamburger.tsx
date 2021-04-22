import { UnstyledButton, ButtonProps } from "@hackthenorth/north";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface MobileMenuHamburgerProps extends Omit<ButtonProps, "theme"> {
  isOpen: boolean;
}

const animateInMenu = () => {
  const circle = document.getElementById("circle");
  if (circle) {
    circle.className += " expand";
  }

  const lines = Array.from(document.getElementsByClassName("line"));

  setTimeout(() => {
    lines.forEach((line) => {
      line.classList.toggle("collapse");
    });
  }, 10);

  setTimeout(() => {
    lines[1].classList.toggle("hide");
    lines[0].className += " rotate30";
    lines[2].className += " rotate150";
  }, 80);

  setTimeout(() => {
    lines[0].className += " rotate45";
    lines[2].className += " rotate135";
  }, 130);
};

const animateOutMenu = () => {
  const circle = document.getElementById("circle");
  if (circle) circle.classList.remove("expand");

  const lines = Array.from(document.getElementsByClassName("line"));

  lines[0].classList.remove("rotate45");
  lines[0].className += " rotate30";

  lines[2].classList.remove("rotate135");
  lines[2].className += " rotate150";

  setTimeout(() => {
    lines[0].classList.remove("rotate30");
    lines[2].classList.remove("rotate150");
  }, 50);

  setTimeout(() => {
    lines[1].classList.remove("hide");
    lines.forEach((line) => {
      line.classList.remove("collapse");
    });
  }, 70);
};

const Container = styled(UnstyledButton)`
  position: relative;
  z-index: 2;
  cursor: pointer;
  width: 30px;
  height: 20px;
`;

const HamburgerLine = styled.div`
  position: absolute;
  margin: auto;

  top: 0px;
  height: 3px;
  width: 30px;
  background: ${({ theme }) => theme.globalConstants.color.textDark};

  transition: all 400ms ease-out;
  &.collapse {
    top: 10px;
    transition: all 70ms ease-out;
  }
  &.rotate30 {
    transform: rotate(30deg);
    transition: all 50ms ease-out;
  }
  &.rotate150 {
    transform: rotate(150deg);
    transition: all 50ms ease-out;
  }
  &.rotate45 {
    transform: rotate(45deg);
    transition: all 100ms ease-out;
  }
  &.rotate135 {
    transform: rotate(135deg);
    transition: all 100ms ease-out;
  }
  &.hide {
    display: none;
  }
`;

const Line1 = styled(HamburgerLine)`
  top: 0;
`;

const Line2 = styled(HamburgerLine)`
  top: 9px;
`;

const Line3 = styled(HamburgerLine)`
  top: 18px;
`;

/**
 * A tasty component om nom
 */
const MobileMenuHamburger: React.FC<MobileMenuHamburgerProps> = ({
  isOpen,
  ...rest
}) => {
  /**
   * Show the hamburger menu icon when menu is closed, and
   * an X icon if the menu is closed.
   * Note: this is kind of hacky since the animations are copied over
   * from the 2019 site, ideally we want to use `isOpen` directly
   * to determine the position/rotation of the menu.
   * @todo(alex): fix this lol
   */
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      // prevent the out animation from being triggered on first render
      isFirstRender.current = false;
    } else {
      if (isOpen) {
        animateInMenu();
      } else {
        animateOutMenu();
      }
    }
  }, [isOpen]);

  return (
    <Container {...rest}>
      <Line1 className="line x" />
      <Line2 className="line y" />
      <Line3 className="line z" />
    </Container>
  );
};

export default React.memo(MobileMenuHamburger);
