import { Text, Link } from "@hackthenorth/north";
import React from "react";
import styled from "styled-components";

import { ListingType, TOrganizerListing } from "./types";

const StyledText = styled(Text)`
  > ul {
    padding-inline-start: 20px;
  }
`;

const DESIGN_LISTINGS: TOrganizerListing[] = [
  {
    title: "Product Designer",
    link: "https://forms.gle/CktuqkKzcxo365757",
    description:
      "As a Product Designer for Hack the North, you will have the opportunity to design for Canada’s biggest hackathon. You will be responsible for crafting beautiful experiences and designing intuitive interfaces that will reach thousands of people worldwide. As a part of the Hack the North Design Team, you get to define what someone sees and experiences any time they interact with Hack the North.",
    descriptionExtra: (
      <Text mods="medium">
        Curious about what designing at Hack the North is like? Read our blog
        post{" "}
        <Link newTab href="https://bit.ly/3k1rG6h">
          here
        </Link>
        !
      </Text>
    ),
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Design intuitive interfaces and seamless user experiences across our
            website and mobile offerings (that will be used by thousands of
            people globally!)
          </li>
          <li>
            Go beyond digital UI and contribute to digital solutions for the
            event experience; use design thinking to build an understanding for
            our diverse hackathon attendees
          </li>
          <li>
            Work closely with the rest of the Design Team to maintain a
            consistent brand language
          </li>
          <li>
            Collaborate with frontend developers to define specifications and
            designs, and with your fellow designers to provide and receive
            feedback
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>
            Enjoy designing simple but effective human-centered interfaces and
            experiences
          </li>
          <li>
            Adaptable and efficient with an eagerness to iterate on designs
            based on feedback
          </li>
          <li>
            Have a passion and natural curiosity for designing for diversity,
            inclusion and accessibility
          </li>
          <li>
            Have experience working with design tools (Sketch, Figma, Adobe
            Creative Suite)
          </li>
          <li>
            Have a portfolio showcasing your web and/or mobile product design
            work
          </li>
          <li>Bonus: Experience working with frontend developers</li>
        </ul>
      </StyledText>
    ),
    type: ListingType.DESIGN,
  },
  {
    title: "Graphic Designer",
    link: "https://forms.gle/muYrucG2DdQn8ojy5",
    description:
      "As a Graphic Designer for Hack the North, you will be bringing Canada's biggest hackathon's brand to life on print, web, mobile, and social media platforms. You will be the go-to person for creating beautiful and polished visual work, whether it’s the Hack the North 2021 shirt illustration, the event booklet, or even a short animation for a Facebook announcement. As a part of the Hack the North Design Team, you get to define what someone sees any time they interact with Hack the North.",
    descriptionExtra: (
      <Text mods="medium">
        Curious about what designing at Hack the North is like? Read our blog
        post{" "}
        <Link newTab href="https://bit.ly/3k1rG6h">
          here
        </Link>
        !
      </Text>
    ),
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Create and experiment with various aspects of design (ex.
            illustration, motion, typography) to create an impactful brand
            identity
          </li>
          <li>
            Design compelling visual assets for our website and/or mobile
            offerings, social media accounts, and promotional items (ex. swag,
            photo booth, event booklet)
          </li>
          <li>
            Work closely with the rest of the Design Team to maintain a
            consistent brand language that is diverse, inclusive and accessible
          </li>
          <li>
            Collaborate with the Marketing Team and Logistics Team to define
            specifications and designs, and with your fellow designers to
            provide and receive feedback
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>
            Proficient with Adobe Creative Suite (Illustrator, Photoshop,
            InDesign, After Effects)
          </li>
          <li>
            Adaptable and efficient with an eagerness to iterate on designs
            based on feedback
          </li>
          <li>
            Have experience creating social media assets or promotional items
          </li>
          <li>
            Have a portfolio showcasing strong visual design work, whether it be
            illustration, motion, print, etc.
          </li>
          <li>Bonus: Have experience in motion graphics and/or animation</li>
        </ul>
      </StyledText>
    ),
    type: ListingType.DESIGN,
  },
  {
    title: "Design Team Lead",
    link: "https://forms.gle/CktuqkKzcxo365757",
    description:
      "As the Design Team Lead, you’ll be responsible for fostering a tight-knit and cohesive design team for Hack the North 2021. Together with 3-4 Product and Graphic Designers, you’ll help guide them in their respective projects, providing mentorship and support along the way. From websites to social media and pieces of swag, your brand vision and user-centred mindset will unify everything that Hack the North creates this year. As a team lead who is new to the organization, you will be working with the design advisor who will guide you smoothly into the non-traditional, fast-moving organization behind Canada’s biggest hackathon.",
    descriptionExtra: (
      <Text mods="medium">
        Curious about what designing at Hack the North is like? Read our blog
        post{" "}
        <Link newTab href="https://bit.ly/3k1rG6h">
          here
        </Link>
        !
      </Text>
    ),
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Coordinate and manage all designs needed for the Logistics Team,
            Frontend Team, Marketing Team, and more
          </li>
          <li>
            Empower your team members to grow and excel by providing
            constructive feedback, support, and mentorship
          </li>
          <li>
            Scope out design specifications and timelines for major project
            milestones
          </li>
          <li>
            Guide the team’s designers to maintain a consistent brand identity
            in all work
          </li>
          <li>
            Help to shape high-level decisions regarding brand identity and
            organizational values with a focus on a diverse, inclusive and
            accessible hackathon experience
          </li>
          <li>
            Communicate with other team leads to ensure the wider Hack the North
            team is working together cohesively and effectively
          </li>
          <li>
            Drive explorations into ways to implement design-thinking and design
            strategies for the team to pursue
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>
            Have an excellent eye for engaging designs and brand consistency
          </li>
          <li>
            Be extremely organized and able to track multiple projects and
            deadlines at once
          </li>
          <li>
            Have the ability to articulate and instill passion for
            organizational goals especially for diverse, inclusive and
            accessible designs
          </li>
          <li>
            Have strong communication and collaboration skills to build a
            supportive and positive team culture
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.DESIGN,
  },
];

