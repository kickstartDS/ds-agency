import { HTMLAttributes, FC } from "react";
import { FAQProps } from "./FaqProps";
import "./faq.scss";
import { CollapsibleBox } from "@kickstartds/base/lib/collapsible-box";

export const FAQ: FC<FAQProps & HTMLAttributes<HTMLElement>> = ({
  questions,
  variant = "default",
  align = "left",
}) => {
  return (
    <div className={`c-faq ${variant} ${align}`}>
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
