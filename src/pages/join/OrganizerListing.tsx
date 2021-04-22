import { Spacer, Flex, Text } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { ButtonLink } from "src/components";
import { useDeviceSize } from "src/utils";

import { TOrganizerListing } from "./types";

const StyledButtonLink = styled(ButtonLink)`
  height: 48px;
  background-color: ${({ theme }) => theme.globalConstants.color.navySecondary};
  width: fit-content;
`;

const ContentContainer = styled.div`
  max-width: 45%;
  ${({ theme }) => theme.mediaQueries.tablet`
     max-width: 100%;
  `};
`;

const OrganizerListing: React.FC<TOrganizerListing> = ({
  title,
  description,
  descriptionExtra,
  responsibilities,
  skills,
  link,
}) => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  return (
    <div>
      <Flex
        justify="space-between"
        align={!isTabletOrSmaller && "center"}
        column={isTabletOrSmaller}
      >
        <Text mods="heading h2">{title}</Text>
        {isTabletOrSmaller && <Spacer height={24} />}
        <StyledButtonLink newTab href={link}>
          Apply for this role
        </StyledButtonLink>
      </Flex>
      <Spacer height={36} />
      <Text mods="medium">{description}</Text>
      {descriptionExtra && (
        <>
          <Spacer height={12} />
          {descriptionExtra}
        </>
      )}
      <Spacer height={24} />
      <Flex column={isTabletOrSmaller}>
        <ContentContainer>
          <Text mods="heading h3">Responsibilities</Text>
          <Spacer height={12} />
          {responsibilities}
        </ContentContainer>
        {isTabletOrSmaller ? <Spacer height={12} /> : <Spacer width="5%" />}
        <ContentContainer>
          <Text mods="heading h3">Desired Skills</Text>
          <Spacer height={12} />
          {skills}
        </ContentContainer>
      </Flex>
    </div>
  );
};

export default OrganizerListing;