const DEVELOPMENT_LISTINGS: TOrganizerListing[] = [
  {
    title: "Frontend Developer",
    link: "https://forms.gle/RExYdnTZwiNDVBuc6",
    description:
      "Frontend Developers shape how our audiences experience and interact with Hack the North online. Whether it’s working with designers to craft our main website, building modern interactive web apps like our hacker application dashboard, or brainstorming and launching new initiatives like a component library: you can expect to ship plenty of quality code to tens of thousands of users worldwide while learning new skills in a supportive team that encourages growth.",
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Write quality, maintainable code for numerous projects, including:
          </li>
          <ul>
            <li>Our main static site, hackthenorth.com</li>
            <li>Hacker Applications, apply.hackthenorth.com</li>
            <li>Attendee Dashboard, my.hackthenorth.com</li>
            <li>
              A wealth of other rich web apps and tools used by hackers,
              sponsors, mentors, organizers, and more!
            </li>
          </ul>
          <li>
            Help the entire Frontend Team grow as developers by contributing to
            discussions and participating in code reviews
          </li>
          <li>
            Architect new projects and improvements to scale and advance our
            frontend architecture
          </li>
          <li>
            Collaborate with various teams to build great experiences for
            attendees from around the globe
          </li>
          <li>
            Provide a healthy dose of memes to the rest of the organizing team
            during team-wide meetings
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>
            Have some prior web development experience using HTML, CSS, and
            JavaScript
          </li>
          <li>
            Be familiar with or have an interest in:
            <ul>
              <li>Frontend frameworks such as React</li>
              <li>Accessibility and responsive design best practices</li>
              <li>Building data driven frontends that interface with APIs</li>
            </ul>
          </li>
          <li>
            Bonus: Familiarity with TypeScript + modern React (hooks, Context) +
            GraphQL
          </li>
          <li>
            Bonus: Experience working with designers and design processes/tools
            like Figma
          </li>
          <li>
            Bonus: A good understanding of accessibility best practices to cater
            towards the diverse audience of Hack the North
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.DEVELOPMENT,
  },
  {
    title: "Backend Developer",
    link: "https://forms.gle/K1RXYiP72GuN6jwo7",
    description:
      "As a Backend Developer for Hack the North, you’ll be responsible for all the super-important tech bits which hackers don’t see. Whether it’s developing new features for the event, keeping our API server running, or making new internal tools to help the team, your efforts are the glue which holds Hack the North together.",
    descriptionExtra: (
      <Text mods="medium">
        Curious to learn more about what it’s like to build backend
        infrastructure to handle thousands of requests per minute? Read our blog
        post about (almost) every time our servers crashed{" "}
        <Link newTab href="http://bit.ly/3pwZZmX">
          here
        </Link>
        !
      </Text>
    ),
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Design, construct, and maintain the services which power Hack the
            North including:
          </li>
          <ul>
            <li>
              HackerAPI, our backend API service which supports hacker
              applications, event check-ins, our team dashboard, and many other
              services
            </li>
            <li>
              New internal tools and dashboard features to improve team
              productivity
            </li>
            <li>Web and database infrastructure</li>
          </ul>
          <li>
            Use metrics, analytics, and reporting tools to optimize performance
            and fix bugs
          </li>
          <li>Document, refactor, and apply development best practices</li>
          <li>
            Bonus: Create cinematic memes to compete with frontend for team-wide
            entertainment{" "}
            <span role="img" aria-label="sunglasses-emoji">
              😎
            </span>
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>
            Be familiar with or have an interest in:
            <ul>
              <li>Object-oriented programming languages (we use TypeScript)</li>
              <li>Any relational databases</li>
              <li>GraphQL API services</li>
              <li>Containerized applications</li>
            </ul>
          </li>
          <li>Bonus: Experience writing unit tests and specs</li>
          <li>
            Bonus: An understanding of how to build backend tooling to cater to
            the diverse audience of Hack the North
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.DEVELOPMENT,
  },
];

