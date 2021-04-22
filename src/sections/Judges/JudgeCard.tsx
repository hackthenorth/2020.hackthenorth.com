import { Flex, Text, Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { JudgeInfo } from "./types";

const TextContainer = styled(Flex).attrs({ column: true })`
  max-width: 150px;
`;

const JudgeCard: React.FC<JudgeInfo> = ({ name, title }) => (
  <Flex align="center">
    <Spacer width={20} />
    <TextContainer>
      <Text mods="medium">{name}</Text>
      <Spacer height={4} />
      <Text mods="small">{title}</Text>
    </TextContainer>
  </Flex>
);

export default JudgeCard;
