import { Text, Spacer, Link, Flex } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import {
  withSectionWrapper,
  ContentWrapper,
  Animation,
  ButtonLink,
} from "src/components";
import { Section } from "src/constants";
import { HelicopterSponsorLottieJson, LeftCloudImg } from "src/static";

import { SHOW_SPONSORS } from "./constants";
import SponsorsList from "./SponsorsList";
import SponsorsShowcase from "./SponsorsShowcase";

const LeftCloud = styled.img.attrs({ src: LeftCloudImg, alt: "" })`
  position: absolute;
  bottom: 0;
  left: -175px;
  width: 850px;
  z-index: -2;

  ${({ theme }) => theme.mediaQueries.large`
    bottom: 50px;
    left: -100px;
    width: 650px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    left: -50px;
    bottom: 75px;
    width: 550px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    left: -50px;
    bottom: 75px;
    width: 450px;
  `}
`;

const HelicopterSponsorContainer = styled.div`
  margin: 0 50px;
  position: relative;
`;

const SubContainer = styled.div`
  flex: 1;
  margin-right: 20px;

  ${({ theme }) => theme.mediaQueries.tablet`
    margin: 0;
    width: 100%;
  `};
`;

const Container = styled(Flex)`
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.tablet`
    flex-direction: column;
    margin-bottom: 0;
  `};
`;

const Sponsors: React.FC = () => (
  <>
    <Spacer height={150} />
    <ContentWrapper>
      <Container align="center">
        <SubContainer>
          <Text mods="heading h2">Sponsor a special weekend</Text>
          <Spacer height={24} />
          <Text mods="medium">
            Each year, our sponsors help us unite 3,000+ emerging developers,
            designers, and builders. Our sponsors make it possible for hackers
            to create something they&apos;re proud of. Stay tuned as we confirm
            more sponsors for the event.
            <Spacer height={20} />
            Interested in sponsoring? Email us at{" "}
            <Link href="mailto:sponsor@hackthenorth.com">
              sponsor@hackthenorth.com
            </Link>
          </Text>
          <Spacer height={44} />
          <ButtonLink href="mailto:sponsor@hackthenorth.com">
            Become a sponsor
          </ButtonLink>
        </SubContainer>
        <HelicopterSponsorContainer aria-hidden>
          <LeftCloud />
          <Animation
            className="animation--sponsors-helicopter"
            config={{ animationData: HelicopterSponsorLottieJson }}
            width={300}
          />
        </HelicopterSponsorContainer>
      </Container>
      {SHOW_SPONSORS ? (
        <>
          <Spacer height={44} />
          <SponsorsShowcase />
          <Spacer height={44} />
          <SponsorsList />
        </>
      ) : (
        <Spacer height={150} />
      )}
    </ContentWrapper>
  </>
);

export default withSectionWrapper(React.memo(Sponsors), Section.SPONSORS);
