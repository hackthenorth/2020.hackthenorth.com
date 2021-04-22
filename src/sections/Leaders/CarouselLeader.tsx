import { Flex, Text, Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { LeaderInfo } from "./Leaders";

export interface CarouselLeaderProps extends LeaderInfo {
  className?: string;
}

const Container = styled(Flex).attrs({ column: true, align: "center" })`
  max-width: 120px;
`;

const Avatar = styled(Flex).attrs({ align: "center", justify: "start" })`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

const CarouselLeader: React.FC<CarouselLeaderProps> = ({
  name,
  title,
  imgSrc,
  className,
}) => (
  <Container className={className}>
    <Avatar>
      <img src={imgSrc} alt={`Headshot of ${name}`} />
    </Avatar>
    <Spacer height={20} />
    <Text mods="small center">{name}</Text>
    <Spacer height={4} />
    <Text mods="small center">{title}</Text>
  </Container>
);

export default CarouselLeader;
