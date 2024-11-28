import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { FaqProps } from "./FaqProps";
import "./faq.scss";
import { CollapsibleBox } from "@kickstartds/base/lib/collapsible-box";

export type { FaqProps };

export const FaqContextDefault = forwardRef<
  HTMLDivElement,
  FaqProps & HTMLAttributes<HTMLDivElement>
>(({ questions, ...rest }, ref) => (
  <div {...rest} ref={ref} className={`dsa-faq`}>
    {questions.map((question, index) => (
      <CollapsibleBox
        key={index}
        summary={question.question}
        text={question.answer}
      />
    ))}
  </div>
));

export const FaqContext = createContext(FaqContextDefault);
export const Faq = forwardRef<
  HTMLDivElement,
  FaqProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Component = useContext(FaqContext);
  return <Component {...props} ref={ref} />;
});
Faq.displayName = "Faq";
