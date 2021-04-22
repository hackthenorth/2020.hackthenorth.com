import { Flex } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

/**
 * A component to wrap pages
 */
const PageWrapper = styled(Flex).attrs({ column: true, align: "center" })<{
  background?: string;
}>`
  position: relative;
  z-index: 0;
  width: 100%;

  background: ${({ theme, background = "tanSecondary" }) =>
    theme.globalConstants.color[background] || background};
`;

/**
 * A HOC to wrap a page with PageWrapper
 * @param Page the page to be wrapped
 */
export const withPageWrapper = (Page: React.FC): React.FC => () => (
  <PageWrapper>
    <Page />
  </PageWrapper>
);

export default PageWrapper;