const SPONSORSHIP_LISTINGS: TOrganizerListing[] = [
  {
    title: "Sponsorship Coordinator",
    link: "https://forms.gle/EvELAHasszgKmtY17",
    description:
      "As a Sponsorship Coordinator for Hack the North, you will be responsible for building relationships with sponsors that support our event. You’ll be key to building the platform of funding that allows us to provide an amazing experience to hackers from all over the world. Our sponsors play an important role to our hackers, providing opportunities to network and receive mentorship from top industry engineers, and you’ll help make that happen. Together with other members of the Sponsorship Team, your efforts will ensure that today’s leading technology companies continue to provide dream opportunities for students at Hack the North.",
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Cultivate new and existing relationships with sponsors as the first
            point of contact for all sponsor representatives at the event
          </li>
          <li>Raise the funding that will bring Hack the North to life</li>
          <li>
            Coordinate with the Logistics, Marketing, Platform and Design Teams
            to build great experiences for sponsors from around the world
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>Have strong interpersonal, writing, and verbal skills</li>
          <li>Have prior experience planning events (the bigger the better)</li>
          <li>
            Be energetic and possess a wicked work ethic (calls need to be made
            during regular business hours)
          </li>
          <li>
            Be passionate about reaching out to a diverse set of sponsors to
            create an amazing and inclusive experience for hackers and sponsors
            alike
          </li>
          <li>Bonus: Have previous sales or sponsorship experience</li>
          <li>Bonus: Have experience with CRM and lead tracking software</li>
        </ul>
      </StyledText>
    ),
    type: ListingType.SPONSORSHIP,
  },
];

