import { Flex, Text, Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { GradientText, ErrorPageWrapper } from "src/components";
import { SomethingWentWrongImg } from "src/static";
import { useDeviceSize } from "src/utils";

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

const StyledText = styled(Text)`
  font-size: 20px;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    font-size: 14px;
  `}
`;

const Img = styled.img`
  width: 465px;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 300px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 100%;
  `}
`;

const AwSnap = () => {
  const isMediumOrSmaller = useDeviceSize("medium");
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  return (
    <ErrorPageWrapper>
      <Img src={SomethingWentWrongImg} alt="" aria-hidden />
      <Spacer
        height={isMediumOrSmaller ? (isLargeMobileOrSmaller ? 50 : 90) : 0}
      />
      <FlexWrapper column align="center">
        <Title gradient="gradientRedBlue172" mods="heading">
          Aw, snap!
        </Title>
        <Spacer height={30} />
        <StyledText mods="heading">
          Something went wrong while displaying this webpage. Try reloading?
        </StyledText>
        <Spacer height={isMediumOrSmaller ? 10 : 50} />
      </FlexWrapper>
    </ErrorPageWrapper>
  );
};

export default AwSnap;
