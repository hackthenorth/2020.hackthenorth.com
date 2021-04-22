import styled from "styled-components";

/**
 * A component to hold content for a section
 */
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  padding: 0 3%;

  ${({ theme }) => theme.mediaQueries.large`
    padding: 0 10%;
  `}

  ${({ theme }) => theme.mediaQueries.tablet`
    padding: 0 6%;
  `}

  ${({ theme }) => theme.mediaQueries.largeMobile`
    padding: 0 4%;
  `}
`;

export default ContentWrapper;