const MARKETING_LISTINGS: TOrganizerListing[] = [
  {
    title: "Marketing Organizer",
    link: "https://forms.gle/k2252PRH6Ah9MKDr6",
    description:
      "As a Marketing Organizer for Hack the North, you will be responsible for all social media, copy, promotion, and more associated with Hack the North's most significant milestones, including hacker applications, judge and speaker announcements, media spotlights, and community initiatives. You'll have the opportunity to conceptualize, plan, and execute multifaceted marketing campaigns that reach tens of thousands of individuals around the world.",
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Create inclusive social media and outreach campaigns to grow our
            audience, increase audience engagement, and create excitement for
            the event
          </li>
          <li>
            Understand and utilize inclusive marketing to reach and enable a
            diverse audience to fully experience and connect with Hack the North
          </li>
          <li>
            Write professional, compelling and inclusive content for external
            communications, including our website, emails, sponsorship packages,
            and other materials
          </li>
          <li>
            Have a strong understanding of the Hack the North brand and convey
            it through written content and marketing strategy
          </li>
          <li>
            Ensure that published content is consistent in its tone, style,
            content, and accuracy
          </li>
          <li>
            Work with designers and developers to scope written content, quickly
            iterate, and respond to changing product specs
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>Excellent understanding of social media content and strategy</li>
          <li>
            Be able to write professionally and inclusively with consistency
          </li>
          <li>Have great attention to detail</li>
          <li>Be flexible and adaptable in a fast-paced environment</li>
          <li>
            Be able to work cross functionally with designers and developers
          </li>
          <li>
            Bonus: Have previous experience with launching ad campaigns (ex.
            Facebook, Google)
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.MARKETING,
  },
];

const LOGISTICS_LISTINGS: TOrganizerListing[] = [
  {
    title: "Logistics Organizer",
    link: "https://forms.gle/DRxABvLntsc1BKcm6",
    description:
      "As a Logistics Organizer for Hack the North, you will be directly in charge of planning, building and executing Canada’s biggest hackathon, and empower 3,000+ attendees from diverse backgrounds to dream big. You will take ownership of one or two major components of the event, seeing it from planning to completion. Examples of projects include coordinating a series of workshops to educate and inspire hackers of all skill levels, managing our inventory of hardware items and creating a system to lend it out to hackers, or planning virtual activities and meetups to nurture a sense of community at the event. See the application form for the full list!",
    descriptionExtra: (
      <Text mods="medium">
        You will work closely with other members of the Logistics Team to ensure
        the event runs as smoothly and efficiently as possible. You will also
        work with other teams to coordinate design and development projects,
        support sponsorship and marketing efforts, and so on. Your hard work
        will pay off in 36 hours of perfectly planned chaos that will leave
        behind an unforgettable experience for you and for the 3,000+ attendees
        at Hack the North 2021.
      </Text>
    ),
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Take ownership of one or two projects and do whatever it takes to
            see it through to success
            <ul>
              <li>
                Possible projects include Event Platform, Ceremonies, Workshops,
                Activities, Judging, Swag, and more — see application form for
                more details!
              </li>
            </ul>
          </li>
          <li>
            Brainstorm and implement new ways to provide an unforgettable
            experience for attendees
          </li>
          <li>
            Create an event and community that welcomes and empowers attendees
            from diverse and underrepresented backgrounds
          </li>
          <li>Take on new tasks, big and small, as the need arises</li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>Be relentlessly detail-oriented</li>
          <li>Be creative and able to think outside the box</li>
          <li>
            Be organized and able to keep track of multiple tasks and
            responsibilities at once
          </li>
          <li>
            Have excellent teamwork, communication, and collaboration skills
          </li>
          <li>Takes initiative and able to work autonomously</li>
          <li>
            Bonus: Strong communication and negotiation skills for working with
            vendors
          </li>
          <li>
            Bonus: An understanding of the diverse audience of Hack the
            North/hackathons in general
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.LOGISTICS,
  },
  {
    title: "Logistics Team Lead",
    link: "https://forms.gle/DRxABvLntsc1BKcm6",
    description:
      "The Logistics Team is co-managed by two Logistics Team Leads, who work closely together to foster a tight-knit and cohesive team and pull off a successful event in all aspects. Each Logistics Team Lead directly oversees 3-4 logistics organizers and their respective projects, and provides mentorship, guidance and support to team members. As a team lead who is new to the organization, you will be working with an experienced team lead who will guide you smoothly into the non-traditional, fast-moving organization behind Canada’s biggest hackathon.",
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Empower your team members to grow to take on and excel in the
            responsibilities they are assigned
          </li>
          <li>
            Check-in regularly with the other Logistics Lead to stay up-to-date
            with all things logistics
          </li>
          <li>
            Communicate with other team leads to ensure the wider Hack the North
            team is working together cohesively and effectively
          </li>
          <li>
            Track progress of your team members and ensure that timelines and
            goals are being met
          </li>
          <li>
            Keep an eye on the big picture to make sure everything comes
            together cohesively and nothing slips through the cracks
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>Experience working closely with and managing a team</li>
          <li>Be relentlessly detail-oriented</li>
          <li>Be creative and able to think outside the box</li>
          <li>
            Be extremely organized and able to track multiple projects and
            deadlines at once
          </li>
          <li>
            Understand how to effectively prioritize and allocate resources
          </li>
          <li>Be able to handle high-pressure situations</li>
          <li>
            Bonus: Experience with project management systems/methodologies
          </li>
          <li>
            Bonus: Understand the various pieces that come together to make a
            successful hackathon
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.LOGISTICS,
  },
];

