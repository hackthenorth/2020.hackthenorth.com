import { Flex } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { Animation } from "src/components";
import { PageLoadingThreeDotsJson } from "src/static";

const Container = styled(Flex).attrs({ align: "center", justify: "center" })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) =>
    theme.globalConstants.color.creamSecondary};
`;

const Loading = () => (
  <Container>
    <Animation
      config={{ animationData: PageLoadingThreeDotsJson }}
      width={50}
    />
  </Container>
);

export default Loading;
