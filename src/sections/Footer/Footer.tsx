import { Text, Spacer, Flex } from "@hackthenorth/north";
import React, { useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { SectionWrapper, Icon, ContentWrapper } from "src/components";
import { LeftCloudImg, RightCloudImg, SolidArrowIcon } from "src/static";
import { useDeviceSize } from "src/utils";

import OrganizerCarousel from "./OrganizerCarousel";
import { Organizer } from "./OrganizerCarousel/organizers";

const GreenBar = styled(Flex).attrs({ column: true, align: "center" })`
  width: 100%;
  height: 50px;
  background: linear-gradient(
      179.57deg,
      #5abcaa 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #1dc1cc;
`;

const CloudsWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;

const LeftCloud = styled.img`
  position: absolute;
  width: 700px;
  bottom: -25px;
  left: -100px;

  ${({ theme }) => theme.mediaQueries.large`
    width: 550px;
    left: -50px;
  `}

  ${({ theme }) => theme.mediaQueries.medium`
    width: 450px;
    left: -255px;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    width: 400px;
  `}
`;

const RightCloud = styled.img`
  position: absolute;
  width: 700px;
  bottom: -25px;
  right: -100px;

  ${({ theme }) => theme.mediaQueries.large`
    width: 550px;
    right: -50px;
  `}
  
  ${({ theme }) => theme.mediaQueries.medium`
    width: 450px;
    right: -255px;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    width: 400px;
  `}
`;

const BackToTopWrapper = styled.button<{ inView: boolean }>`
  background: transparent;
  border: none;
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  bottom: 210px;
  right: 75px;
  opacity: ${({ inView }) => (inView ? 0.5 : 0)};
  transition: opacity 250ms;
  cursor: ${({ inView }) => (inView ? "pointer" : "initial")};

  &:focus,
  &:hover {
    outline: none;
    opacity: ${({ inView }) => (inView ? 1 : 0)};
  }

  ${({ theme }) => theme.mediaQueries.large`
    bottom: 175px;
    right: 60px;
  `}

  ${({ theme }) => theme.mediaQueries.medium`
    bottom: 45px;
    right: 4px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    bottom: 70px;
  `}
`;

const BackToTopText = styled(Text)`
  color: ${({ theme }) => theme.globalConstants.color.bluePrimaryD};
  /* shared styles */
  font-family: ${({ theme }) => theme.globalConstants.fontFamily.body};
  margin: 0;

  ${({ theme }) => theme.mediaQueries.medium`
    font-size: ${theme.globalConstants.fontSize.bodyXs}px;
  `}
`;

const ForTheStudentsText = styled(Text)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.globalConstants.fontSize.h3}px;

  ${({ theme }) => theme.mediaQueries.medium`
    font-size: ${theme.globalConstants.fontSize.bodyL}px;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    font-size: ${theme.globalConstants.fontSize.bodyM}px;
  `}
`;

const TextWrapper = styled.div`
  margin-left: 50px;

  ${({ theme }) => theme.mediaQueries.medium`
    margin-left: 0
  `}
`;

const OrganizerText = styled(Text)<{ isHidden: boolean }>`
  min-height: 1.5em;
  transition: opacity 250ms;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
`;

const DEFAULT_ORGANIZER_TEXT = "";
const DEFAULT_EMOJI = "🇨🇦";

const Footer: React.FC = () => {
  const [isHovering, setHovering] = useState(false);
  const [organizerText, setOrganizerText] = useState(DEFAULT_ORGANIZER_TEXT);
  const [emoji, setEmoji] = useState(DEFAULT_EMOJI);
  const [ref, inView] = useInView();
  const isMediumOrSmaller = useDeviceSize("medium");

  const handleOnHover = useCallback((organizer: Organizer) => {
    setOrganizerText(`${organizer.name}`);
    setHovering(true);
  }, []);

  const handleOnLeave = useCallback(() => {
    setHovering(false);
    setEmoji(DEFAULT_EMOJI);
  }, []);

  return (
    <>
      <SectionWrapper>
        <ContentWrapper ref={ref}>
          <TextWrapper>
            <ForTheStudentsText mods="heading">
              For students by students in Waterloo{" "}
              <span role="img" aria-label="favourite-emoji">
                {emoji}
              </span>
            </ForTheStudentsText>
            <Spacer height={10} />
            <OrganizerText
              mods="bodyM"
              isHidden={!isHovering}
              aria-hidden={!isHovering}
            >
              {organizerText}
            </OrganizerText>
          </TextWrapper>
          <Spacer height={70} />
          <OrganizerCarousel
            handleOnHover={handleOnHover}
            handleOnLeave={handleOnLeave}
          />
          <Spacer height={70} />
        </ContentWrapper>
        <CloudsWrapper>
          <LeftCloud src={LeftCloudImg} alt="" aria-hidden />
          <RightCloud src={RightCloudImg} alt="" aria-hidden />
        </CloudsWrapper>
        <GreenBar>
          <Spacer height={16} />
          <Text mods="small bold">Copyright Techyon, 2020.</Text>
          <Spacer height={8} />
        </GreenBar>
      </SectionWrapper>
      <BackToTopWrapper inView={inView}>
        <Icon
          src={SolidArrowIcon}
          size={isMediumOrSmaller ? 40 : 70}
          onClick={() =>
            inView
              ? window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              : null
          }
          alt=""
        />
        <Spacer height={10} />
        <BackToTopText removeSharedStyles>Back to the top</BackToTopText>
      </BackToTopWrapper>
    </>
  );
};

export default Footer;
