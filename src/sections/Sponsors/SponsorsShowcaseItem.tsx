import { Flex, Text, Spacer, Link } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

export interface SponsorsShowcaseItemProps {
  name: string;
  logo: string;
  desc: string[];
  link: string;
  linkText: string;
  tabIndex?: number;
}

const ShowcaseTextLink = styled(Link)`
  ${({ theme }) => theme.mediaQueries.tablet`
    font-size: 12px !important;
  `};

  @media (max-width: 550px) {
    font-size: 16px !important;
  }
`;

const ShowcaseText = styled(Text)`
  padding-bottom: 22px;

  ${({ theme }) => theme.mediaQueries.tablet`
    padding-bottom: 10px;
    line-height: 22px !important;
    font-size: 12px !important;
  `};

  @media (max-width: 550px) {
    padding-bottom: 22px;
    line-height: 29px !important;
    font-size: 16px !important;
  }
`;

const TextContainer = styled(Flex)`
  flex-direction: column;
  margin-left: 90px;
  padding: 32px 50px;
  z-index: 2;
  align-items: flex-start;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.medium`
    margin-left: 55px;
    padding: 26px 35px 26px 26px;
  `};

  @media (max-width: 550px) {
    justify-content: center;
    height: 100%;
    margin: 15px;
    padding: 18px 24px;
  }
`;

const Logo = styled.img`
  width: 220px;
  height: auto;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 140px;
  `};

  @media (max-width: 550px) {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

const LogoContainer = styled(Flex)`
  width: 220px;
  max-width: 220px;
  height: auto;
  margin-left: 40px;

  ${({ theme }) => theme.mediaQueries.medium`
    margin-left: 0;
    width: 140px;
    max-width: 140px;
  `};

  @media (max-width: 550px) {
    height: 90px;
    width: 90%;
    margin: 20px auto 40px auto;
  }
`;

const Container = styled(Flex)`
  height: 100%;
  width: 100%;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SponsorsShowcaseItem: React.FC<SponsorsShowcaseItemProps> = ({
  name,
  logo,
  desc,
  link,
  linkText,
  tabIndex,
}) => {
  return (
    <Container align="center">
      <LogoContainer className="showcase-logo" align="center">
        <Logo src={logo} alt={`${name} Logo`} />
      </LogoContainer>

      <TextContainer className="showcase-text">
        {desc.map((text, i) => (
          <ShowcaseText key={i} mods="medium">
            {text}
          </ShowcaseText>
        ))}
        <ShowcaseTextLink href={link} newTab tabIndex={tabIndex}>
          {linkText} <Spacer width={5} display="inline-block" />
          &gt;
        </ShowcaseTextLink>
      </TextContainer>
    </Container>
  );
};

export default SponsorsShowcaseItem;
