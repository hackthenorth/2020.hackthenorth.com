import { Text, Spacer } from "@hackthenorth/north";
import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Arrow from "./Arrow";

export interface QuestionAnswer {
  question: string;
  /* since an answer can be a link, text or something
   * else, we can use React.ReactNode to handle all
   * the different types of answers
   */
  answer: React.ReactNode;
}

export interface AccordionProps
  extends QuestionAnswer,
    React.ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  handleOnClick: () => void;
}

export interface CollapsibleProps {
  isOpen: boolean;
  height: number; // height of the collapsible
}

const Collapsible = styled.div<CollapsibleProps>`
  overflow: hidden;
  transition: height 0.3s ease-out;
  height: ${(props) => (props.isOpen ? props.height : "0")}px;
`;

const StyledText = styled(Text)`
  cursor: pointer;
  :focus:not(.focus-visible) {
    outline: none;
  }
`;

const NoWrapSpan = styled.span`
  white-space: nowrap;
`;

// all the functions related to height are to
// allow the answer to animate with height
const getHeight = (id: string) => {
  const el = document.getElementById(id);
  return el ? el.scrollHeight : 100;
};

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  handleOnClick,
  ...rest
}) => {
  const [height, setHeight] = useState(getHeight(question));

  const debouncedSetHeight = debounce(
    () => setHeight(getHeight(question)),
    250
  );

  useEffect(() => {
    setHeight(getHeight(question));
    window.addEventListener("resize", debouncedSetHeight);

    return () => {
      window.removeEventListener("resize", debouncedSetHeight);
    };
  }, [question, debouncedSetHeight]);

  const questionAsArray = question.split(" ");
  const questionLastWord = questionAsArray[questionAsArray.length - 1];
  questionAsArray.pop();
  const questionMinusLastWord = questionAsArray.join(" ");

  return (
    <div {...rest}>
      <StyledText
        mods="medium bold"
        onClick={handleOnClick}
        tabIndex={0}
        onKeyPress={(e: any) => {
          // enter (13)
          if (e.charCode === 13) {
            handleOnClick();
          }
        }}
      >
        {questionMinusLastWord}{" "}
        <NoWrapSpan>
          {questionLastWord}
          <Arrow isOpen={isOpen} />
        </NoWrapSpan>
      </StyledText>
      <Spacer height={10} />
      <Collapsible id={question} isOpen={isOpen} height={height}>
        <Text mods="medium">{answer}</Text>
      </Collapsible>
    </div>
  );
};
export default Accordion;
