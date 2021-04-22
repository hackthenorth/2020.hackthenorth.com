import { Flex } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import Spinner from "src/components/Spinner";

export interface LoaderProps extends React.ComponentPropsWithoutRef<"div"> {
  height?: number | string;
}

const Container = styled(Flex).attrs({ align: "center", justify: "center" })<
  LoaderProps
>`
  min-height: ${({ height = "100vh" }) =>
    typeof height === "number" ? `${height}px` : height};
`;

const Loader: React.FC<LoaderProps> = (props) => (
  <Container {...props}>
    <Spinner />
  </Container>
);

export default Loader;
