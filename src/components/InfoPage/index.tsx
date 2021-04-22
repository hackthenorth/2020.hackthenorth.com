import { Spacer, UnstyledLink, Flex } from "@hackthenorth/north";
import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Scrollspy from "react-scrollspy";
import styled from "styled-components";

import DidWeMissAnything from "src/components/DidWeMissAnything";
import GradientText from "src/components/GradientText";
import NavBar, { NAVBAR_HEIGHT_PX } from "src/components/NavBar";
import UnderlinedText from "src/components/UnderlinedText";
import ContentWrapper from "src/components/wrappers/ContentWrapper";
import PageWrapper from "src/components/wrappers/PageWrapper";
import { useScrollDirection } from "src/utils";
import { ScrollDirection } from "src/utils/hooks/useScrollDirection";

interface InfoPageProps {
  sections: { id: string; title: string }[];
  content: string;
  title: string;
}

const Heading: React.FC<{
  level: number;
  children: React.ReactElement<{ value: string }>[];
}> = (props) => {
  return React.createElement(
    `h${props.level}`,
    {
      id: props.children[0].props.value
        .split(" ")
        .map((s: string) => s.toLowerCase())
        .join("-"),
    },
    props.children
  );
};

const Sidebar = styled(Flex).attrs({ column: true })<{ shiftUp: boolean }>`
  width: 150px;
  top: 120px;
  position: sticky;
  align-self: flex-start;
  margin-right: 75px;

  transition: transform 250ms;
  transform: translateY(
    ${({ shiftUp }) => (shiftUp ? -NAVBAR_HEIGHT_PX : 0)}px
  );

  ${(props) => props.theme.mediaQueries.tablet`
    display: none;
  `};
`;

const SidebarLink = styled(UnstyledLink)`
  margin-bottom: 1em;

  & div {
    & p {
      color: ${(props) => props.theme.globalConstants.color.bluePrimaryM};
    }
    &:after {
      bottom: -2px;
    }
  }

  &.active div p {
    color: ${(props) => props.theme.globalConstants.color.textDark};
  }
`;

const Content = styled.div`
  font-family: ${(props) => props.theme.globalConstants.fontFamily.body};
  color: ${(props) => props.theme.globalConstants.color.textDark};
  line-height: 2em;

  h1,
  h2,
  h3,
  h4 {
    font-family: ${(props) => props.theme.globalConstants.fontFamily.heading};
  }

  h2 {
    padding-top: 100px;
    margin-top: -80px;
  }

  hr {
    background: ${(props) => props.theme.globalConstants.color.textDark};
    border-style: none;
    height: 1px;
    margin: 2rem 0;
  }

  a {
    color: ${({ theme }) => theme.globalConstants.color.bluePrimaryM};

    :hover {
      text-decoration: none;
    }
  }

  ${(props) => props.theme.mediaQueries.tablet`
    margin-left: 0;
  `}
`;

const FlexColumn = styled(Flex).attrs({ column: true })``;

const FlexWithMargins = styled(FlexColumn)`
  width: 100%;
  ${(props) => props.theme.mediaQueries.tablet`
    padding: 0 25px;
  `}
`;

const InfoPage: React.FC<InfoPageProps> = ({ title, content, sections }) => {
  const scrollDirection = useScrollDirection();
  const [isScrolledDown, setScrolledDown] = useState(false);

  /**
   * Change the appearance of the nav bar when a user
   * scrolls down the page.
   */
  const checkScrolledDown = () => {
    const hasScrolledDown = window.scrollY > 0;
    setScrolledDown(hasScrolledDown);
  };

  const debouncedCheckScrollDown = debounce(checkScrolledDown, 250);

  useEffect(() => {
    window.addEventListener("scroll", debouncedCheckScrollDown);
    checkScrolledDown();

    return () => window.removeEventListener("scroll", debouncedCheckScrollDown);
  }, [debouncedCheckScrollDown]);

  const [curSection, setCurSection] = useState<string>();
  const onScrollSpyUpdate = (el: string) =>
    setCurSection(((el as unknown) as HTMLElement)?.id); // types for react-scrollspy are incorrect

  return (
    <PageWrapper background="creamSecondary">
      <NavBar notMainPage />
      <ContentWrapper>
        <Spacer height="6em" />
        <Flex justify="space-between">
          <FlexColumn>
            <Spacer height="120px" />
            <Sidebar
              shiftUp={
                isScrolledDown && scrollDirection === ScrollDirection.DOWN
              }
            >
              <Scrollspy
                offset={-80}
                items={sections.map(({ id }) => id)}
                onUpdate={onScrollSpyUpdate}
                componentTag={FlexColumn}
                currentClassName="active"
              >
                {sections.map(({ id, title }) => (
                  <SidebarLink key={id} href={`#${id}`}>
                    <UnderlinedText
                      underlineOnHover
                      underlined={curSection === id}
                    >
                      {title}
                    </UnderlinedText>
                  </SidebarLink>
                ))}
              </Scrollspy>
            </Sidebar>
          </FlexColumn>
          <FlexWithMargins>
            <GradientText gradient="gradientRedBlue172" mods="heading h2">
              {title}
            </GradientText>
            <Spacer height="2em" />
            <Content>
              <ReactMarkdown
                source={content}
                renderers={{ heading: Heading }}
              />
            </Content>
          </FlexWithMargins>
        </Flex>
        <Spacer height="6em" />
        <DidWeMissAnything />
        <Spacer height="6em" />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default InfoPage;
