import { HTMLAttributes, FC } from "react";
import { FaqProps } from "./FaqProps";
import "./faq.scss";
import { CollapsibleBox } from "@kickstartds/base/lib/collapsible-box";

export const Faq: FC<FaqProps & HTMLAttributes<HTMLElement>> = ({
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
