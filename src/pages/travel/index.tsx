import React from "react";

import InfoPage from "src/components/InfoPage";

import { content, title } from "./copy";

const sections = [
  { id: "important-information", title: "Important information" },
  { id: "international-hackers", title: "International hackers" },
  {
    id:
      "reimbursement-policy-(only-applicable-to-hackers-receiving-reimbursements)",
    title:
      "Reimbursement policy (only applicable to hackers receiving reimbursements)",
  },
  { id: "hack-the-north-buses", title: "Hack the North buses" },
  { id: "flights", title: "Flights" },
  { id: "flight-booking", title: "Flight booking" },
  { id: "public-transportation", title: "Public transportation" },
  { id: "driving", title: "Driving" },
  { id: "visa", title: "Visa" },
];

const Travel = () => (
  <InfoPage sections={sections} content={content} title={title} />
);

export default Travel;
