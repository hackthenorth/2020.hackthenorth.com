import React from "react";

import { NavBar, PageWrapper } from "src/components";
import {
  About,
  Landing,
  Sponsors,
  Faq,
  Footer,
  ScrollingText,
} from "src/sections";

const Main = () => (
  <PageWrapper>
    <NavBar />
    <Landing />
    <ScrollingText />
    <About />
    <Sponsors />
    <Faq />
    <Footer />
  </PageWrapper>
);

export default Main;
