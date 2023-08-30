import { HTMLAttributes, FC } from "react";

import { FAQProps } from "./FaqProps";
import "./faq.scss";

export const FAQ: FC<FAQProps & HTMLAttributes<HTMLElement>> = ({
  headline,
  intro,
  questions,
  variant = "default",
  alignment = "left",
}) => {
  return (
    <div className={`faq ${variant} ${alignment}`}>
      {headline && <h2>{headline}</h2>}
      {intro && <p>{intro}</p>}
      {questions.map((question, index) => (
        <div key={index} className="question">
          <h3>{question.question}</h3>
          <p>{question.answer}</p>
        </div>
      ))}
    </div>
  );
};
