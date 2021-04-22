import React, { useState } from "react";

import { Accordion, QuestionAnswer } from "../Accordion";

interface AccordionGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  questionSet: QuestionAnswer[];
  shouldOpenFirst?: boolean;
}

const FIRST_QUESTION_OPEN = 0;
const NOT_OPEN = -1;

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  questionSet,
  shouldOpenFirst = true,
  ...rest
}) => {
  // by default, the first question in an accordion group is open
  const [openIndex, setOpenIndex] = useState(
    shouldOpenFirst ? FIRST_QUESTION_OPEN : NOT_OPEN
  );

  const handleClick = (index: number) => {
    // if the current question is open, we want to close it
    // otherwise if it's closed, we want to open it
    const newOpenIndex = index === openIndex ? NOT_OPEN : index;
    setOpenIndex(newOpenIndex);
  };

  return (
    <div {...rest}>
      {questionSet.map((cur, index) => (
        <Accordion
          className="accordion"
          key={cur.question}
          question={cur.question}
          answer={cur.answer}
          isOpen={index === openIndex}
          handleOnClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
