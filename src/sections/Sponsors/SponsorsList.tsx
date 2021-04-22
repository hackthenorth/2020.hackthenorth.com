import { Text, Link, Spacer } from "@hackthenorth/north";
import React, { memo } from "react";
import styled from "styled-components";

import {
  SPONSOR_TIER_LIST,
  PARTNERS,
  BRONZE_STARTUP_PARTNER_HEIGHT,
  BRONZE_STARTUP_PARTNER_MARGIN,
  PAST_SPONSORS,
  SHOW_PAST_SPONSORS,
} from "./constants";

const SponsorContainer = styled.div<{ containerMargin?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;

  margin: ${({ containerMargin }) => containerMargin || "65px 0"};
`;

interface SponsorItemProps {
  height: number;
  heightMobile: number;
  margin: string;
  marginMobile: string;
}

const SponsorItem = styled(Link)<SponsorItemProps>`
  height: ${({ height }) => height}px;
  margin: ${({ margin }) => margin};
  cursor: pointer;
  box-sizing: border-box;

  transition: transform 250ms;
  &:hover {
    transform: scale(1.04);
  }

  ${({ theme, heightMobile, marginMobile }) => theme.mediaQueries.tablet`
    height: ${heightMobile}px;
    margin: ${marginMobile};
  `}
`;

const SponsorImg = styled.img<{ padding?: string }>`
  height: 100%;
  padding: ${({ padding }) => padding || "10px 0"};
  box-sizing: border-box;
`;

const SponsorsList = () => (
  <>
    <Text mods="heading h3">Our sponsors</Text>
    {SPONSOR_TIER_LIST.map(
      (
        {
          sponsors,
          height,
          heightMobile,
          margin,
          marginMobile,
          containerMargin,
        },
        i
      ) => (
        <SponsorContainer containerMargin={containerMargin} key={i}>
          {sponsors.map((sponsor) => (
            <SponsorItem
              key={sponsor.name}
              href={sponsor.link}
              newTab
              height={height}
              heightMobile={heightMobile}
              margin={margin}
              marginMobile={marginMobile}
              removeSharedStyles
            >
              <SponsorImg
                src={sponsor.imgSrc}
                alt={sponsor.name}
                title={sponsor.name}
                padding={sponsor.padding}
              />
            </SponsorItem>
          ))}
        </SponsorContainer>
      )
    )}
    {SHOW_PAST_SPONSORS ? (
      <Text mods="heading h4 center">Stay tuned for more!</Text>
    ) : (
      <Spacer height={15} />
    )}
    <Spacer height={15} />
    <Text mods="heading h3">Our partners</Text>
    <SponsorContainer>
      {PARTNERS.map((partner) => (
        <SponsorItem
          key={partner.name}
          href={partner.link}
          newTab
          height={BRONZE_STARTUP_PARTNER_HEIGHT}
          heightMobile={BRONZE_STARTUP_PARTNER_HEIGHT * 0.85}
          margin={BRONZE_STARTUP_PARTNER_MARGIN}
          marginMobile={BRONZE_STARTUP_PARTNER_MARGIN}
          removeSharedStyles
        >
          <SponsorImg
            src={partner.imgSrc}
            alt={partner.name}
            title={partner.name}
            padding={partner.padding}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
    {SHOW_PAST_SPONSORS ? (
      <>
        <Text mods="heading h3">Past Sponsors</Text>
        <SponsorContainer>
          {PAST_SPONSORS.map((sponsor) => (
            <SponsorItem
              key={sponsor.name}
              href={sponsor.link}
              newTab
              height={BRONZE_STARTUP_PARTNER_HEIGHT}
              heightMobile={BRONZE_STARTUP_PARTNER_HEIGHT * 0.85}
              margin={BRONZE_STARTUP_PARTNER_MARGIN}
              marginMobile={BRONZE_STARTUP_PARTNER_MARGIN}
              removeSharedStyles
            >
              <SponsorImg
                src={sponsor.imgSrc}
                alt={sponsor.name}
                title={sponsor.name}
                padding={sponsor.padding}
              />
            </SponsorItem>
          ))}
        </SponsorContainer>
      </>
    ) : (
      <Spacer height={15} />
    )}
  </>
);

export default memo(SponsorsList);
