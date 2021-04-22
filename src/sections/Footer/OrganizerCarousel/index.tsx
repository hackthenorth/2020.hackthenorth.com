import { Spacer } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import OrganizerCarouselRow from "./OrganizerCarouselRow";
import { Organizer } from "./organizers";

interface OrganizerCarouselProps {
  handleOnHover: (organizer: Organizer) => void;
  handleOnLeave: () => void;
}

const CarouselWrapper = styled.div`
  margin: 0 80px;

  ${({ theme }) => theme.mediaQueries.medium`
    margin: 0 -50px;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    margin: 0 -100px;
  `}
`;

const OrganizerCarousel: React.FC<OrganizerCarouselProps> = ({
  handleOnHover,
  handleOnLeave,
}) => (
  <CarouselWrapper>
    {[0, 1, 2].map((groupNum) => (
      <>
        <OrganizerCarouselRow
          groupNum={groupNum}
          handleOnHover={handleOnHover}
          handleOnLeave={handleOnLeave}
        />
        {groupNum !== 2 && <Spacer height={30} />}
      </>
    ))}
  </CarouselWrapper>
);

export default React.memo(OrganizerCarousel);