const FINANCE_LISTINGS: TOrganizerListing[] = [
  {
    title: "Finance Director",
    link: "https://forms.gle/MAeo9NJuNgdvUkha9",
    description:
      "As one of two Finance Directors on the Hack the North team, you will be responsible for Hack the North’s finances. From building budgets, to negotiating with external vendors, you will be collaborating across the entire organization to ensure the success of our event.",
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>Creating and tracking annual event budget</li>
          <li>Processing expenses and team reimbursements</li>
          <li>
            Work with sponsors to process and collect sponsorship payments
          </li>
          <li>
            Collaborating effectively with organizers across the team to make
            financial decisions
          </li>
          <li>Aligning financial expectations within the organization</li>
          <li>
            Keeping an eye on the big picture and balancing current expectations
            with anticipated future needs
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>Basic proficiency in Microsoft Excel</li>
          <li>Strong organization skills and attention to detail</li>
          <li>Strong interpersonal and communication skills</li>
          <li>
            Work comfortably in a team environment with changing priorities and
            time pressures
          </li>
          <li>
            Be familiar with accounting principles (baseline: AFM101 -
            Introduction to Financial Accounting or similar)
          </li>
          <li>
            Bonus: Have prior experience planning events (the bigger the better)
          </li>
          <li>
            Bonus: Experience with QuickBooks, Wave or a similar accounting
            software
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.FINANCE,
  },
];
const OPERATIONS_LISTINGS: TOrganizerListing[] = [
  {
    title: "Internal Operations",
    link: "https://forms.gle/ZfJM8kwSsmBK9pdP6",
    description:
      "As the Internal Operations Lead, you’ll help keep the team organized and play a central role in fostering a positive team culture and organizer experience. You’ll help keep the team operating smoothly by overseeing All-Hands meetings, taking meeting minutes, and administering the online tools that keep our team in sync. You’ll also be responsible for organizing team socials and other initiatives to facilitate team bonding for a primarily remote team. You'll have the unique opportunity to shape the day-to-day logistics and year-long experience of a highly active team.",
    responsibilities: (
      <StyledText mods="medium">
        <ul>
          <li>
            Organize All-Hands meetings by helping prepare the agendas and
            moderating the meetings
          </li>
          <li>
            Attend Team Leads meetings to take minutes and capture key takeaways
            and action items
          </li>
          <li>
            Plan socials and other initiatives to facilitate team bonding and
            cohesion throughout the year
          </li>
          <li>
            Ensure the team is operating smoothly by performing administrative
            tasks
          </li>
          <li>
            Proactively foster an inclusive environment in all aspects of your
            work
          </li>
        </ul>
      </StyledText>
    ),
    skills: (
      <StyledText mods="medium">
        <ul>
          <li>
            Have strong interpersonal, written, and verbal communication skills
          </li>
          <li>Have strong organizational skills and attention to detail</li>
          <li>Have experience with coordinating groups of people</li>
          <li>
            Bonus: have experience fostering positive team culture or
            communities
          </li>
        </ul>
      </StyledText>
    ),
    type: ListingType.OPERATIONS,
  },
];

export const ORGANIZER_LISTINGS: TOrganizerListing[] = [
  ...LOGISTICS_LISTINGS,
  ...SPONSORSHIP_LISTINGS,
  ...DESIGN_LISTINGS,
  ...DEVELOPMENT_LISTINGS,
  ...MARKETING_LISTINGS,
  ...FINANCE_LISTINGS,
  ...OPERATIONS_LISTINGS,
];
