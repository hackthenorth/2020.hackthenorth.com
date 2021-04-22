import { Flex, Text, Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { useDeviceSize } from "src/utils";

import { KeynoteSpeakerInfo } from "./types";

const TextContainer = styled(Flex)`
  max-width: 700px;
`;

const StyledImg = styled.img`
  width: 300px;
`;

const Description = styled(Text)`
  text-align: justify;
  line-height: 1.6;
  font-size: 14px;
`;

const KeynoteCard: React.FC<KeynoteSpeakerInfo> = ({
  name,
  title,
  imgSrc,
  desc1,
  desc2,
}) => {
  const isTabletOrSmaller = useDeviceSize("tablet");

  return (
    <Flex align="center" column={isTabletOrSmaller}>
      <StyledImg src={imgSrc} alt={`Keynote speaker ${name}`} />
      <Spacer width={64} height={32} />
      <TextContainer column>
        <Text mods="h3 bold">{name}</Text>
        <Spacer height={16} />
        <Text mods="h3">{title}</Text>
        <Spacer height={16} />
        <Description>{desc1}</Description>
        <Spacer height={16} />
        <Description>{desc2}</Description>
      </TextContainer>
    </Flex>
  );
};

export default KeynoteCard;
