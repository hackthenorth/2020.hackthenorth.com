import { Text, Spacer, Grid } from "@hackthenorth/north";
import React from "react";

import { withSectionWrapper, ContentWrapper } from "src/components";
import { Section } from "src/constants";
import {
  ChamathPalihapitiyaKeynoteImg,
  VinodKhoslaKeynoteImg,
} from "src/static";

import KeynoteCard from "./KeynoteCard";

const KeynoteSpeakers: React.FC = () => (
  <>
    <Spacer height={150} />
    <ContentWrapper>
      <Text mods="heading h2">Keynote Speakers</Text>
      <Spacer height={64} />
      <Grid columns={1} rows="auto" rowGap={64}>
        <KeynoteCard
          name="Chamath Palihapitiya"
          title="Social Capital"
          imgSrc={ChamathPalihapitiyaKeynoteImg}
          desc1="Chamath Palihapitiya is Founder and CEO of Social Capital, whose mission is to advance humanity by solving the world's hardest problems. Social Capital is a technology holding company that backs breakthrough companies in areas including healthcare, artificial intelligence, climate change and space."
          desc2="Before founding Social Capital, Chamath was a member of the senior executive team at Facebook and a key driver in making it one of the most important companies in the world. Prior to Facebook, Chamath held leadership positions at Mayfield Fund, AOL and Winamp. He was born in Sri Lanka, grew up in Canada, and graduated with a degree in Electrical Engineering from the University of Waterloo. Chamath is also Owner and Director of the NBA's Golden State Warriors."
        />
        <KeynoteCard
          name="Vinod Khosla"
          title="Khosla Ventures"
          imgSrc={VinodKhoslaKeynoteImg}
          desc1="Vinod Khosla is an entrepreneur, investor, and technology fan. He is the founder of Khosla Ventures, focused on impactful technology investments in software, AI, robotics, 3D printing, healthcare and more. Mr. Khosla was a co-founder of Daisy systems and founding CEO of Sun Microsystems where he pioneered open systems and commercial RISC processors."
          desc2="One of Mr. Khosla's greatest passions is being a mentor to entrepreneurs, assisting entrepreneurs and helping them build technology based businesses. Mr. Khosla is driven by the desire to make positive impact through using to technology to reinvent societal infrastructure and multiply resources. He is also passionate about Social Entrepreneurship. Vinod holds a Bachelor of Technology in Electrical Engineering from IIT, New Delhi, a Master's in Biomedical Engineering from Carnegie Mellon University and an MBA from the Stanford Graduate School of Business."
        />
      </Grid>
    </ContentWrapper>
  </>
);

export default withSectionWrapper(KeynoteSpeakers, Section.KEYNOTE_SPEAKERS);
