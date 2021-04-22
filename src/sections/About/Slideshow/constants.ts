import {
  LaptopsFrontImg,
  LaptopsLeftImg,
  LaptopsRightImg,
  CouchesImg,
  MicrophoneImg,
  WaterBottlesImg,
  HardwareImg,
  MentorshipImg,
  PresentationImg,
  CupsImg,
  HelicopterImg,
  YouBelongImg,
} from "src/static";

export const TABLET_VIEW_BREAKPOINT = 600;

export const AUTOPLAY_SLIDE_DURATION = 6000;

export const SLIDES = [
  {
    images: {
      vertical: MicrophoneImg,
      horizTop: WaterBottlesImg,
      horizBottom: CouchesImg,
    },
    message:
      "Get inspired, get motivated, and learn from leaders in the tech industry. ",
    title: "Industry leaders ",
  },
  {
    images: {
      vertical: LaptopsFrontImg,
      horizTop: LaptopsLeftImg,
      horizBottom: LaptopsRightImg,
    },
    message: "Build and connect with 3,000+ students from around the globe.",
    title: "Global community",
  },
  {
    images: {
      vertical: HardwareImg,
      horizTop: PresentationImg,
      horizBottom: MentorshipImg,
    },
    message:
      "Access state-of-the-art hardware and learn from workshops, mentors, and sponsors. ",
    title: "Resources and mentorship ",
  },
  {
    images: {
      vertical: CupsImg,
      horizTop: HelicopterImg,
      horizBottom: YouBelongImg,
    },
    message:
      "Take a break from hacking and enjoy fun activities throughout the event.",
    title: "Unique experiences",
  },
];
