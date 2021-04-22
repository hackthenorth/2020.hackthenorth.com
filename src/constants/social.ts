import {
  SocialFacebookGradientIcon,
  SocialTwitterGradientIcon,
  SocialInstaGradientIcon,
  SocialLinkedinGradientIcon,
} from "src/static";

export enum SocialPlatforms {
  FACEBOOK = "Facebook",
  INSTA = "Instagram",
  TWITTER = "Twitter",
  LINKEDIN = "LinkedIn",
}

export const SOCIALS = {
  [SocialPlatforms.FACEBOOK]: {
    iconSrc: SocialFacebookGradientIcon,
    link: "https://www.facebook.com/hackthenorth/",
  },
  [SocialPlatforms.INSTA]: {
    iconSrc: SocialInstaGradientIcon,
    link: "https://www.instagram.com/hackthenorth",
  },
  [SocialPlatforms.TWITTER]: {
    iconSrc: SocialTwitterGradientIcon,
    link: "https://twitter.com/hackthenorth",
  },
  [SocialPlatforms.LINKEDIN]: {
    iconSrc: SocialLinkedinGradientIcon,
    link: "https://www.linkedin.com/company/hack-the-north",
  },
};
