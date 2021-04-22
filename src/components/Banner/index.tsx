import { Button } from "@hackthenorth/north";
import React, { ComponentPropsWithRef } from "react";
import styled from "styled-components";

import { CloseButtonIcon } from "src/static";
import { hoverStyles } from "src/theme/sharedStyles";

export interface BannerProps extends ComponentPropsWithRef<"div"> {
  show?: boolean;
  toggleShow?: () => void;
}

const Container = styled.div<BannerProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  z-index: 100;

  color: ${({ theme }) => theme.globalConstants.color.textLight};

  & > .contents {
    margin: auto;
  }
`;

const CloseButton = styled(Button)`
  ${hoverStyles}
  &:focus {
    opacity: 0.8;
  }
  cursor: pointer;
`;

const CloseButtonImage = styled.img`
  max-width: 10px;
  max-height: 10px;
`;

const Banner: React.FC<BannerProps> = ({
  show,
  toggleShow,
  children,
  ...rest
}) => (
  <Container show={show} {...rest}>
    <div className="contents">{children}</div>
    <CloseButton
      mods="noBg"
      tabIndex={show ? 0 : -1}
      aria-hidden={show ? undefined : "true"}
    >
      <CloseButtonImage
        src={CloseButtonIcon}
        onClick={toggleShow}
        alt="close-button"
      />
    </CloseButton>
  </Container>
);

export default Banner;
