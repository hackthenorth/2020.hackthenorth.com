import { Flex, Spacer, Text } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import {
  SectionWrapper,
  ContentWrapper,
  GradientText,
  Icon,
  ButtonLink,
} from "src/components";
import { MLHLogoHeroImg, ArrowWhiteIcon } from "src/static";
import { useDeviceSize } from "src/utils";

import Animations from "./animations";
import DynamicClouds from "./dynamicClouds";
import StaticClouds from "./staticClouds";

interface StyledSpacerProps {
  ultrawide: number;
  large?: number;
  tablet?: number;
  mobile?: number;
}

const Title = styled(GradientText).attrs({ removeSharedStyles: true })`
  width: fit-content;
  font-size: 52px;
  line-height: 58px;
  z-index: 2;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    font-size: 48px;
    line-height: 54px;
  `};

  ${({ theme }) => theme.mediaQueries.mobile`
    font-size: 42px;
    line-height: 63px;
  `};

  @media (max-width: 325px) {
    font-size: 36px;
    line-height: 56px;
  }

  /* sharedStyles minus line-height, color and font-family */
  margin: 0;
`;

const Subtitle = styled(Text).attrs({ removeSharedStyles: true })`
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.globalConstants.color.navySecondary};
  z-index: 2;

  @media (max-width: 550px) {
    font-size: 18px;
    line-height: 20px;
  }

  ${({ theme }) => theme.mediaQueries.largeMobile`
    font-size: 16px;
    line-height: 18px;
  `};

  ${({ theme }) => theme.mediaQueries.mobile`
    font-size: 14px;
    line-height: 16px;
  `};

  /* sharedStyles minus line-height, color and font-family */
  margin: 0;
`;

const BodyText = styled(Text).attrs({ removeSharedStyles: true })`
  line-height: 29px;
  font-size: ${({ theme }) => theme.globalConstants.fontSize.bodyM}px;
  color: ${({ theme }) => theme.globalConstants.color.navySecondary};
  z-index: 2;

  ${({ theme }) => theme.mediaQueries.mobile`
    line-height: 15px;
    font-size: ${theme.globalConstants.fontSize.bodyS}px;
  `};

  /* sharedStyles minus line-height and color */
  font-family: ${({ theme }) => theme.globalConstants.fontFamily.body};
  margin: 0;
`;

const LandingContentContainer = styled(Flex)`
  width: min(516px, 100%);
  margin-right: auto;
  margin-left: calc(50% - 184px);
  align-items: flex-start;

  ${({ theme }) => theme.mediaQueries.large`
    margin: auto;
  `};

  ${({ theme }) => theme.mediaQueries.tablet`
    align-items: center;
  `};
`;

const StyledSpacer = styled(Spacer)<StyledSpacerProps>`
  height: ${({ ultrawide }) => ultrawide}px;

  ${({ theme, large }) =>
    large !== undefined &&
    theme.mediaQueries.large`
      height: ${large}px;
  `}
  ${({ theme, tablet }) =>
    tablet !== undefined &&
    theme.mediaQueries.tablet`
      height: ${tablet}px;
  `}
  ${({ theme, mobile }) =>
    mobile !== undefined &&
    theme.mediaQueries.mobile`
      height: ${mobile}px;
  `}
`;

const StyledSectionWrapper = styled(SectionWrapper)`
  background: ${({ theme }) => theme.globalConstants.color.gradientWhiteTan};
  z-index: auto;
`;

const MLHLogo = styled.img.attrs({
  src: MLHLogoHeroImg,
  alt: "Logo of Major League Hacking",
})`
  position: relative;
  max-height: 16px;
  top: -2px;
  padding-right: 4px;
`;

const CenteredIcon = styled(Icon)`
  margin: auto;
  height: 20px;
  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 20px;
    height: 15px;
  `}
`;

const Landing: React.FC = () => {
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  return (
    <StyledSectionWrapper>
      <ContentWrapper>
        <Animations />
        <StaticClouds />
        <LandingContentContainer column>
          <StyledSpacer ultrawide={285} large={231} tablet={367} mobile={298} />
          <Title mods="heading" gradient="gradientRedBlue172">
            Hack the North
          </Title>
          <StyledSpacer ultrawide={20} tablet={14} mobile={0} />

          <Subtitle mods="heading">
            Making it easy for anyone to dream big
          </Subtitle>
          <StyledSpacer ultrawide={28} tablet={20} mobile={10} />

          <Flex align="center" column={isLargeMobileOrSmaller}>
            <Flex align="center">
              <MLHLogo />
              <BodyText>Official Member</BodyText>
            </Flex>

            <Flex align="center">
              {isLargeMobileOrSmaller ? null : (
                <>
                  <Spacer width={10} />
                  <BodyText>•</BodyText>
                  <Spacer width={10} />
                </>
              )}
              <BodyText>January 15-17, 2021</BodyText>
              <Spacer width={10} />
              <BodyText>•</BodyText>
              <Spacer width={10} />
              <BodyText>Virtual event</BodyText>
            </Flex>
          </Flex>
          <StyledSpacer ultrawide={28} tablet={20} mobile={10} />
          <ButtonLink
            newTab
            href="https://hackthenorth2020.devpost.com/project-gallery"
          >
            View submissions
            <Spacer width={12} />
            <CenteredIcon
              src={ArrowWhiteIcon}
              alt="White Arrow Icon"
              size={isLargeMobileOrSmaller ? 18 : 24}
            />
          </ButtonLink>

          <StyledSpacer ultrawide={714} large={569} tablet={524} mobile={372} />
        </LandingContentContainer>
      </ContentWrapper>
      <DynamicClouds />
    </StyledSectionWrapper>
  );
};
export default Landing;
