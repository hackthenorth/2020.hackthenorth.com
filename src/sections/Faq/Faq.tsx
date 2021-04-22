import { Text, Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import {
  AccordionGroup,
  withSectionWrapper,
  ContentWrapper,
  DidWeMissAnything,
} from "src/components";
import { Section } from "src/constants";
import { useDeviceSize } from "src/utils";

import { LEFT_QUESTION_SET, RIGHT_QUESTION_SET } from "./constants";

const AccordionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.medium`
    flex-direction: column;
  `}
`;

const StyledAccordionGroup = styled(AccordionGroup)`
  .accordion {
    margin-bottom: 40px;
  }
`;

const LeftStyledAccordionGroup = styled(StyledAccordionGroup)`
  margin-right: 50px;
  ${({ theme }) => theme.mediaQueries.medium`
    margin-right: 0px;
  `}
`;

const Faq: React.FC = () => {
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");
  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <ContentWrapper>
      <Text mods="heading h2">Frequently asked questions</Text>
      <Spacer height={32} />
      <AccordionsWrapper>
        <LeftStyledAccordionGroup
          questionSet={LEFT_QUESTION_SET.map((cur) => ({
            question: cur.question,
            answer: <Text>{cur.answer}</Text>,
          }))}
        />
        <StyledAccordionGroup
          questionSet={RIGHT_QUESTION_SET.map((cur) => ({
            question: cur.question,
            answer: <Text>{cur.answer}</Text>,
          }))}
          shouldOpenFirst={!isMediumOrSmaller}
        />
      </AccordionsWrapper>
      {isLargeMobileOrSmaller ? (
        <Spacer height={50} />
      ) : (
        <Spacer height={140} />
      )}
      <DidWeMissAnything />
      <Spacer height={110} />
    </ContentWrapper>
  );
};

export default withSectionWrapper(Faq, Section.FAQ);
