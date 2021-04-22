import {
  //SunLifeLogoImg,
  LogoDarkIcon,
  LogoIconDarkIcon,
} from "src/static";

import { SponsorsShowcaseItemProps } from "./SponsorsShowcaseItem";

export const SHOW_SPONSORS = true;

export const SHOW_PAST_SPONSORS = false;

export const SPONSORS_SHOWCASE: SponsorsShowcaseItemProps[] = [
  {
    name: "Hack The North",
    link: "https://hackthenorth.com",
    linkText: "Are you What's Next?",
    logo: LogoDarkIcon,
    desc: [
      "Hack the North is Canada’s biggest hackathon, happening January 15-17, 2021. With 36 hours of mentorship, resources, and unique experiences, we want to make it easy for anyone to dream big.",
    ],
  },
  {
    name: "Hack The North",
    link: "https://hackthenorth.com",
    linkText: "Are you What's Next?",
    logo: LogoDarkIcon,
    desc: [
      "Hack the North is Canada’s biggest hackathon, happening January 15-17, 2021. With 36 hours of mentorship, resources, and unique experiences, we want to make it easy for anyone to dream big.",
    ],
  },
  {
    name: "Hack The North",
    link: "https://hackthenorth.com",
    linkText: "Are you What's Next?",
    logo: LogoDarkIcon,
    desc: [
      "Hack the North is Canada’s biggest hackathon, happening January 15-17, 2021. With 36 hours of mentorship, resources, and unique experiences, we want to make it easy for anyone to dream big.",
    ],
  },
    {
      name: "Hack The North",
      link: "https://hackthenorth.com",
      linkText: "Are you What's Next?",
      logo: LogoDarkIcon,
      desc: [
        "Hack the North is Canada’s biggest hackathon, happening January 15-17, 2021. With 36 hours of mentorship, resources, and unique experiences, we want to make it easy for anyone to dream big.",
      ],
    },
    {
      name: "Hack The North",
      link: "https://hackthenorth.com",
      linkText: "Are you What's Next?",
      logo: LogoDarkIcon,
      desc: [
        "Hack the North is Canada’s biggest hackathon, happening January 15-17, 2021. With 36 hours of mentorship, resources, and unique experiences, we want to make it easy for anyone to dream big.",
      ],
    },
];

export const SPONSORS_SHOWCASE_LENGTH = SPONSORS_SHOWCASE.length;

export enum SponsorType {
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze",
  STARTUP = "startup",
  PARTNER = "partner",
  PAST = "past",
}

interface Sponsor {
  name: string;
  tier: SponsorType;
  imgSrc: string;
  link: string;
  padding?: string;
  feature?: {
    text: string;
    link: string;
    linkLabel: string;
  };
}

const SPONSORS_LIST: Sponsor[] = [
  {
    name: "Hack The North",
    tier: SponsorType.GOLD,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.SILVER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.SILVER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.SILVER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "0px 0",
  },
  {
    name: "Hack The North Auctions",
    tier: SponsorType.SILVER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.SILVER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://www.ubisoft.com/",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.BRONZE,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com",
    padding: "10px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.STARTUP,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.STARTUP,
    imgSrc: LogoIconDarkIcon,
    link: "https://arctype.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.STARTUP,
    imgSrc: LogoIconDarkIcon,
    link: "https://arctype.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.STARTUP,
    imgSrc: LogoIconDarkIcon,
    link: "https://arctype.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.STARTUP,
    imgSrc: LogoIconDarkIcon,
    link: "https://contrarycap.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PARTNER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PARTNER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PARTNER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PARTNER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PARTNER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PARTNER,
    imgSrc: LogoIconDarkIcon,
    link: "https://hackthenorth.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PAST,
    imgSrc: LogoIconDarkIcon,
    link: "https://www.microsoft.com/",
    padding: "0px 0",
    feature: {
      text:
        "At Microsoft, we believe everyone should find meaning in their work. If each of us follows our individual passion and contributes our unique philosophy, the impossible becomes possible. So, what does your future hold? Not only for you personally, but for the world. With Microsoft, you can help empower every person and organization on the planet to achieve more.",
      link: "http://microsoft.com/university",
      linkLabel: "Students and Graduates Page",
    },
  },
  {
    name: "Hack The North",
    tier: SponsorType.PAST,
    imgSrc: LogoIconDarkIcon,
    link: "https://www.flexport.com",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PAST,
    imgSrc: LogoIconDarkIcon,
    link: "https://www.facebook.com",
    padding: "0px 0",
    feature: {
      text:
        "Facebook's mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we're building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together. People at Facebook are builders at heart.",
      link: "https://www.facebook.com/careers/university",
      linkLabel: "University Jobs Page",
    },
  },
  {
    name: "Hack The North",
    tier: SponsorType.PAST,
    imgSrc: LogoIconDarkIcon,
    link: "https://careers.google.com/students",
    padding: "0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PAST,
    imgSrc: LogoIconDarkIcon,
    link: "https://www.bloomberg.com/",
    padding: "0px 0",
  },
  {
    name: "Hack The North",
    tier: SponsorType.PAST,
    imgSrc: LogoIconDarkIcon,
    link: "https://www.coursera.org/",
    padding: "0px 0",
  },
];

