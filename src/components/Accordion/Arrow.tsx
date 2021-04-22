import React from "react";
import styled from "styled-components";

import Icon from "src/components/Icon";
import { SolidChevronIcon } from "src/static";

interface ArrowProps {
  isOpen: boolean;
}

const ArrowContainer = styled.div<ArrowProps>`
  display: inline-block;
  margin-left: 5px;
  img {
    position: relative;
    top: -2px;
    transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
  }
`;

const Arrow: React.FC<ArrowProps> = ({ isOpen }) => (
  <ArrowContainer isOpen={isOpen}>
    <Icon src={SolidChevronIcon} size="10" alt="" />
  </ArrowContainer>
);

export default Arrow;
