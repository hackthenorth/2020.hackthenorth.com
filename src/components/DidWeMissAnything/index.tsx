import { Text, Link, Spacer, UnstyledLink } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import Animation from "src/components/Animation";
import Icon from "src/components/Icon";
import MailingListSignup from "src/components/MailingListSignup";
import { SocialPlatforms, SOCIALS } from "src/constants";
import { FaqChatboxLottieJson, BubblesImg, LeftCloudImg } from "src/static";
import { hoverStyles } from "src/theme/sharedStyles";

const BackgroundImg = styled.img`
  width: 557px;
  position: absolute;
  top: -75px;
  left: -90px;
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.medium`
    left: -95px;
  `};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 400px;
    left: -15px;
    top: -55px;
  `};
`;

const BottomImg = styled.img`
  width: 40px;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.largeMobile`
    margin-top: 15px;
  `};

  ${({ theme }) => theme.mediaQueries.medium`
    width: 50px;
  `};
`;

const SocialIconGroup = styled.div`
  display: flex;
  width: 165px;
  justify-content: space-between;
`;

const LinkGroupWithImage = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 70%;
  `};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 100%;
    justify-content: center;
    flex-direction: column;
  `};
`;

const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => theme.mediaQueries.largeMobile`
    justify-content: center;
  `};
`;

const StyledLink = styled(Link)`
  margin-right: 15px;

  ${({ theme }) => theme.mediaQueries.medium`
    margin-bottom: 10px;
  `};

  ${({ theme }) => theme.mediaQueries.largeMobile`
    margin-left: 10px;
    margin-right: 10px;
  `}
`;

const SocialLink = styled(UnstyledLink)`
  ${hoverStyles}
`;

const StyledMailingListSignup = styled(MailingListSignup)`
  width: 70%;
  ${({ theme }) => theme.mediaQueries.largeMobile`
   width: 100%;
  `}
`;

const DidWeMissAnythingSection = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.medium`
    width: 100%;
    flex-direction: column-reverse;
  `}
  ${({ theme }) => theme.mediaQueries.largeMobile`
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`;

const DidWeMissAnythingLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: -10px;

  ${({ theme }) => theme.mediaQueries.medium`
    margin-right: 0px;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`;

const DidWeMissAnythingImages = styled.div`
  position: relative;
  width: 20%;
  
  ${({ theme }) => theme.mediaQueries.medium`
    width: 30%;
  `}
  
  ${({ theme }) => theme.mediaQueries.tablet`
    width: 50%;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    width: 100%;
  `}
`;

const DidWeMissAnything: React.FC = () => (
  <DidWeMissAnythingSection>
    <DidWeMissAnythingLeft>
      <Text mods="heading hmobile">Did we miss anything?</Text>
      <Spacer height={20} />
      <Text mods="medium">
        Send us an email at{" "}
        <Link href="mailto:hello@hackthenorth.com">hello@hackthenorth.com</Link>
      </Text>
      <Spacer height={20} />
      <SocialIconGroup>
        {Object.values(SocialPlatforms).map((platform) => (
          <SocialLink
            key={platform}
            href={SOCIALS[platform].link}
            newTab
            aria-label={`${platform} Icon`}
          >
            <Icon src={SOCIALS[platform].iconSrc} alt="" />
          </SocialLink>
        ))}
      </SocialIconGroup>
      <Spacer height={20} />
      <StyledMailingListSignup
        placeholder="Enter your email address to stay connected"
        mobilePlaceholder="Enter your email for updates"
      />
      <LinkGroupWithImage>
        <LinkGroup>
          <StyledLink href="https://github.com/hackthenorth">
            Open Source
          </StyledLink>
          <StyledLink href="/privacy">Privacy Policy</StyledLink>
          <StyledLink href="/code-of-conduct">Code of Conduct</StyledLink>
          <StyledLink href="http://2019.hackthenorth.com/">
            2019 Site
          </StyledLink>
        </LinkGroup>
        <BottomImg alt="bubbles" src={BubblesImg} />
      </LinkGroupWithImage>
    </DidWeMissAnythingLeft>
    <DidWeMissAnythingImages>
      <Animation
        className="animation--did-we-miss-anything"
        config={{ animationData: FaqChatboxLottieJson }}
        width={300}
      />
      <BackgroundImg src={LeftCloudImg} alt="" aria-hidden />
    </DidWeMissAnythingImages>
  </DidWeMissAnythingSection>
);

export default React.memo(DidWeMissAnything);
