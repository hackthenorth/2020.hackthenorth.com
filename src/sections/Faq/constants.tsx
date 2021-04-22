import { Link } from "@hackthenorth/north";
import React from "react";

import { QuestionAnswer } from "src/components";

export const LEFT_QUESTION_SET: QuestionAnswer[] = [
  {
    question: "What is Hack the North?",
    answer:
      "Hack the North is the Canada's biggest hackathon, where 3,000+ students of different skill levels come together from around the world to experiment and create unique software or hardware projects from scratch. We empower and enable teams to make something great in only 36 hours by providing an abundance of resources like workshops, mentors, sponsors, and hardware components.",
  },
  {
    question: "Will Hack the North 2020++ happen in person or virtually?",
    answer:
      "We’re excited to be hosting the first ever, virtual Hack the North!",
  },
  {
    question: "Who can participate?",
    answer:
      "Students of any education level are eligible to apply for Hack the North as long as they are still enrolled in school when the virtual event takes place in January.",
  },
  {
    question: "What if I’ve never been to a hackathon before?",
    answer:
      "Hack the North welcomes students of all skill levels. In previous years, 30% of students have attended Hack the North as their first hackathon. We’ll have talks, mentors and workshops to help you with your project; hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people.",
  },
  {
    question: "When do hacker applications open?",
    answer: (
      <>
        Hacker applications are now closed for Hack the North 2020++. Still
        interested in participating? Apply to be a mentor{" "}
        <Link href="https://bit.ly/htn-mentor-app">here</Link>!
      </>
    ),
  },
  {
    question: "I applied, when will decisions be released?",
    answer:
      "Keep an eye on your inbox – we'll be sending decisions in the coming weeks!",
  },
];

export const RIGHT_QUESTION_SET: QuestionAnswer[] = [
  {
    question: "How much does it cost to attend Hack the North?",
    answer:
      "Admission to Hack the North is completely free! We will provide all the resources and mentorship our hackers need to build something incredible.",
  },
  {
    question: "How many people can be on a team?",
    answer:
      "You can form teams of up to 4 people. There are no restrictions for who they can be, so you can team up with hackers from any school, country, or experience level. Teams can be formed before or during the event.",
  },
  {
    question: "What kind of workshops, talks, and activities will there be?",
    answer:
      "Previously, we’ve held workshops and talks for a range of skill levels from beginner to advanced like Intro to React and Exploring and Wrangling Data with Pandas. Other workshops also explore various programming tools such as APIs, databases, and platforms. Activities like VR demos, meetups, and even karaoke happen throughout the weekend. Whether it’s for relaxation or health, novelty or competition, our team has something exciting prepared for you to enjoy!",
  },
  {
    question: "How will communications work during the event?",
    answer:
      "All pre-event communications will occur via email, so sign up for the Hack the North 2020++ mailing list! During the event, we’ll be using a mix of our platform and other tools to engage and communicate important information with all attendees.",
  },
  {
    question: "What platform will you be using to host the event?",
    answer:
      "We have been exploring multiple platform options to ensure an amazing experience for our attendees and will be announcing them very soon. Stay up to date by following our social media platforms and by subscribing to this year’s mailing list!",
  },
  {
    question: "Are you still looking for sponsors?",
    answer:
      "Yes! Please contact us at sponsor@hackthenorth.com so we can discuss more details.",
  },
];
