import { Link, Flex, Text, Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { GradientText, ErrorPageWrapper } from "src/components";
import { Route } from "src/constants";
import {
  FourOFourAImg,
  FourOFourBImg,
  FourOFourCImg,
  MobileFourOFourImg,
} from "src/static";
import { getSimilar, getPathname, useDeviceSize } from "src/utils";

const FlexWrapper = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.medium`
    align-items: baseline;
  `}
`;

const Title = styled(GradientText)`
  font-size: 52px;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    font-size: 40px;
  `}
`;

const ItLooksLikeText = styled(Text)`
  font-size: 20px;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    font-size: 14px;
  `}
`;

const DidYouMean = styled(Text)`
  font-size: 16px;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    font-size: 14px;
  `}
`;

const StyledLink = styled(Link)`
  font-size: 16px !important;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    font-size: 14px !important;
  `}
`;

const FourOFourImg = styled.img`
  width: 321px;
  height: 100%;
  margin: 0 15px;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 186px;
  `};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 163px;
  `};
`;

const ImagesWrapper = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.largeMobile`
    flex-direction: column;
    align-items: baseline;
  `}
`;

const MobileImg = styled.img`
  width: 100%;
`;

const ROUTE_NAMES = Object.values(Route).filter((r) => r !== Route.NOT_FOUND);

const NotFound = () => {
  const path = getPathname();
  const mostSimilarRoute = getSimilar(path, ROUTE_NAMES) || "/";
  const isMediumOrSmaller = useDeviceSize("medium");
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  return (
    <ErrorPageWrapper>
      {isLargeMobileOrSmaller ? (
        <MobileImg src={MobileFourOFourImg} alt="" aria-hidden></MobileImg>
      ) : (
        <ImagesWrapper>
          <FourOFourImg src={FourOFourAImg} alt="" aria-hidden />
          <FourOFourImg src={FourOFourBImg} alt="" aria-hidden />
          <FourOFourImg src={FourOFourCImg} alt="" aria-hidden />
        </ImagesWrapper>
      )}
      <Spacer
        height={isMediumOrSmaller ? (isLargeMobileOrSmaller ? 50 : 90) : 0}
      />
      <FlexWrapper column align="center">
        <Title gradient="gradientRedBlue172" mods="heading">
          Whoops!
        </Title>
        <Spacer height={30} />
        <ItLooksLikeText mods="heading">
          It looks like this page doesn’t exist!
        </ItLooksLikeText>
        <Spacer height={isMediumOrSmaller ? 10 : 50} />
        <DidYouMean>Did you mean this page?</DidYouMean>
        <Spacer height={20} />
        <StyledLink href={mostSimilarRoute}>{mostSimilarRoute}</StyledLink>
      </FlexWrapper>
    </ErrorPageWrapper>
  );
};

export default NotFound;
