import { Text, Link, Flex, Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import {
  withSectionWrapper,
  ContentWrapper,
  InfiniteCarousel,
} from "src/components";
import { Section } from "src/constants";
import {
  LeftCloudImg,
  CatNooneHeadshotImg,
  ChamathPalihapitiyaHeadshotImg,
  DanielleStrachmanHeadshotImg,
  DhananjaJayalathHeadshotImg,
  DiogoBiazusHeadshotImg,
  JackDorseyHeadshotImg,
  JenDewaltHeadshotImg,
  LukeChesserHeadshotImg,
  RyanGracianoHeadshotImg,
  VinodKhoslaHeadshotImg,
} from "src/static";

import CarouselLeader from "./CarouselLeader";

export interface LeaderInfo {
  name: string;
  title: string;
  imgSrc: string;
}

const AVATAR_SIZE_PX = 100;

const LEADERS_LIST: LeaderInfo[] = [
  {
    name: "Jack Dorsey",
    title: "CEO and Founder, Square & Twitter",
    imgSrc: JackDorseyHeadshotImg,
  },
  {
    name: "Chamath Palihapitiya",
    title: "CEO and Founder, Social Capital",
    imgSrc: ChamathPalihapitiyaHeadshotImg,
  },
  {
    name: "Vinod Khosla",
    title: "Co-founder, Sun Microsystems",
    imgSrc: VinodKhoslaHeadshotImg,
  },
  {
    name: "Luke Chesser",
    title: "Co-founder and Head of Product, Unsplash",
    imgSrc: LukeChesserHeadshotImg,
  },
  {
    name: "Danielle Strachman",
    title: "Co-founder and General Partner, 1517 Fund",
    imgSrc: DanielleStrachmanHeadshotImg,
  },
  { name: "Cat Noone", title: "CEO, Stark", imgSrc: CatNooneHeadshotImg },
  {
    name: "Ryan Graciano",
    title: "Co-founder and CTO, Credit Karma",
    imgSrc: RyanGracianoHeadshotImg,
  },
  { name: "Jen Dewalt", title: "Founder, Zube", imgSrc: JenDewaltHeadshotImg },
  {
    name: "Dhananja Jayalath",
    title: "Co-founder and CPO, Athos ",
    imgSrc: DhananjaJayalathHeadshotImg,
  },
  {
    name: "Diogo Biazus",
    title: "Director of Technology, Coinberry",
    imgSrc: DiogoBiazusHeadshotImg,
  },
];

const TextContainer = styled(Flex).attrs({ column: true })`
  margin-right: 33%;

  ${({ theme }) => theme.mediaQueries.tablet`
    margin-right: 0;
  `}
`;

const StyledCarousel = styled(InfiniteCarousel)`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;
  height: ${AVATAR_SIZE_PX + 100}px;
  mask-image: linear-gradient(
    to right,
    transparent,
    black,
    black,
    black,
    black,
    transparent
  );
`;

const Cloud = styled.img`
  position: absolute;
  width: 600px;
  top: -0;
  left: 100px;
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.large`
    top: -11px;
    left: -150px;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 480px;
    top: -10px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 320px;
    top: 0;
  `}
`;

const Leaders: React.FC = () => (
  <>
    <Spacer height={130} />
    <Cloud src={LeftCloudImg} alt="" aria-hidden />
    <ContentWrapper>
      <TextContainer>
        <Text mods="heading h2">Get inspired by industry leaders</Text>
        <Spacer height={24} />
        <Text mods="medium">
          Leaders of the tech industry gather at Hack the North to be speakers,
          judges, and mentors for hackers as they build. Stay tuned as we reveal
          more of our guests this year. Know someone who&apos;d like to speak?
          Send an email to{" "}
          <Link href="mailto:hello@hackthenorth.com">
            hello@hackthenorth.com
          </Link>
        </Text>
        <Spacer height={110} />
      </TextContainer>
    </ContentWrapper>
    <StyledCarousel
      name="leaders"
      spacing={50}
      stopOnHover
      aria-label="Leaders Carousel"
    >
      {LEADERS_LIST.map((leader) => (
        <CarouselLeader key={leader.name} {...leader} />
      ))}
    </StyledCarousel>
  </>
);

export default withSectionWrapper(Leaders, Section.LEADERS);
