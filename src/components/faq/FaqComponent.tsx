import { HTMLAttributes, FC } from "react";
import { FAQProps } from "./FaqProps";
import "./faq.scss";
import { CollapsibleBox } from "@kickstartds/base/lib/collapsible-box";

export const FAQ: FC<FAQProps & HTMLAttributes<HTMLElement>> = ({
  questions,
}) => {
  return (
    <div className={`c-faq`}>
      {questions.map((question, index) => (
        <CollapsibleBox
          key={index}
          summary={question.question}
          text={question.answer}
        />
      ))}
    </div>
  );
};
