import { Text, Flex, Spacer, Link } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { ContentWrapper, Animation, SectionWrapper } from "src/components";
import { Section } from "src/constants";
import {
  AboutImg,
  LeftCloudImg,
  PlantLottieJson,
  WaterlooEngineeringImg,
  CircleBlueIcon,
  CircleGradientIcon,
  RightCloudImg,
  AboutBubblesTopJson,
  AboutBubblesBottomJson,
} from "src/static";
import { useDeviceSize } from "src/utils";

import RecapVideo from "./RecapVideo";
import Slideshow from "./Slideshow";

const ParagraphText = styled(Text).attrs({ mods: "medium" })`
  line-height: 29px !important;

  max-width: 620px;
  ${({ theme }) => theme.mediaQueries.large`
    max-width: 582px;
  `}
  ${({ theme }) => theme.mediaQueries.tablet`
    max-width: 100%;
  `}
`;

const EngineeringImage = styled.img.attrs({
  src: WaterlooEngineeringImg,
  alt: "Waterloo Engineering Logo",
})`
  width: 100%;
  max-width: 395px;
  height: auto;
  ${({ theme }) => theme.mediaQueries.mobile`
    max-width: 333px;
  `}
`;

const PlantContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 226px;
  height: 150px;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    left: 190px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    left: 90px;
    bottom: -60px;
  `}
`;

const PlantAnimationContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 75%;
  height: 300px;
  width: 700px;

  ${({ theme }) => theme.mediaQueries.tablet`
    z-index: 0;
    position: relative;
    left: 0px;
    width: 100%;
    bottom: 75px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    height: 150px;
  `}
`;

const Container = styled.div`
  width: 100%;

  margin-right: 100px;

  ${({ theme }) => theme.mediaQueries.medium`
    margin-right: 24px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
  margin-right: 0px;
  `}
`;

const VideoHeading = styled(Text).attrs({ mods: "heading h2" })`
  max-width: 486px;
  ${({ theme }) => theme.mediaQueries.medium`
    margin-right: 40px;
  `}
`;

const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
  padding: 0;
`;

const BlueCircle = styled.img.attrs({ src: CircleBlueIcon, alt: "" })`
  position: absolute;
  z-index: -1;

  width: 544px;
  top: 170px;
  left: -208px;

  ${({ theme }) => theme.mediaQueries.large`
    width: 454px;
    top: 143px;
    left: -173px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 387px;
    top: 124px;
    left: -150px;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    width: 321px;
    top: 106px;
    left: -145px;
  `}
`;

const AboutImage = styled.img.attrs({ src: AboutImg, alt: "" })`
  position: absolute;
  object-fit: contain;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.large`
    top: 60px;
  `}
`;

const AboutImageContainer = styled.div`
  position: absolute;
  right: calc(100% + 116px);
  top: 10%;

  overflow: visible;
  width: 627px;
  height: 950px;

  ${({ theme }) => theme.mediaQueries.large`
    width: 524px;
    height: 794px;
    right: calc(100% + 52px);
  `}

  ${({ theme }) => theme.mediaQueries.medium`
    width: 400px;
    height: 600px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    position: relative;
    top: 0px;
    right: 0px;
    width: 453px;
    height: 687px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 378px;
    height: 567px;
  `}

  ${({ theme }) => theme.mediaQueries.smallMobile`
    right: 30%;
  `}
`;

const TopBubbleContainer = styled.div`
  position: absolute;
  height: 450px;
  top: -236px;
  right: -56px;

  ${({ theme }) => theme.mediaQueries.medium`
    top: -180px;
    right: -80px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    top: -200px;
    right: -100px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    top: -128px;
    right: -117px;
    height: 346px;
  `}
`;

const BottomBubbleContainer = styled.div`
  position: absolute;
  height: 450px;
  bottom: -40px;
  left: -28px;

  ${({ theme }) => theme.mediaQueries.medium`
    bottom: -143px;
    left: -91px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    bottom: -160px;
    left: -112px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    bottom: -120px;
    left: -132px;
    height: 346px;
  `}
`;

const FirstHeadlineSpacer = styled(Spacer)`
  height: 275px;

  ${({ theme }) => theme.mediaQueries.large`
    height: 200px;
  `}

${({ theme }) => theme.mediaQueries.medium`
    height: 115px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    height: 89px;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    height: 83px;
  `}
`;

const EngineeringSpacer = styled(Spacer)`
  height: 333px;

  ${({ theme }) => theme.mediaQueries.large`
    height: 241px;
  `}

  ${({ theme }) => theme.mediaQueries.medium`
    height: 140px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    height: 100px;
  `}
`;

const PinkCircle = styled.img.attrs({ src: CircleGradientIcon, alt: "" })`
  position: absolute;
  top: -50%;
  left: -10%;
  width: 208px;
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.large`
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    top: -36%;
    left: -15%;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    width: 287px;
  `}
`;

