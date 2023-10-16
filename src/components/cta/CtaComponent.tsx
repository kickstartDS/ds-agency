import classnames from "classnames";
import { FC } from "react";
import { CtaProps } from "./CtaProps";
import { Headline } from "@kickstartds/base/lib/headline";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Button } from "@kickstartds/base/lib/button";
import "./cta.scss";

export const Cta: FC<CtaProps> = ({
  headline,
  sub,
  text,
  largeHeadline = true,
  ctas,
  align = "left",
}) => (
  <div className={classnames("c-cta", `c-cta--align-${align}`)}>
    <Headline
      level="h1"
      style={largeHeadline === true ? "h1" : "h2"}
      align={align}
      text={headline}
      sub={sub}
      spaceAfter="minimum"
    />
    {text ? <RichText text={text} /> : ""}

    <div className="c-cta__links">
      {ctas
        ? ctas.map((cta, index) => (
            <Button
              key={index}
              label={cta.label}
              target={cta.target}
              icon={cta.icon}
              variant={
                index === 0 ? "primary" : index === 1 ? "secondary" : "tertiary"
              }
              size="medium"
            />
          ))
        : ""}
    </div>
  </div>
);