const sponsorsFilteredByTier = (tier: Sponsor["tier"]) =>
  SPONSORS_LIST.filter((s) => s.tier === tier);

export const SPONSORS = Object.values(SponsorType).reduce(
  (acc, curTier: SponsorType) => {
    acc[curTier] = sponsorsFilteredByTier(curTier);
    return acc;
  },
  {} as Record<SponsorType, Sponsor[]>
);

export const PARTNERS = sponsorsFilteredByTier(SponsorType.PARTNER);

export const PAST_SPONSORS = sponsorsFilteredByTier(SponsorType.PAST);

const GOLD_SPONSOR_HEIGHT = 300;
const GOLD_SPONSOR_MARGIN = "20px 20%";
const GOLD_SPONSOR_MARGIN_MOBILE = "5% 10%";

const SILVER_SPONSOR_HEIGHT = 125;
const SILVER_SPONSOR_MARGIN = "0 25px";

export const BRONZE_STARTUP_PARTNER_HEIGHT = 85;
export const BRONZE_STARTUP_PARTNER_MARGIN = "0 25px";

const GOLD_CONTAINER_MARGIN = "65px 0 0";
const SILVER_BRONZE_CONTAINER_MARGIN = "75px 0 0";
const STARTUP_CONTAINER_MARGIN = "45px 0 15px";

export const SPONSOR_TIER_LIST = [
  {
    sponsors: SPONSORS[SponsorType.GOLD],
    height: GOLD_SPONSOR_HEIGHT,
    heightMobile: GOLD_SPONSOR_HEIGHT * 0.85,
    margin: GOLD_SPONSOR_MARGIN,
    marginMobile: GOLD_SPONSOR_MARGIN_MOBILE,
    containerMargin: GOLD_CONTAINER_MARGIN,
  },
  {
    sponsors: SPONSORS[SponsorType.SILVER],
    height: SILVER_SPONSOR_HEIGHT,
    heightMobile: SILVER_SPONSOR_HEIGHT * 0.85,
    margin: SILVER_SPONSOR_MARGIN,
    marginMobile: SILVER_SPONSOR_MARGIN,
    containerMargin: SILVER_BRONZE_CONTAINER_MARGIN,
  },
  {
    sponsors: SPONSORS[SponsorType.BRONZE],
    height: BRONZE_STARTUP_PARTNER_HEIGHT,
    heightMobile: BRONZE_STARTUP_PARTNER_HEIGHT * 0.85,
    margin: BRONZE_STARTUP_PARTNER_MARGIN,
    marginMobile: BRONZE_STARTUP_PARTNER_MARGIN,
    containerMargin: SILVER_BRONZE_CONTAINER_MARGIN,
  },
  {
    sponsors: SPONSORS[SponsorType.STARTUP],
    height: BRONZE_STARTUP_PARTNER_HEIGHT,
    heightMobile: BRONZE_STARTUP_PARTNER_HEIGHT * 0.85,
    margin: BRONZE_STARTUP_PARTNER_MARGIN,
    marginMobile: BRONZE_STARTUP_PARTNER_MARGIN,
    containerMargin: STARTUP_CONTAINER_MARGIN,
  },
];
