import { Text, Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { withSectionWrapper, ContentWrapper } from "src/components";
import { Section } from "src/constants";

import { JUDGES_LIST } from "./constants";
import JudgeCard from "./JudgeCard";

const JudgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  column-gap: 125px;
  row-gap: 30px;

  ${({ theme }) => theme.mediaQueries.large`
    grid-template-columns: repeat(auto-fit, 300px);
    column-gap: 75px;
  `}
`;

const Judges: React.FC = () => (
  <>
    <Spacer height={150} />
    <ContentWrapper>
      <Text mods="heading h2">Judges</Text>
      <Spacer height={32} />
      <JudgesGrid>
        {JUDGES_LIST.map((judge) => (
          <JudgeCard key={judge.name} {...judge} />
        ))}
      </JudgesGrid>
    </ContentWrapper>
  </>
);

export default withSectionWrapper(Judges, Section.JUDGES);
