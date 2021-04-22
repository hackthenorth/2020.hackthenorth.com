import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import {
  Avatar,
  RotatingGear,
  InfiniteCarousel,
  GearColors,
} from "src/components";
import { useDeviceSize, randomize } from "src/utils";

import { ORGANIZERS, Organizer } from "./organizers";

interface OrganizerCarouselProps {
  groupNum: number;
  handleOnHover: (organizer: Organizer) => void;
  handleOnLeave: () => void;
}

const StyledInfiniteCarousel = styled(InfiniteCarousel)`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;
  height: 75px;
  mask-image: linear-gradient(
    to right,
    transparent,
    black,
    black,
    black,
    black,
    transparent
  );

  ${({ theme }) => theme.mediaQueries.medium`
    height: 55px;
  `}
`;

const StyledAvatar = styled(Avatar)`
  img {
    transition: opacity 250ms ease-in-out;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`;

const RANDOM_ORGANIZERS = randomize<Organizer>(ORGANIZERS);

const ORGANIZERS_GROUPS = [
  RANDOM_ORGANIZERS.slice(0, 13),
  RANDOM_ORGANIZERS.slice(13, 27),
  RANDOM_ORGANIZERS.slice(27, RANDOM_ORGANIZERS.length),
];

const getOrganizersWithGears = (groupNum: number) => {
  const organizers = ORGANIZERS_GROUPS[groupNum];
  let gearNum = 0;
  const len = organizers.length;
  const organizersWithGears: (Organizer | number)[] = [...organizers];
  for (let i = 0; i < len; i++) {
    // add a gear every 4 organizers, but not at the very end
    if (i % 5 === 0 && i !== len - 1) {
      organizersWithGears.splice(i, 1, gearNum);
      gearNum = gearNum === 2 ? 0 : gearNum + 1;
    }
  }
  return organizersWithGears;
};

const ORGANIZERS_WITH_GEARS = [
  getOrganizersWithGears(0),
  getOrganizersWithGears(1),
  getOrganizersWithGears(2),
];

const GEAR_COLORS_ARRAY = Object.values(GearColors);

const OrganizerCarouselRow: React.FC<OrganizerCarouselProps> = ({
  groupNum,
  handleOnHover,
  handleOnLeave,
}) => {
  const [containerRef, isInView] = useInView();

  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <div ref={containerRef}>
      <StyledInfiniteCarousel
        name={`organizers-${groupNum}`}
        stopOnHover
        spacing={isMediumOrSmaller ? 25 : 33}
        direction={groupNum === 1 ? "left" : "right"}
        aria-label="Organizers Carousel"
      >
        {ORGANIZERS_WITH_GEARS[groupNum].map((data, i) =>
          typeof data === "number" ? (
            <RotatingGear
              isPaused={!isInView}
              key={`${data}-${i}`}
              color={GEAR_COLORS_ARRAY[data]}
              size={isMediumOrSmaller ? 55 : 75}
              isClockwise={groupNum !== 1}
            />
          ) : (
            <StyledAvatar
              key={data.name}
              src={data.img}
              isSquare={data.isSquare}
              backgroundNum={data.backgroundNum}
              onMouseEnter={() => handleOnHover(data)}
              onMouseLeave={handleOnLeave}
              size={isMediumOrSmaller ? 49 : 63}
              name={data.name}
            />
          )
        )}
      </StyledInfiniteCarousel>
    </div>
  );
};

export default React.memo(OrganizerCarouselRow);
