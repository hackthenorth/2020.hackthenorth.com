import {
  Spacer,
  Text,
  Link,
  RadioButton,
  RadioButtonGroup,
  Button,
  Flex,
} from "@hackthenorth/north";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import {
  Animation,
  DidWeMissAnything,
  GradientText,
  NavBar,
  ContentWrapper,
  PageWrapper,
} from "src/components";
import {
  AboutImg,
  CircleBlueIcon,
  AboutBubblesTopJson,
  AboutBubblesBottomJson,
} from "src/static";
import { useDeviceSize } from "src/utils";

import { ORGANIZER_LISTINGS } from "./copy";
import OrganizerListing from "./OrganizerListing";
import { ListingType } from "./types";

const StyledGradientText = styled(GradientText)`
  max-width: 540px;
  position: relative;
`;

const ContentContainer = styled.div`
  max-width: 660px;
  position: relative;
`;

const AboutImage = styled.img.attrs({ src: AboutImg, alt: "" })`
  position: absolute;
  object-fit: contain;
  width: 426px;

  ${({ theme }) => theme.mediaQueries.tablet`
    transform: scale(0.6);
  `};
`;

const AboutImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 12em;
  width: 400px;

  ${({ theme }) => theme.mediaQueries.tablet`
    position: relative;
    height: 200px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 6em;
  `};
`;

const BlueCircle = styled.img.attrs({ src: CircleBlueIcon, alt: "" })`
  position: absolute;
  width: 368px;
  top: 80px;
  left: -70px;
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.tablet`
    transform: scale(0.6);
  `};
`;

const TopBubbleContainer = styled.div`
  position: relative;
  top: -265px;
  left: 87px;

  ${({ theme }) => theme.mediaQueries.tablet`
    transform: scale(0.6);
    top: -140px;
    left: 60px;
  `};
`;

const BottomBubbleContainer = styled.div`
  position: relative;
  top: -135px;
  left: -115px;

  ${({ theme }) => theme.mediaQueries.tablet`
    transform: scale(0.6);
    top: -252px;
    left: -64px;
  `};
`;

const AboutImageComponent = React.memo(() => (
  <AboutImageContainer>
    <AboutImage aria-hidden />
    <BlueCircle aria-hidden />
    <TopBubbleContainer>
      <Animation
        className="animation--about-top-bubble"
        config={{ animationData: AboutBubblesTopJson }}
        width={450}
      />
    </TopBubbleContainer>
    <BottomBubbleContainer>
      <Animation
        className="animation--about-bottom-bubble"
        config={{ animationData: AboutBubblesBottomJson }}
        width={450}
      />
    </BottomBubbleContainer>
  </AboutImageContainer>
));

const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
`;

const StyledButton = styled(Button).attrs({ mods: "secondary " })<{
  selected: boolean;
}>`
  border-color: ${({ selected, theme }) =>
    selected ? theme.globalConstants.color.textDark : "transparent"};
`;

const StyledRadioButton = styled(RadioButton)`
  border-radius: 27px;
  input {
    border-radius: 27px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) =>
      theme.globalConstants.color.bluePrimaryL};
  }
`;

const LISTING_TYPES = Object.values(ListingType);
const JoinPage: React.FC = () => {
  const [listingType, setListingType] = useState(ListingType.GENERAL);
  const isTabletOrSmaller = useDeviceSize("tablet");

  return (
    <PageWrapper background="creamSecondary">
      <Helmet>
        <meta property="og:url" content="https://hackthenorth.com/join" />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Apply to help organize Hack the North"
        />

        <meta
          property="og:description"
          content="Hack the North is looking for passionate students to organize Canada's biggest hackathon!"
        />
        <meta
          property="og:image"
          content="https://hackthenorth.com/join_preview_2021.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://hackthenorth.com/join_preview_2021.png"
        />
        <meta
          name="twitter:image"
          content="https://hackthenorth.com/join_preview_2021.png"
        />
      </Helmet>
      <NavBar notMainPage />
      <StyledContentWrapper>
        <Spacer height={isTabletOrSmaller ? "30em" : "8em"} />
        <AboutImageComponent />
        <StyledGradientText gradient="gradientRedBlue172" mods="heading h2">
          Hack the North 2021 Organizing Team Application
        </StyledGradientText>
        <Spacer height="36px" />
        <ContentContainer>
          <Text mods="medium">
            Hey there!{" "}
            <span role="img" aria-label="waving-emoji">
              👋
            </span>{" "}
            Thanks for checking out the Hack the North 2021 organizer
            applications! Hack the North 2021 is going to be taking place this
            September as a <b>virtual-first event</b>. This means we&apos;ll be
            planning for a virtual event with potential in-person components
            following COVID-19 health and safety guidelines. Below you will find
            information about all of the roles we&apos;re hiring for our team
            this year.
          </Text>
          <Spacer height="24px" />
          <Text mods="medium">
            These roles are open to anybody who is currently a post-secondary
            student, however priority is given to students who attend school in
            the Waterloo area. Your program, age, gender, or other personal
            factors aren&apos;t important to us; what we care about is a strong
            desire to contribute to the team and aptitude for one or more or the
            roles below.
          </Text>
          <Spacer height="24px" />
          <Text mods="medium">
            Please keep in mind that all organizers are required to attend
            All-Hands meetings and potentially team-specific meetings on a
            regular basis (bi-weekly or weekly). The average time commitment for
            team members is 7-10 hours per week, however the exact time
            commitment may vary week-to-week depending on the role. Feel free to
            apply to more than one role if you&apos;d like, however please note
            that each organizer can only take on one role if hired.
          </Text>
          <Spacer height="24px" />
          <Text mods="medium">
            Best of luck! If you have any questions or concerns, don&apos;t
            hesitate to reach out to us at{" "}
            <Link href="mailto:hello@hackthenorth.com">
              hello@hackthenorth.com!
            </Link>{" "}
            <span role="img" aria-label="smiling-emoji">
              😄
            </span>
          </Text>
          <Spacer height="24px" />
          <Text mods="bold">Applications close March 5 at 11:59 PM EST</Text>
        </ContentContainer>
        <Spacer height="8em" />
        <RadioButtonGroup
          onSelect={(value: ListingType) => setListingType(value)}
        >
          <Flex wrap="wrap">
            {LISTING_TYPES.map((type, i) => (
              <>
                <StyledRadioButton key={i} value={type}>
                  <StyledButton
                    mods="secondary"
                    selected={type === listingType}
                  >
                    {type}
                  </StyledButton>
                </StyledRadioButton>
                <Spacer width={8} />
              </>
            ))}
          </Flex>
        </RadioButtonGroup>
        <Spacer height="36px" />
        <Text mods="medium">
          Don&apos;t worry if you don&apos;t tick all the boxes! We&apos;re
          looking for individuals who are eager to learn and contribute to the
          team.
        </Text>
        <Spacer height="6em" />
        {ORGANIZER_LISTINGS.filter(
          (listing) =>
            listingType === ListingType.GENERAL || listing.type === listingType
        ).map((listing, i) => (
          <>
            <OrganizerListing key={i} {...listing} />
            <Spacer height="4em" />
          </>
        ))}
        <DidWeMissAnything />
        <Spacer height="6em" />
      </StyledContentWrapper>
    </PageWrapper>
  );
};

export default JoinPage;
