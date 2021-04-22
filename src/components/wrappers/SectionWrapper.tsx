import React from "react";
import styled from "styled-components";

import { Section } from "src/constants";

/**
 * A component to hold all styles common between sections.
 */
const SectionWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

/**
 * A HOC to wrap all sections with the SectionWrapper component
 * @param Section the section component to be wrapped
 */
export const withSectionWrapper = (
  Sec: React.FC,
  sectionId: Section
): React.FC => () => (
  <SectionWrapper id={sectionId}>
    <Sec />
  </SectionWrapper>
);

export default SectionWrapper;
