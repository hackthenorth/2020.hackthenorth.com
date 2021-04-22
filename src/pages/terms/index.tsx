import React from "react";

import { InfoPage } from "src/components";

import { content, title } from "./copy";

const sections = [
  { id: "ownership", title: "Ownership" },
  { id: "media-release", title: "Media Release" },
  { id: "confidential-information", title: "Confidential Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "submissions", title: "Submissions" },
  { id: "general", title: "General" },
];

const Terms = () => (
  <InfoPage sections={sections} content={content} title={title} />
);

export default Terms;
