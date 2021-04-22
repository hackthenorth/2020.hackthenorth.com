import { Link, Text, Flex } from "@hackthenorth/north";
import React, { useState } from "react";
import styled from "styled-components";

import Banner from "./index";

const StyledBanner = styled(Banner)`
  background-color: #20344c;
`;

const StyledFlex = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.largeMobile`
    flex-direction: column;
    align-items: center;
  `}
`;

const OrganizerBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <StyledBanner show={showBanner} toggleShow={() => setShowBanner(false)}>
      <StyledFlex>
        <Text mods="white">
          Organizer Applications for Hack the North 2021 are now open! &nbsp;
        </Text>
        <Link mods="redPrimaryL" href="/join">
          Apply here
        </Link>
      </StyledFlex>
    </StyledBanner>
  );
};

export default OrganizerBanner;
