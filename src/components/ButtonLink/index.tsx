import { Link } from "@hackthenorth/north";
import styled from "styled-components";

const ButtonLink = styled(Link).attrs({ removeSharedStyles: true })`
  font-family: ${({ theme }) => theme.globalConstants.fontFamily.body};
  font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyM}px;
  font-weight: 500;
  color: ${({ theme }) => theme.globalConstants.color.textLight};
  background: ${({ theme }) => theme.globalConstants.color.bluePrimaryD};
  border-radius: 88px;
  padding: 15px 35px;
  transition: 250ms;
  z-index: 1;
  width: fit-content;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
  outline: none;
  display: flex;
  align-items: center;
`;

export default ButtonLink;
