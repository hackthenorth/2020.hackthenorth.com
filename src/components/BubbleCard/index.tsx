import React from "react";
import styled from "styled-components";

const Bubble = styled.div`
  position: relative;
  border-radius: 24px;
  margin-right: 15px;
  margin-bottom: 14px;

  background: ${({ theme }) =>
    theme.globalConstants.color.greySecondary}; /* default background colour */
  padding: 32px; /* default padding */

  /* this is the background (back) bubble */
  &:after {
    content: "";
    position: absolute;
    border-radius: 24px;
    z-index: -1;
    top: 14px;
    left: 15px;
    width: 100%;
    height: 100%;

    background: ${({ theme }) =>
      theme.globalConstants.color
        .powderBlueSecondary}; /* default background colour */
  }
`;

/*  By default, the message bubble will have auto height, which
 *  means it will be the height of it's child. However, if you
 *  wrap BubbleCard in a styled component, you can set a
 *  fixed height.
 */

const BubbleCard: React.FC = ({ children, ...rest }) => (
  <Bubble {...rest}>{children}</Bubble>
);

export default BubbleCard;
