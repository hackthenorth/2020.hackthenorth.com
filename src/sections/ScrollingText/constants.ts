import { GearColors } from "src/components";

type ScrollingItemType = "text" | "gear" | "stats";

export interface ScrollingItemData {
  content: string;
  type: ScrollingItemType;
}

interface ScrollingTextCollection {
  inspire: ScrollingItemData;
  learn: ScrollingItemData;
  connect: ScrollingItemData;
  empower: ScrollingItemData;
  build: ScrollingItemData;

  hackerStats: ScrollingItemData;
  submissionStats: ScrollingItemData;
  mentorStats: ScrollingItemData;
  volunteerStats: ScrollingItemData;
  workshopStats: ScrollingItemData;
  travelStats: ScrollingItemData;
  coffeeStats: ScrollingItemData;
  schoolStats: ScrollingItemData;
}

const getGearData = (color: GearColors): ScrollingItemData => ({
  content: color,
  type: "gear",
});

export const TextDataCollection: ScrollingTextCollection = {
  inspire: {
    content: "Inspire",
    type: "text",
  },
  learn: {
    content: "Learn",
    type: "text",
  },
  connect: {
    content: "Connect",
    type: "text",
  },
  empower: {
    content: "Empower",
    type: "text",
  },
  build: {
    content: "Build",
    type: "text",
  },
  hackerStats: {
    content: "3,000+ hackers",
    type: "stats",
  },
  submissionStats: {
    content: "320+ projects submitted",
    type: "stats",
  },
  mentorStats: {
    content: "220+ mentors",
    type: "stats",
  },
  volunteerStats: {
    content: "270+ volunteers",
    type: "stats",
  },
  workshopStats: {
    content: "30+ workshops",
    type: "stats",
  },
  travelStats: {
    content: "2,900+ hours travelled",
    type: "stats",
  },
  coffeeStats: {
    content: "8,400+ cups of coffee",
    type: "stats",
  },
  schoolStats: {
    content: "275+ schools",
    type: "stats",
  },
};

export const TOP_SCROLLING_TEXT: ScrollingItemData[] = [
  TextDataCollection.inspire,
  getGearData(GearColors.TEAL),
  TextDataCollection.hackerStats,
  getGearData(GearColors.MUSTARD),
  TextDataCollection.learn,
  getGearData(GearColors.CORAL),
  TextDataCollection.submissionStats,
  getGearData(GearColors.TEAL),
  TextDataCollection.build,
  getGearData(GearColors.MUSTARD),
];

export const MIDDLE_SCROLLING_TEXT: ScrollingItemData[] = [
  TextDataCollection.volunteerStats,
  getGearData(GearColors.CORAL),
  TextDataCollection.empower,
  getGearData(GearColors.TEAL),
  TextDataCollection.coffeeStats,
  getGearData(GearColors.MUSTARD),
  TextDataCollection.workshopStats,
  getGearData(GearColors.CORAL),
];

export const BOTTOM_SCROLLING_TEXT: ScrollingItemData[] = [
  TextDataCollection.travelStats,
  getGearData(GearColors.CORAL),
  TextDataCollection.connect,
  getGearData(GearColors.TEAL),
  TextDataCollection.schoolStats,
  getGearData(GearColors.CORAL),
  TextDataCollection.mentorStats,
  getGearData(GearColors.MUSTARD),
];