const HeaderContainer = styled.div`
  position: relative;
`;

const RightCloud = styled.img.attrs({ src: RightCloudImg, alt: "" })`
  position: absolute;
  bottom: -120%;
  width: 695px;
  z-index: -2;

  ${({ theme }) => theme.mediaQueries.large`
    width: 603px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 633px;
    bottom: -50%;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    width: 438px;
  `}
`;

const SlideshowCloud = styled.img.attrs({ src: RightCloudImg, alt: "" })`
  position: absolute;
  width: 750px;
  bottom: 368px;
  left: calc(50% - 1282px);
  z-index: -1;
  opacity: 0.5;

  ${({ theme }) => theme.mediaQueries.large`
    width: 695px;
    bottom: 370px;
    left: calc(50% - 850px);
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 350px;
    bottom: 857px;
    left: calc(50% - 462px);
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    width: 350px;
    bottom: 1120px;
    left: calc(50% - 350px);
  `}
`;

const ParagraphWrapper = styled(Flex).attrs({ column: true })`
  position: relative;
  margin-left: 50%;

  ${({ theme }) => theme.mediaQueries.large`
    margin-left: 42%;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    margin-left: 44px;
    margin-right: 44px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    margin-left: 0px;
    margin-right: 0px;
  `}
`;

const PlantAnimationBackground = styled.img.attrs({
  src: LeftCloudImg,
  alt: "",
})`
  position: relative;
  object-fit: fill;
  width: 695px;
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.large`
    width: 603px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 633px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 438px;
  `}
`;

const PlantAnimation = React.memo(() => (
  <PlantAnimationContainer>
    <PlantAnimationBackground />
    <PlantContainer>
      <Animation
        className="animation--plants"
        config={{
          animationData: PlantLottieJson,
        }}
        width={239}
      />
    </PlantContainer>
  </PlantAnimationContainer>
));

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

const About: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");

  return (
    <SectionWrapper>
      <Spacer height={300}></Spacer>
      <StyledContentWrapper id={!isTabletOrSmaller ? Section.ABOUT : ""}>
        <ParagraphWrapper>
          <AboutImageComponent />
          {isTabletOrSmaller && <Spacer height={24} id={Section.ABOUT} />}
          <FirstHeadlineSpacer />
          <Text mods="heading h2">Canada&apos;s biggest hackathon</Text>
          <Spacer height={24} />
          <ParagraphText>
            But, we’re also <i>more</i> than just a hackathon. As a student-run
            organization, our mission is to empower students of all experience
            levels and backgrounds with the mentorship and resources to turn
            their ideas into reality. Join 3,000+ students from all around the
            globe to build an incredible project in just 36 hours – online!
            We’ll handle all the details so it’s easy for you to dream big and
            build.
          </ParagraphText>
          <Spacer height={72} />
          <Text mods="heading h2">
            Gear Up{" "}
            <span role="img" aria-label="favourite-emoji">
              ⚙️
            </span>
          </Text>
          <Spacer height={24} />
          <ParagraphText>
            From January 12-15th, we will be hosting multiple series of
            workshops, giving anyone a deep dive into skills, tools and
            technologies that will make it easy to dream big and build!
          </ParagraphText>
          <Spacer height={12} />
          <ParagraphText>
            We will also be hosting tech talks, panels, and career sessions to
            help you navigate the tech industry! This event will be open to the
            public.
            <Spacer height={12} />
            <Link href="https://www.facebook.com/events/423884561972128/">
              View event details
            </Link>
          </ParagraphText>
          <EngineeringSpacer />
          <PlantAnimation />
          <EngineeringImage />
          <Spacer height={24} />
          <ParagraphText>
            Our partner of over 6 years, Waterloo Engineering continues to
            support Hack the North to build a creative, diverse, and unique
            experience for hackers. The University of Waterloo is home to
            Canada’s largest engineering school — a pipeline for engineering
            talent for the world’s leading companies. Ranked among the top 50
            engineering schools in the world, the school’s reputation for
            excellence is built on the foundation of co-op education and a bold
            history of innovation.
          </ParagraphText>
        </ParagraphWrapper>
        <Spacer height={180} />
        <Flex column={isTabletOrSmaller} align="center">
          <Container>
            <Spacer height={24} />
            <HeaderContainer>
              <VideoHeading>Create your Hack the North experience</VideoHeading>
              <PinkCircle aria-hidden />
              <RightCloud aria-hidden />
            </HeaderContainer>
            <Spacer height={30} />
            <Text>
              Want to see what goes on at Hack the North? Check out last year’s
              recap video!
            </Text>
          </Container>
          {isTabletOrSmaller && <Spacer height={48} />}
          <RecapVideo />
        </Flex>
        <SlideshowCloud aria-hidden />
        <Spacer height={200} />
        <Slideshow />
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

export default About;
