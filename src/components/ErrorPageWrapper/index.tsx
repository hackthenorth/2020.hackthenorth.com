import { Flex } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { RightCloudImg, LeftCloudImg } from "src/static";

const Container = styled(Flex).attrs({ align: "center", justify: "center" })`
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: ${({ theme }) =>
    theme.globalConstants.color.creamSecondary};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    padding: 50px;
  `}
`;

const FlexWrapper = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.medium`
    align-items: baseline;
  `}
`;

const PageFlexWrapper = styled(FlexWrapper)`
  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 100%;
  `}
`;

const WestCloud = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.4;
  width: 1400px;
  left: -400px;
  bottom: 80px;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 1000px;
    left: -300px;
    bottom: 0px;
  `};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 700px;
    left: -250px;
  `};
`;

const EastCloud = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.4;
  width: 1140px;
  right: -400px;
  bottom: 110px;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 700px;
    right: -300px;
    bottom: -55px;
  `};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 500px;
    right: -250px;
    bottom: 200px;
  `};
`;

const NECloud = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.4;
  width: 500px;
  top: -100px;
  right: 100px;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 800px;
    top: 20px;
    right: -250px
  `};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    right: -400px;
    top: -100px;
  `};
`;

const NWCloud = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.4;
  width: 800px;
  top: -150px;
  left: 150px;

  ${({ theme }) => theme.mediaQueries.large`
    width: 700px;
  `};

  ${({ theme }) => theme.mediaQueries.medium`
    width: 800px;
    left: -240px;
    top: -90px;
  `};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    left: -400px;
    top: 50px;
  `};
`;

const SouthCloud = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.4;
  bottom: -100px;
  width: 1300px;
  left: 380px;

  ${({ theme }) => theme.mediaQueries.large`
    width: 1140px;
    left: 100px;
  `};

  ${({ theme }) => theme.mediaQueries.medium`
    display: none;
  `};
`;

const ErrorPageWrapper: React.FC = ({ children }) => (
  <Container>
    <WestCloud src={RightCloudImg} alt="" aria-hidden />
    <EastCloud src={RightCloudImg} alt="" aria-hidden />
    <SouthCloud src={LeftCloudImg} alt="" aria-hidden />
    <NECloud src={RightCloudImg} alt="" aria-hidden />
    <NWCloud src={RightCloudImg} alt="" aria-hidden />
    <PageFlexWrapper column align="center">
      {children}
    </PageFlexWrapper>
  </Container>
);

export default ErrorPageWrapper;
