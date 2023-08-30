import { HTMLAttributes, FC } from "react";

import { FAQProps } from "./FaqProps";
import "./faq.scss";
import { Headline } from "../headline/HeadlineComponent";
import { CollapsibleBox, RichText } from "../../playroom/components";

export const FAQ: FC<FAQProps & HTMLAttributes<HTMLElement>> = ({
  headline,
  intro,
  questions,
  variant = "default",
  align = "left",
}) => {
  return (
    <div className={`c-faq ${variant} ${align}`}>
      {headline && (
        <Headline
          className="c-faq__headline"
          spaceAfter="large"
          text={headline}
          align={align}
          level={"h2"}
        />
      )}
      {intro && <RichText className="c-faq__intro" text={intro} />}
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
