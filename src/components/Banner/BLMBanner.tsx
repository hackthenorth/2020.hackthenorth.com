import { Link, Text, Flex } from "@hackthenorth/north";
import React, { useState } from "react";
import styled from "styled-components";

import Banner from "./index";

const StyledBanner = styled(Banner)`
  background-color: #000000;
`;

const StyledFlex = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.largeMobile`
    flex-direction: column;
    align-items: center;
  `}
`;

const BLMBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <StyledBanner show={showBanner} toggleShow={() => setShowBanner(false)}>
      <StyledFlex>
        <Text mods="white">Black Lives Matter. &nbsp;</Text>
        <Link
          mods="redPrimaryM"
          newTab
          href="https://linktr.ee/blacklivesmatter"
        >
          Support the movement
        </Link>
      </StyledFlex>
    </StyledBanner>
  );
};

export default BLMBanner;
